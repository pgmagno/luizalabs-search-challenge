function receiveUserInput(string) {

    if(process.argv[2] == null || process.argv[2] == " ") {
        return "Insira algum termo para buscar";
    }
    
    const terms = string.split(" ");
    const filteredTerms = terms.filter( term => {
        return term != '';
    });
    
    if(filteredTerms.length == 0) {
        return "Insira algum termo para buscar";
    }

    return filteredTerms;
}

function prepareTerms(terms, rules) {

    const preparedTerms = []

    rules.forEach( rule => {

        const termAndRule = [
            rule.Nome,
            rule.Criterio,
            [],
            []        
        ];

        for (let i = 0; i < terms.length; i++) {
            termAndRule[2].push(new RegExp(rule.RegExpBefore + terms[i] + rule.RegExpAfter, rule.RegExpFlag));
        }
        preparedTerms.push(termAndRule);            
    });
    return preparedTerms;
}

exports.receiveUserInput = receiveUserInput; 
exports.prepareTerms = prepareTerms;