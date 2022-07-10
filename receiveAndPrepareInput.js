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
        // checks the number of keys in the rule object 
        if(Object.keys(rule).length != 5) {
            throw new Error("Rules file contains rule objects with incorrect number of keys.\n");
        }
        // checks if incorrect flags were inserted in the rule
        if(rule.RegExpFlag.match(/[^gimsuy]/) != null){
            throw new Error("Rules file contains unsupported Regular Expressions FLAGS.\n");
        }
        // checks if the criteria differs from AND or OR
        if(rule.Criteria != "AND" && rule.Criteria != "OR"){
            throw new Error("Rules file contains rule objects with incorrect CRITERIA. Supported: 'AND', 'OR'.\n");
        }
        // checks if the elements of the Regular Expression produce a valid Reg Exp
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
        
        // checks if there are typos in the rule object keys
        if (JSON.stringify(Object.keys(rule)) != JSON.stringify(Object.keys(objectModel))){
            throw new Error("Rules file contains rule objects with misspelled keys.\n");
        }
    });
    //if everything goes well, returns true
    return true;
}

function prepareTerms(terms, rules) {
    // the objective of this function is to assemble an array composed of subarrays
    // each subarray represents a rule in the rules file and the necessary information to search according to it
    // the necessary information is:
    // STRING - the name of rule (Any name can be chosen)
    // STRING - the rule criteria (AND or OR)
    // ARRAY of REGULAR EXPRESSIONS - the regular expressions produced by the following code (uses the rules files and user input)
    // ARRAY - an empty array in which the results will later be inserted
    // it will look like this:
    // ['name','criteria',[regExp1,... regExpN],[]]
    const preparedTerms = [];
    
    rules.forEach( rule => {
        const termAndRule = [
            rule.Name,
            rule.Criteria,
            [],
            []        
        ];

        terms.forEach( term => { // create a regExp with the information passed
            termAndRule[2].push(new RegExp(rule.RegExpBefore + term + rule.RegExpAfter, rule.RegExpFlag));
        });

        preparedTerms.push(termAndRule);            
    });

    return preparedTerms;
}

exports.receiveUserInput = receiveUserInput; 
exports.prepareTerms = prepareTerms;
exports.checkRules = checkRules;