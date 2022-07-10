const remove = require('./removeDuplicates');

test('Returns an ARRAY containing SUBARRAY STRUCTURES with unique result values', () => {
    const report = [
        [ 'Exata', 'AND', [ /\bterm1\b/gim, /\bterm2\b/gim ], ['a','b','c','d'] ],
        [ 'Similar','OR',[
          /\b([a-z0-9]{1,3})?term1([a-z0-9]{1,3})?\b/gim,
          /\b([a-z0-9]{1,3})?term2([a-z0-9]{1,3})?\b/gim
        ],['b','c','e','a','d','a','f','b']
        ]
    ];
    const result = [
        [ 'Exata', 'AND', [ /\bterm1\b/gim, /\bterm2\b/gim ], ['a','b','c','d'] ],
        [ 'Similar','OR',[
          /\b([a-z0-9]{1,3})?term1([a-z0-9]{1,3})?\b/gim,
          /\b([a-z0-9]{1,3})?term2([a-z0-9]{1,3})?\b/gim
        ],['e','f']
        ]
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