function receiveUserInput(string) {
    
    // checks if nothing was inserted in the command line
    if(string == undefined) {
        throw new Error("No terms inserted in the command line. Insert terms as in the example: \n\n\tnode app.js 'term1 term2'\n");
    }
    
    // filter out empty spaces in and around the terms while creating an array of adequate terms to search
    const terms = string.split(" ");
    const filteredTerms = terms.filter( term => {
        return term != '';
    });

    // checks if the string was made of of empty spaces
    if(filteredTerms.length == 0) {
        throw new Error("A string of empty spaces was inserted. Insert terms as in the example: node app.js 'term1 term2'\n");
    }

    // if all goes well, returns the terms to search
    return filteredTerms;
}

function checkRules(rules) {

    const objectModel = {
        "Name":"Exata",
        "Criteria": "AND",
        "RegExpBefore": "\\b",
        "RegExpAfter": "\\b",
        "RegExpFlag": "gmi"
    }

    if (rules.length == 0) {
        throw new Error("Rules file is empty.\n");
    }

    rules.forEach( rule => {        

        if(Object.keys(rule).length != 5) {
            throw new Error("Rules file contains rule objects with incorrect number of keys.\n");
        }

        if(rule.RegExpFlag.match(/[^gimsuy]/) != null){
            throw new Error("Rules file contains unsupported Regular Expressions FLAGS.\n");
        }

        if(rule.Criteria != "AND" && rule.Criteria != "OR"){
            throw new Error("Rules file contains rule objects with incorrect CRITERIA. Supported: 'AND', 'OR'.\n");
        }
        
        let isValid = true;
        const term1 = "term1";
            try {
                new RegExp(rule.RegExpBefore + term1 + rule.RegExpAfter, rule.RegExpFlag);
            } catch(e) {
                isValid = false;
            }
            if(!isValid){
                throw new Error("Rules file contains rule objects with invalid RegExp parameters.\n");
            }

        if (JSON.stringify(Object.keys(rule)) != JSON.stringify(Object.keys(objectModel))){
            throw new Error("Rules file contains rule objects with mispelled keys.\n");
        }
    });

    return true;
}

function prepareTerms(terms, rules) {

    const preparedTerms = []
    rules.forEach( rule => {
        const termAndRule = [
            rule.Name,
            rule.Criteria,
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
exports.checkRules = checkRules;