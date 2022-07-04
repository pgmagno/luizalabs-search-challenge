const pluralize = require('pluralize');

function transformIntoRegExp(string) {

    const terms = string.split(" ");

    const regExpTermsExactMatch = [];
    const regExpTermsPluralMatch = [];
    const regExpTermsSimilarMatch = [];

    terms.forEach( term => {    
        regExpTermsExactMatch.push(new RegExp('\\b' + term + '\\b' ,'gmi'));

        if(pluralize.isPlural(term)) {
            regExpTermsPluralMatch.push(new RegExp('\\b' + pluralize.singular(term) + '\\b' ,'gmi'));
        } else {
            regExpTermsPluralMatch.push(new RegExp('\\b' + pluralize(term) + '\\b' ,'gmi'));
        }
        
        regExpTermsSimilarMatch.push(new RegExp('\\b([a-z0-9]{1,3})?' + term + '([a-z0-9]{1,3})?\\b' ,'gmi'));
    });

    const transformedTerms = {
        'exact': regExpTermsExactMatch,
        'plural': regExpTermsPluralMatch,
        'similar': regExpTermsSimilarMatch,
    };

    return transformedTerms;
}

module.exports = transformIntoRegExp;