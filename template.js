const fs = require('fs');
const ejs = require('ejs');
const pathLib = require('path');

descend = (path) => {
	fs.readdir(path, (err, files) => {
		if (err) throw err;
		for (let file of files) {
			file = `${path}/${file}`;
			fs.stat(file, (err, stat) => {
				if (err) throw err;

				if (stat.isDirectory()) {
					descend(file);
				} else {
					if (/^\.ejs$/i.test(pathLib.parse(file).ext)) {
						if (/\.partial\.ejs$/i.test(file)) {
							return;
						}
						console.log('templating', file);
						fs.readFile(file, (err, fileContents) => {
							if (err) throw err;
							let newContents = ejs.render(fileContents.toString('utf-8'), {}, {
								filename: pathLib.resolve(file)
							});
							fs.writeFile(file.replace(/ejs$/i, "html"), newContents, (err) => {
								if (err) throw err;
							});
						});
					}
				}
			});
		}
	});
};

descend('./build');
