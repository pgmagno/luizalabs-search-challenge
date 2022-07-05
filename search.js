function searchForTerms(termsAndParameters, file, fileName) {
    
    const finalReport = [];

    termsAndParameters.forEach( rule => {

        const result = [];
        const fileNames = [];
        result.push(rule[0]);
        
        let count = 0;

        for(let i = 0; i < rule[2].length; i++){
            if(file.match(rule[2][i]) !== null) {
                fileNames.push(fileName);            
                count++;                
            }
        }

        if (rule[1] == "AND" && count != rule[2].length){
            const newResult = [];
            newResult.push(rule[0]);
            newResult.push([]);
            finalReport.push(newResult);
        } else {
            result.push(fileNames); 
            finalReport.push(result);
        }
        
    });
    
    return finalReport;
}

const searchParams = [
    ['Exato',"AND",[ 
        /\bbilu\b/gim, 
        /\bcreme\b/gim]],
    ['Similar',"OR",[ 
        /\b([a-z0-9]{1,3})?bilu\b([a-z0-9]{1,3})?/gim,
        /\b([a-z0-9]{1,3})?creme\b([a-z0-9]{1,3})?/gim]]
]

const name = 'a';
const content = "bilu creme caju";

console.log(searchForTerms(searchParams,content,name));
