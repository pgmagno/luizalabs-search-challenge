const fs = require('fs');

function readAndPrepareDir(dir){

    if(dir == undefined) { // this indicates the user didn't insert a 4th argument in the command line
        throw new Error("App usage missing 'directory' argument. Usage example: \"node app.js 'term1 term2' 'directory'\".\n");
    }

    const files = fs.readdirSync(dir, 'utf-8'); // reads directory

    if(files.length == 0) { // checks empty directory
        throw new Error("The directory inserted is empty.\n");
    }

    // creates and sorts an array with the file names read
    const sortedFiles = Array.from(files).sort( (last, next) => last > next ? 1 : -1);
    return sortedFiles;
}
exports.readAndPrepareDir = readAndPrepareDir;