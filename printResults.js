function printReport(input, path, report) {

    report.forEach(entry => {
        if(entry[3].length == 0) { // nothing was found
            console.log(`\nPara a Regra "${entry[0]}", não foram encontradas ocorrências para o termo "${input}" no diretório "${path}".`);
        } else {
            if(entry[3].length == 1) { // one result was found
                console.log(`\nPara a Regra "${entry[0]}" foi encontrada ${entry[3].length} ocorrência para o termo "${input}" no diretório "${path}".`);
                console.log(`O arquivo que possui "${input}" é:\n`)    
            } else { // multiple results were found
                console.log(`\nPara a Regra "${entry[0]}" foram encontrados ${entry[3].length} ocorrências para o termo "${input}" no diretório "${path}".`);
                console.log(`Os arquivos que possuem "${input}" são:\n`)
            }
            entry[3].forEach( result => console.log("\t" + result));
        }
    });
}

exports.printReport = printReport;