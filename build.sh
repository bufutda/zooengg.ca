#!/bin/bash

build_orig() {
	local CWD=$(pwd)
	cd /mnt/e/GitHub/zooengg.ca
	rm -r build
	mkdir build

	local HEADER=$(cat ./header.html)
	local FOOTER=$(cat ./footer.html)
	local FILENAME

	for dir in "${@}"; do
		mkdir -p "build/$dir"
		while read -a filepath; do
			FILENAME=$(basename $filepath)
			if [[ "${FILENAME##*.}" == "html" ]]; then
				echo "$HEADER$(cat $filepath)$FOOTER" > "build/$filepath"
			else
				cp $filepath "build/$filepath"
			fi
		done < <(find "./$dir" | awk "NR != 1 { print; }")
	done

	cp ./website-template.css build/website-template.css

	cd "$CWD"
}

build() {
	local CWD=$(pwd)
	cd /mnt/e/GitHub/zooengg.ca
	rm -r build &> /dev/null
	cp -r site build
	npm run template
	find ./build -name "*.ejs" | xargs rm
	cd $CWD
}

build
