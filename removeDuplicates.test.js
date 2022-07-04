const results = {
    'exact': ['a','b','c','d'],
    'plural': ['b','z','a','e'],
    'similar': ['b','i','a','e','w','t','r']
}

removeDuplicates(results.exact, results.plural);
removeDuplicates(results.exact, results.similar);
removeDuplicates(results.plural, results.similar);
console.log(results);