const remove = require('./removeDuplicates');

test('Returns an ARRAY containing SUBARRAY STRUCTURES with unique result values', () => {
    const report = [
        [ 'Exata', 'AND', [], ['a','b','c','d'] ],
        [ 'Similar','OR',[],['a','b','c','d','e','f']],
        [ 'Similar','OR',[],['b','g','c','d','e','f','a','h']],
        [ 'Similar','OR',[],['a','b','c','d','e','f','g','h','i','j']],
        [ 'Similar','OR',[],['a','k','c','d','l','f','g','h','i','j','e','b']],
        [ 'Similar','OR',[],['d','m','c','e','f','g','h','i','a','l','n']]        
    ];

    const result = [
        [ 'Exata', 'AND', [], ['a','b','c','d'] ],
        [ 'Similar','OR',[],['e','f']],
        [ 'Similar','OR',[],['g','h']],
        [ 'Similar','OR',[],['i','j']],
        [ 'Similar','OR',[],['k','l']],
        [ 'Similar','OR',[],['m','n']]
    ];

    expect(remove.removeOuterDuplicates(report)).toEqual(result);

});

test('Returns unprocessed ARRAY if it contains only 1 SUBARRAY STRUCTURE', () => {
    //nothing to compare with, so return the same report
    const report = [
        [ 'Exata', 'AND', [ /\bterm1\b/gim, /\bterm2\b/gim ], ['a','b','c','d'] ]
    ];
    expect(remove.removeOuterDuplicates(report)).toEqual(report);
});