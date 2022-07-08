const fs = require('fs');
const r = require("./rules");
const p = require('./receiveAndPrepareInput');
const s = require('./search');
const remove = require('./removeDupes');
const print = require('./printResults'); 
// const fs = require('fs/promises');
const path = "./data/";

fs.readdir(path, (err, files) => {
    if (err)
        console.log(err);
    else {
        
        const sortedFiles = Array.from(files).sort( (last, next) => last > next ? 1 : -1);
        
        const terms = p.receiveUserInput(process.argv[2]);  
        const termsAndRules = p.prepareTerms(terms, r.rules);
        let count = 0;

        sortedFiles.forEach(fileName => {           

            const data = fs.readFileSync(path + fileName, 'utf8');
            console.log(data);

        });
    }
});