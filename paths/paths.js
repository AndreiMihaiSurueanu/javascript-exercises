const fs = require("fs");
const files = fs.readdirSync("../");
const paths = {
	paths: files,
};

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
console.log(files);
