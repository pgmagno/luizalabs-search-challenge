
const exact = ['a','b','c','d'];
const plural = ['a','b','c','d','b','z','a','e'];
const similar = ['a','b','c','d','b','z','a','e','z','e'];

//removes duplicates from arrays
const exactUnique = [...new Set(exact)];
const pluralUnique = [...new Set(plural)];
const similarUnique = [...new Set(similar)];

// compares exact and plural, and removes duplicates from plural
const pluralWithoutExacts = pluralUnique.filter(item => !exactUnique.includes(item));
// compares exact and similar, and removes duplicates from similar  
const similarWithoutExacts = similarUnique.filter(item => !exactUnique.includes(item));
// compares plural and similar, and removes duplicates from similar
const similarWithoutDuplicates = similarWithoutExacts.filter(item => !pluralWithoutExacts.includes(item));

console.log(exactUnique, pluralWithoutExacts, similarWithoutDuplicates);

// newPlural = plural.filter(item => !exact.includes(item));
// newPlural2 = newPlural.filter(item => !newPlural.includes(item));
// newSimilar = similar.filter(item => !exact.includes(item));

// console.log(exact, newPlural2, newSimilar)

// removeDuplicates(exact, plural);
// removeDuplicates(exact, similar);
// removeDuplicates(plural, similar);