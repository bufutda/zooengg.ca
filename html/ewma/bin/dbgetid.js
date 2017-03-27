"use strict";

var valid = true, id;
if (process.argv[2]) {
    if (!isNaN(parseInt(process.argv[2], 10))) {
        id = parseInt(process.argv[2], 10);
    } else {
        valid = false;
    }
} else {
    valid = false;
}
if (!valid) {
    console.log(JSON.stringify({error: true, message: "invalid id", type: 400}, null, 4));
    process.exit();
}
var sqlite3 = require("sqlite3");
var db = new sqlite3.Database(__dirname + "/db.db", sqlite3.OPEN_READONLY);
db.on("open", function (err) {
    if (err) {
        console.error(err);
        process.exit(1);
        return;
    }
    db.get("SELECT * FROM movies where id = ?;", id, function (err, movie) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        if (movie) {
            db.all("SELECT name,note FROM award where movie_id = ?;", id, function (err, rows) {
                if (err) {
                    console.error(err);
                    db.close();
                    process.exit(1);
                    return;
                }
                movie.awards = [];
                for (var j = 0; j < rows.length; j++) {
                    movie.awards.push({award: rows[j].name, note: rows[j].note});
                }
                db.get("SELECT display FROM department where abbr = ?;", movie.dept, function (err, row) {
                    if (err) {
                        console.error(err);
                        db.close();
                        process.exit(1);
                        return;
                    }
                    if (row) {
                        movie.display_dept = row.display;
                    } else {
                        movie.display_dept = null;
                    }
                    console.log(JSON.stringify(movie, null, 4));
                    db.close();
                    return;
                });
            });
        } else {
            console.log(JSON.stringify({error: true, message: "movie not found", type: 404}, null, 4));
            process.exit();
        }
    });
});
