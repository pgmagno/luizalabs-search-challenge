const fs = require('fs');

function readAndPrepareDir(dir){

    if(dir == undefined) {
        throw new Error("App usage missing 'directory' argument. Usage example: \"node app.js 'term1 term2' 'directory'\".\n");
    }

    const files = fs.readdirSync(dir, 'utf-8');

    if(files.length == 0) {
        throw new Error("The directory inserted is empty.\n");
    }

    const sortedFiles = Array.from(files).sort( (last, next) => last > next ? 1 : -1);
    return sortedFiles;
}
exports.readAndPrepareDir = readAndPrepareDir;