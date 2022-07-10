const s = require('./search')

test('Returns TRUE if all terms meet search (EXACT MATCH) criteria (AND)', () => {

    const content = 'term1 term2';    
    const report = [ 'Exata', 'AND', [ /\bterm1\b/gim, /\bterm2\b/gim ], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(true);    

});

test('Returns FALSE if terms don\'t meet search (EXACT MATCH) criteria (AND)', () => {

    const content = 'term1';    
    const report = [ 'Exata', 'AND', [ /\bterm1\b/gim, /\bterm2\b/gim ], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(false);    

});

test('Returns TRUE if at least one term meets search (EXACT MATCH) criteria (OR)', () => {

    const content = 'term1';    
    const report = [ 'Exata', 'OR', [ /\bterm1\b/gim, /\bterm2\b/gim ], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(true);    

});

test('Returns FALSE if none of terms meet search (EXACT MATCH) criteria (OR)', () => {


    const content = 'the file content is a string, term';    
    const report = [ 'Exata', 'OR', [ /\bterm1\b/gim, /\bterm2\b/gim ], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(false);    

});

test('Returns TRUE if at least one of the terms meet search (SIMILAR MATCH) criteria (OR) - 1 additional character before', () => {

    // The regExp is set up to detect up to 3 additional characters before or after the string

    const content = '1term';    
    const report = [ 'Similar', 'OR', [/\b([a-z0-9]{1,3})?term([a-z0-9]{1,3})?\b/gim], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(true);    

});

test('Returns TRUE if at least one of the terms meet search (SIMILAR MATCH) criteria (OR) - 1 additional character after', () => {

    // The regExp is set up to detect up to 3 additional characters before or after the string

    const content = 'term1';    
    const report = [ 'Similar', 'OR', [/\b([a-z0-9]{1,3})?term([a-z0-9]{1,3})?\b/gim], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(true);    

});

test('Returns TRUE if at least one of the terms meet search (SIMILAR MATCH) criteria (OR) - 1 additional character before & after', () => {

    // The regExp is set up to detect up to 3 additional characters before or after the string

    const content = '1term1';    
    const report = [ 'Similar', 'OR', [/\b([a-z0-9]{1,3})?term([a-z0-9]{1,3})?\b/gim], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(true);    

});

test('Returns TRUE if at least one of the terms meet search (SIMILAR MATCH) criteria (OR) - 2 additional characters before, 1 after ', () => {

    // The regExp is set up to detect up to 3 additional characters before or after the string

    const content = '12term1';    
    const report = [ 'Similar', 'OR', [/\b([a-z0-9]{1,3})?term([a-z0-9]{1,3})?\b/gim], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(true);    

});

test('Returns TRUE if at least one of the terms meet search (SIMILAR MATCH) criteria (OR) - 1 additional character before, 2 after ', () => {

    // The regExp is set up to detect up to 3 additional characters before or after the string

    const content = '1term12';    
    const report = [ 'Similar', 'OR', [/\b([a-z0-9]{1,3})?term([a-z0-9]{1,3})?\b/gim], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(true);    

});

test('Returns TRUE if at least one of the terms meet search (SIMILAR MATCH) criteria (OR) - 2 additional characters before & after ', () => {

    // The regExp is set up to detect up to 3 additional characters before or after the string

    const content = '12term21';    
    const report = [ 'Similar', 'OR', [/\b([a-z0-9]{1,3})?term([a-z0-9]{1,3})?\b/gim], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(true);    

});

test('Returns TRUE if at least one of the terms meet search (SIMILAR MATCH) criteria (OR) - 3 additional characters before & 2 after ', () => {

    // The regExp is set up to detect up to 3 additional characters before or after the string

    const content = '123term21';    
    const report = [ 'Similar', 'OR', [/\b([a-z0-9]{1,3})?term([a-z0-9]{1,3})?\b/gim], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(true);    

});

test('Returns TRUE if at least one of the terms meet search (SIMILAR MATCH) criteria (OR) - 2 additional characters before & 3 after ', () => {

    // The regExp is set up to detect up to 3 additional characters before or after the string

    const content = '21term321';    
    const report = [ 'Similar', 'OR', [/\b([a-z0-9]{1,3})?term([a-z0-9]{1,3})?\b/gim], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(true);    

});

test('Returns TRUE if at least one of the terms meet search (SIMILAR MATCH) criteria (OR) 3 characters before, 3 after', () => {

    // The regExp is set up to detect up to 3 additional characters before or after the string

    const content = '123term123';    
    const report = [ 'Similar', 'OR', [/\b([a-z0-9]{1,3})?term([a-z0-9]{1,3})?\b/gim], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(true);    

});

test('Returns FALSE if the number of additional characters surpasses the threshold on search (SIMILAR MATCH) criteria (OR) 4 characters before, 3 after', () => {

    // The regExp is set up to detect up to 3 additional characters before or after the string

    const content = '1234term123';    
    const report = [ 'Similar', 'OR', [/\b([a-z0-9]{1,3})?term([a-z0-9]{1,3})?\b/gim], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(false);    

});

test('Returns FALSE if the number of additional characters surpasses the threshold on search (SIMILAR MATCH) criteria (OR) 3 characters before, 4 after', () => {

    // The regExp is set up to detect up to 3 additional characters before or after the string

    const content = '123term1234';    
    const report = [ 'Similar', 'OR', [/\b([a-z0-9]{1,3})?term([a-z0-9]{1,3})?\b/gim], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(false);    

});

test('Returns FALSE if the number of additional characters surpasses the threshold on search (SIMILAR MATCH) criteria (OR) 4 characters before, 4 after', () => {

    // The regExp is set up to detect up to 3 additional characters before or after the string

    const content = '1234term1234';    
    const report = [ 'Similar', 'OR', [/\b([a-z0-9]{1,3})?term([a-z0-9]{1,3})?\b/gim], [] ]

    expect(s.searchForTerms(report[1], report[2], content)).toBe(false);    

});