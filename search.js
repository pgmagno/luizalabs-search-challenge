function searchTerms(ruleCriteria, termsArray, fileContent) {

    // the objective of this function is to compare regular expressions with files' contents
    // for each rule, if the criteria is AND then there'll be a match if all terms appear in file contents
    // if the criteria is OR, if one file is found, there'll be a match.

    let count = 0; // counts the matches
    termsArray.forEach( term => { // for each term, try to match to the Reg Exps
        if(fileContent.match(term) != null) {            
            count++;                
        }
    });

    if(ruleCriteria == "AND" && count == termsArray.length) { // if AND and the count is the same as the number of terms then there is a match of all expressions
        return true;
    } else if(ruleCriteria == "OR" && count > 0) { // if OR the count need to be only larger than 0
        return true;
    }
    return false; // we must have no matches in the file searched
}

exports.searchForTerms = searchTerms;