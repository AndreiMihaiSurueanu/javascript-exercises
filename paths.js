const fs = require("fs");
const path = require("path");
// const files = fs.readdirSync("../");
const paths = {
	paths: [],
};

// https://stackoverflow.com/questions/25460574/find-files-by-extension-html-under-a-folder-in-nodejs
function fromDir(startPath, filter) {
	//console.log('Starting from dir '+startPath+'/');

	if (!fs.existsSync(startPath)) {
		console.log("no dir ", startPath);
		return;
	}

	const files = fs.readdirSync(startPath);
	for (let i = 0; i < files.length; i++) {
		const filename = path.join(startPath, files[i]);
		if(files[i] === '.git') continue;
		const stat = fs.lstatSync(filename);
		if (stat.isDirectory()) {
			fromDir(filename, filter); //recurse
		} else if (filename.indexOf(filter) >= 0) {
			// console.log("-- found: ", filename);
			paths.paths.push(filename.replace(/\\/g,'/'))
			continue;
		}
	}
}

fromDir(".", ".html");

// https://stackoverflow.com/questions/36856232/write-add-data-in-json-file-using-node-js
fs.writeFile(
	"paths.json",
	JSON.stringify(paths),
	"utf8",
	function readFileCallback(err, data) {
		if (err) {
			console.log(err);
		}
	}
);
console.log(paths);
