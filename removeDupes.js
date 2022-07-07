function removeInnerDuplicates(dirtyReport) {

    const cleanReport = [];

    dirtyReport.forEach( array => {
        const newEntry = [];
        newEntry.push(array[0]); //pushing Rule Name
        const uniqueResultsArray = [...new Set(array[3])]; //removing inner duplicates from results
        newEntry.push(uniqueResultsArray); //pushing clean results
        cleanReport.push(newEntry); //pushing new entry
    });

    return cleanReport;
}

const reportBig = [
    ['a','AND',[/bTEST/,/TEST2/],[1,2,3,4,5]],
    ['a','OR',[/bTEST/,/TEST2/],[1,2,3,4,5,6,7,8,9,0]],
    ['a','AND',[/bTEST/,/TEST2/],[1,2,3,4,5,6,7,8,9,0,11,12,13]]]
const report1 = [
    ['a',[1,2,3,4,5]],
    ['a',[1,2,3,4,5,6,7,8,9,0]],
    ['a',[1,2,3,4,5,6,7,8,9,0,11,12,13]]
]
function removeOuterDuplicates (dirtyReport) {

    if(dirtyReport.length == 1) {
        return dirtyReport;
    }

    const intermediateReport = [];
    const firstEntry = dirtyReport[0];
    intermediateReport.push(firstEntry);

    for (let i = 0; i < dirtyReport.length - 1; i++) {

        const shiftedOut = dirtyReport.shift();
        
        dirtyReport.forEach( entry => {        

            if(entry[3].filter(item => !shiftedOut[3].includes(item)) != null){      
                const newResults = entry[3].filter(item => !shiftedOut[3].includes(item));
                entry.pop();
                entry.push(newResults);
                intermediateReport.push(entry);  
            } else {
                intermediateReport.push(entry);
            }        
        });
    }

    const cleanReport = [];
    cleanReport.push(firstEntry);

    for (let i = 0; i < intermediateReport.length; i++) {

        const shiftedOut = intermediateReport.shift();

        if(intermediateReport[0][3].filter(item => !shiftedOut[3].includes(item)) != null) {
            const newResults = intermediateReport[0][3].filter(item => !shiftedOut[3].includes(item));
            intermediateReport[0].pop();
            intermediateReport[0].push(newResults);
            cleanReport.push(intermediateReport[0]);
        } else {
            cleanReport.push(intermediateReport[0]);
        }  
    }
    return cleanReport;
}

exports.removeInnerDuplicates = removeInnerDuplicates;
exports.removeOuterDuplicates = removeOuterDuplicates;