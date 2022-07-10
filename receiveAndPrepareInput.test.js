
const p = require('./receiveAndPrepareInput');

//// tests for receiveInput

test('Throws ERROR if empty string is inserted', () => {
    function receiveUserInput() {
      p.receiveUserInput("   ");
    }  
    // Test that the error message says "yuck" somewhere: these are equivalent
    expect(receiveUserInput).toThrowError(new Error("A string of empty spaces was inserted. Insert terms as in the example: node app.js 'term1 term2'\n"));
});

test('Throws ERROR if no parameters are inserted', () => {
    function receiveUserInput() {
      p.receiveUserInput(undefined);
    }  
    // Test that the error message says "yuck" somewhere: these are equivalent
    expect(receiveUserInput).toThrowError(new Error("No terms inserted in the command line. Insert terms as in the example: \n\n\tnode app.js 'term1 term2'\n"));
});

test('Returns an ARRAY of length 2 when passed "term1 term2"', () => {

    const arr = ['term1', 'term2'];

    expect(p.receiveUserInput("term1 term2")).toEqual(arr);
});

//// tests checkRules()

test('Throws ERROR if rules file is empty', () => {
    const rules = [];
    
    function checkRules() {
      p.checkRules(rules);
    }  
    expect(checkRules).toThrowError(new Error("Rules file is empty.\n"));
});

test('Throws ERROR if there are rule objects which don\'t contain 5 keys', () => {
    const rules = [
        {
            "Criteria": "OR",
            "RegExpBefore": "\\b([a-z0-9]{1,3})?",
            "RegExpAfter": "([a-z0-9]{1,3})?\\b",
            "RegExpFlag": "gmi"
        }
    ];
    
    function checkRules() {
      p.checkRules(rules);
    }  
    expect(checkRules).toThrowError(new Error("Rules file contains rule objects with incorrect number of keys.\n"));
});

test('Throws ERROR if there are rule objects which contain incorrect Regular Expression Flags', () => {
    
    // the Flag contains a "a" character which is not a supported RegExp flag   
    
    const rules = [
        {
            "Name": "Example 1",
            "Criteria": "OR",
            "RegExpBefore": "\\b([a-z0-9]{1,3})?",
            "RegExpAfter": "([a-z0-9]{1,3})?\\b",
            "RegExpFlag": "gami"
        }
    ];
    
    function checkRules() {
      p.checkRules(rules);
    }  
    expect(checkRules).toThrowError(new Error("Rules file contains unsupported Regular Expressions FLAGS.\n"));
});


test('Throws ERROR if there are rule objects which contain misspelled keys', () => {
    
    // The key 'Nome' should be spelled 'Name'
    
    const rules = [
        {
            "Nome": "Example 1",
            "Criteria": "OR",
            "RegExpBefore": "\\b([a-z0-9]{1,3})?",
            "RegExpAfter": "([a-z0-9]{1,3})?\\b",
            "RegExpFlag": "gmi"
        }
    ];
    
    function checkRules() {
      p.checkRules(rules);
    }  
    expect(checkRules).toThrowError(new Error("Rules file contains rule objects with misspelled keys.\n"));
});

test('Throws ERROR if there are rule objects which contain unsupported criteria', () => {
    
    // Criteria should be only: AND or OR
    
    const rules = [
        {
            "Name": "Example 1",
            "Criteria": "R",
            "RegExpBefore": "\\b([a-z0-9]{1,3})?",
            "RegExpAfter": "([a-z0-9]{1,3})?\\b",
            "RegExpFlag": "gmi"
        }
    ];
    
    function checkRules() {
      p.checkRules(rules);
    }  
    expect(checkRules).toThrowError(new Error("Rules file contains rule objects with incorrect CRITERIA. Supported: 'AND', 'OR'.\n"));
});

test('Throws ERROR if there are rule objects which contain invalid RegExp parameters', () => {
    
    // RegExpAfter is misseing an opening parenthesis "("
    
    const rules = [
        {
            "Name": "Example 1",
            "Criteria": "OR",
            "RegExpBefore": "\\b([a-z0-9]{1,3})?",
            "RegExpAfter": "[a-z0-9]{1,3})?\\b",
            "RegExpFlag": "gmi"
        }
    ];
    
    function checkRules() {
      p.checkRules(rules);
    }  
    expect(checkRules).toThrowError(new Error("Rules file contains rule objects with invalid RegExp parameters.\n"));
});

test("Returns TRUE if rules are properly structured", () => {

    const rules = [
        {
            "Name": "Example 1",
            "Criteria": "OR",
            "RegExpBefore": "\\b([a-z0-9]{1,3})?",
            "RegExpAfter": "([a-z0-9]{1,3})?\\b",
            "RegExpFlag": "gmi"
        }
    ];

    expect(p.checkRules(rules)).toBe(true);

});

//// tests prepareTerms()

test('Returns an ARRAY containing a SUBARRAY STRUCTURE composed of elements to search and parameters when passed an ARRAY of terms and a RULES file', () => {

    //STRUCTURE FOR REFERENCE
    //const structureModel = [
    //    ['NameOfRule','Criteria',[/\bTerm1\b/gmi,/\bTerm2\b/gmi],[]],
    //    ['NameOfRule','Criteria',[/\bTerm1\b/gmi,/\bTerm2\b/gmi],[]]
    //]

    // input    
    const rule = [{
        "Name":"Exata",
        "Criteria": "AND",
        "RegExpBefore": "\\b",
        "RegExpAfter": "\\b",
        "RegExpFlag": "gmi"
    },
    {
        "Name":"Similar",
        "Criteria": "OR",
        "RegExpBefore": "\\b([a-z0-9]{1,3})?",
        "RegExpAfter": "([a-z0-9]{1,3})?\\b",
        "RegExpFlag": "gmi"
    }]

    const rawTerms = ['term1', 'term2'];
    
    // expected output
    const preparedTerms = [
        [ 'Exata', 'AND', [ /\bterm1\b/gim, /\bterm2\b/gim ], [] ],
        [ 'Similar','OR',[
          /\b([a-z0-9]{1,3})?term1([a-z0-9]{1,3})?\b/gim,
          /\b([a-z0-9]{1,3})?term2([a-z0-9]{1,3})?\b/gim
        ],[]
        ]
    ];

    expect(p.prepareTerms(rawTerms, rule)).toEqual(preparedTerms);
});