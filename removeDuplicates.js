function removeOuterDuplicates (dirtyReport) {

    // the objective of this function is to remove duplicates of subarrays comparing LAST with NEXT
    // in other words, take arr1 and arr2, compare, remove duplicates from arr2. take arr2 and arr3, compare, remove duplicates from arr3
    // it takes into account that the first rules (first array) is more specific than the next array, this is based
    // on the configuration of the rules files. if the rules files is not ordered from most specific to last specific
    // consider not using this function

    if(dirtyReport.length == 1) { // if the length is 1, then there's only 1 rule, so nothing to compare with
        return dirtyReport;       // therefore, immediately return
    }

    const finalReport = [];
    const count = dirtyReport.length; // the size of this array will be altered, that's why we need to save the length elsewhere

    for (let i = 0; i < count; i++) {

        const shiftedOut = dirtyReport.shift(); // remove first arr, save it
        
        dirtyReport.forEach( entry => {        // compare every other arr with the shiftedout

            if(entry[3].filter(item => !shiftedOut[3].includes(item)) != null){ // check if there are duplicates     
                const newResults = entry[3].filter(item => !shiftedOut[3].includes(item));
                entry.pop(); // throw away dirty results
                entry.push(newResults); // push clean results
            }                   
        });
        finalReport.push(shiftedOut); // insert shiftedout to finalReport
    }
    
    return finalReport;
}
exports.removeOuterDuplicates = removeOuterDuplicates;
