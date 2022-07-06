function searchTerms(ruleCriteria, termsArray, fileContent) {

    let count = 0;
    termsArray.forEach( term => {
        if(fileContent.match(term) != null) {            
            count++;                
        }
    });

    if(ruleCriteria == "AND" && count == termsArray.length) {
        return true;
    } else if(ruleCriteria == "OR" && count > 0) {
        return true;
    }
    return false;
}

exports.searchForTerms = searchTerms;