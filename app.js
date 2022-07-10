const fs = require('fs');
const r = require('./rules');
const p = require('./receiveAndPrepareInput');
const s = require('./search');
const remove = require('./removeDuplicates');
const print = require('./printResults');
const c = require('./readAndPrepareDir');

// begin execution
const path = process.argv[3];
const rawInput = process.argv[2];

try {
    p.checkRules(r.rules);
    const files = c.readAndPrepareDir(path);    
    const terms = p.receiveUserInput(rawInput);        
    const termsAndRules = p.prepareTerms(terms, r.rules);
    
    files.forEach(fileName => {        
        const data = fs.readFileSync(path + fileName, 'utf8');
        termsAndRules.forEach(rule => {
            if(s.searchForTerms(rule[1], rule[2], data)){
                rule[3].push(fileName);
            }    
        });
    });
    const finalReport = remove.removeOuterDuplicates(termsAndRules);    
    print.printReport(finalReport);
} catch (e) {
    console.log();
    console.error(e);
}