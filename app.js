const fs = require('fs');
const r = require('./rules');
const p = require('./receiveAndPrepareInput');
const s = require('./search');
const remove = require('./removeDuplicates');
const print = require('./printResults');
const c = require('./readAndPrepareDir');

const path = process.argv[3];
const userInput = process.argv[2];

try {
    p.checkRules(r.rules);
    const files = c.readAndPrepareDir(path);    
    const terms = p.receiveUserInput(userInput);        
    const termsAndRules = p.prepareTerms(terms, r.rules);
    
    files.forEach(fileName => {        
        const fileContents = fs.readFileSync(path + fileName, 'utf8');
        termsAndRules.forEach(rule => {
            if(s.searchForTerms(rule[1], rule[2], fileContents)){
                rule[3].push(fileName);
            }    
        });
    });
    const finalReport = remove.removeOuterDuplicates(termsAndRules);    
    print.printReport(userInput, path, finalReport);
} catch (e) {
    console.log();
    console.error(e);
}