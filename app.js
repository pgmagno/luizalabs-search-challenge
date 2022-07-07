const fs = require('fs');
const r = require("./rules");
const p = require('./receiveAndPrepareInput');
const s = require('./search');
const remove = require('./removeDupes');
const print = require('./printResults'); 

const path = "./data2/";

fs.readdir(path, (err, files) => {
    if (err)
        console.log(err);
    else {
        
        const sortedFiles = Array.from(files).sort( (last, next) => last > next ? 1 : -1);
        console.log(sortedFiles);
        const terms = p.receiveUserInput(process.argv[2]);  
        const termsAndRules = p.prepareTerms(terms, r.rules);
        let count = 0;

        sortedFiles.forEach(fileName => {
            
            fs.readFile(path + fileName, 'utf-8', (err, fileContent) => {
                
                if (err)
                    console.log(err);
                else {
                    termsAndRules.forEach(rule => {                        
                        if(s.searchForTerms(rule[1], rule[2], fileContent)){
                            rule[3].push(fileName);
                        }
                    });
                }

                count++;

                if(count == sortedFiles.length) {                
                   // const convertedReport = remove.convertReport(termsAndRules);
                    const finalReport = remove.removeOuterDuplicates(termsAndRules);    
                    print.printReport(finalReport);
                }
            });            
        });    
    }
});