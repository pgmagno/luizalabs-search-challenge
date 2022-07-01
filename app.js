const fs = require('fs');

const path = "./data/";
// Function to get current filenames
// in directory
fs.readdir(path, (err, files) => {
    if (err)
        console.log(err);
    else {
        let results = [];
        let count = 0;
        files.forEach(file => {        
            fs.readFile(path + file, 'utf-8', (err, content) => {
                if (err)
                    console.log(err);
                else {
                    if(searchForTerm(process.argv[2], content)){
                        results.push(file);                        
                    }                    
                }                
                count++;
                printResults(count, files.length, results);                
            });
        });        
    }
});

function searchForTerm(string, content) {

    const terms = string.split(" ");
    const regexedTerms = [];

    for (let i = 0; i < terms.length; i++) {
        regexedTerms.push(new RegExp('\\b' + terms[i] + '\\b' ,'gmi'));
    }   

    let count = 0;
    
    for (let i = 0; i < terms.length; i++) {
         if(content.match(regexedTerms[i]) !== null) {
             count += 1;
         }
    }
    return count == terms.length ? true : false;
}

function printResults(count, listOfFilesLength, results) {
    if(count == listOfFilesLength) {
        if(results.length == 0) {
            console.log('Não foram encontrados resultados');
        } else {                        
            console.log(`\nForam encontradas ${results.length} ocorrências para o termo "${process.argv[2]}".`);
            console.log(`Os arquivos que possuem "${process.argv[2]}" são:\n`);
            results.forEach( result => {
                console.log(result);
            });
        }
    }
}
