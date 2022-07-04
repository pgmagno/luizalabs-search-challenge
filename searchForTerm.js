const transform = require("./transformIntoRegExp");
const removeDuplicates = require("./removeDuplicates")

const data = 'bilu creme';

const fileName = 'a';
const fileContent = "bilu creme caju";

function searchForTerm(terms, fileName, fileContent) {
    
    const results = {
        'exact': [],
        'plural': [],
        'similar': []
    }
    // Checks for EXACT matches | Criteria: AND
    let count = 0;

    for (let i = 0; i < terms.exact.length; i++) {
        if(fileContent.match(terms.exact[i]) !== null){            
            count++;
        }                
    }
    if(count == terms.exact.length) {
        results.exact.push(fileName);
    }

    // Checks for PLURAL or SINGULAR matches | Criteria: OR
    // If previous terms are plural, this block checks for singular and vice-versa
    terms.plural.forEach( pluralterm => {
        if(fileContent.match(pluralterm) !== null){
            results.plural.push(fileName);
        }
    });

    // Checks for SIMILAR matches | Criteria: OR
    // These terms have been prepared to match up to 3 additional characters before and after the exact criteria
    // In consequence, it may encompass results from the Plural/Singular check
    terms.similar.forEach( similarTerm => {
        if(fileContent.match(similarTerm) !== null){
            results.similar.push(fileName);
        }
    });

    console.log(results);

    return results;
}

const transformedData = transform(data);

const output = searchForTerm(transformedData, fileName, fileContent);

removeDuplicates(output.exact, output.plural);
removeDuplicates(output.exact, output.similar);
removeDuplicates(output.plural, output.similar);

console.log(output);