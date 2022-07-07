function printReport(report) {

    report.forEach(entry => {
        if(entry[3].length == 0) {
            console.log(`\nPara a Regra "${entry[0]}", não foram encontradas ocorrências para o termo "${process.argv[2]}".`);
        } else {
            if(entry[3].length == 1) {
                console.log(`\nPara a Regra "${entry[0]}" foi encontrada ${entry[3].length} ocorrência para o termo "${process.argv[2]}".`);
                console.log(`O arquivo que possui "${process.argv[2]}" é:\n`)    
            } else {            
                console.log(`\nPara a Regra "${entry[0]}" foram encontrados ${entry[3].length} ocorrências para o termo "${process.argv[2]}".`);
                console.log(`Os arquivos que possuem "${process.argv[2]}" são:\n`)
            }
            entry[3].forEach( result => console.log("\t" + result));
        }
    });
}

exports.printReport = printReport;