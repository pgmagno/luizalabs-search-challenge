const fs = require('fs');
const r = require("./rules");
const p = require('./receiveAndPrepareInput');

const path = "./data2/";


fs.readdir(path, (err, files) => {
    if (err)
        console.log(err);
    else {
        console.log(r.rules);
        const sortedFiles = Array.from(files);

        const terms = p.receiveUserInput(process.argv[2]);
        console.log(terms);
        console.log(p.prepareTerms(terms, r.rules));


        sortedFiles.forEach(fileName => {        
            fs.readFile(path + fileName, 'utf-8', (err, content) => {
                if (err)
                    console.log(err);
                else {
                    searchForTerm(process.argv[2], content, fileName);
                }
                printResults(count, sortedFiles.length);                
            });
        });        
    }
});

function transformIntoRegExp(string) {

    const terms = string.split(" ");

    const regExpTermsExactMatch = [];
    const regExpTermsPluralMatch = [];
    const regExpTermsSimilarMatch = [];

    terms.forEach( term => {    
        regExpTermsExactMatch.push(new RegExp('\\b' + term + '\\b' ,'gmi'));
        regExpTermsPluralMatch.push(new RegExp('\\b' + pluralize(term) + '\\b' ,'gmi'));
        regExpTermsSimilarMatch.push(new RegExp('\\b([a-z0-9]{1,3})?' + term + '([a-z0-9]{1,3})?\\b' ,'gmi'));
    });

    const transformedTerms = {
        'exact': regExpTermsExactMatch,
        'plural': regExpTermsPluralMatch,
        'similar': regExpTermsSimilarMatch,
    };

    return transformedTerms;
}

function searchForTerm(transformedTerms, fileName, fileContent) {
    
    const results = {
        'exact': [],
        'plural': [],
        'similar': []
    }

    transformedTerms.exact.forEach( term => {
        if(fileContent.match(term) !== null){
            results.exact.push(fileName);
        }
    });
    transformedTerms.plural.forEach( term => {
        if(fileContent.match(term) !== null){
            results.plural.push(fileName);
        }
    });
    transformedTerms.similar.forEach( term => {
        if(fileContent.match(term) !== null){
            results.similar.push(fileName);
        }
    });

    return results;
}

function printResults(count, listOfFilesLength, results) {
    if(count == listOfFilesLength) {
        if(results.length == 0) {
            console.log('\nNão foram encontrados resultados\n');
        } else {                        
            console.log(`\nForam encontradas ${results.length} ocorrências para o termo "${process.argv[2]}".`);
            console.log(`Os arquivos que possuem "${process.argv[2]}" são:\n`);
            
            console.log(`\nResultados exatos:`);
            results.exact.forEach( result => {
                console.log(result);
            });
            
            console.log(`\nResultados do termo no plural:`);
            results.plural.forEach( result => {
                console.log(result);
            });
            
            console.log(`\nResultados similares:`);
            results.similar.forEach( result => {
                console.log(result);
            });
        }
    }
}