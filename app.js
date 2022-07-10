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
    p.checkRules(r.rules); // checks the rules file
    const files = c.readAndPrepareDir(path); // reads the directory and returns an array of fileNames
    const terms = p.receiveUserInput(userInput); // reads user input and cleans it if necessary     
    const termsAndRules = p.prepareTerms(terms, r.rules); // assembles a primary report containing terms and rules
    
    files.forEach(fileName => { // for each file, compare its contents with a rule and the terms in it       
        const fileContents = fs.readFileSync(path + fileName, 'utf8');
        termsAndRules.forEach(rule => {
            if(s.searchForTerms(rule[1], rule[2], fileContents)){
                rule[3].push(fileName); // if there is a match, push to the results array of the report
            }    
        });
    });

    const finalReport = remove.removeOuterDuplicates(termsAndRules); // removes duplicates within files considering first rule to be the most specific and the following to be more permissive 
    print.printReport(userInput, path, finalReport); // prints file report to the console
} catch (e) {
    console.log();
    console.error(e);
}