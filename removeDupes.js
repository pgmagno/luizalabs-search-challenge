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

function convertReport(report) {

    const convertedReport = [];

    report.forEach(originalEntry => {
        const newEntry = [];
        newEntry.push(originalEntry[0]);
        newEntry.push(originalEntry[3]);
        convertedReport.push(newEntry);
    })

    return convertedReport;
}


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

            if(entry[1].filter(item => !shiftedOut[1].includes(item)) != null){      
                const newResults = entry[1].filter(item => !shiftedOut[1].includes(item));
                const newEntry = [];
                newEntry.push(entry[0]);
                newEntry.push(newResults);
                intermediateReport.push(newEntry);        
            } else {
                intermediateReport.push(entry);
            }        
        });
    }

    const cleanReport = [];
    cleanReport.push(firstEntry);

    for (let i = 0; i < intermediateReport.length; i++) {

        const shiftedOut = intermediateReport.shift();

        if(intermediateReport[0][1].filter(item => !shiftedOut[1].includes(item)) != null) {
            const newResults = intermediateReport[0][1].filter(item => !shiftedOut[1].includes(item));
            const newEntry = [];
            newEntry.push(intermediateReport[0][0]);
            newEntry.push(newResults);
            cleanReport.push(newEntry);
        } else {
            cleanReport.push(intermediateReport[0]);
        }  
    }
    return cleanReport;
}

exports.removeInnerDuplicates = removeInnerDuplicates;
exports.removeOuterDuplicates = removeOuterDuplicates;
exports.convertReport = convertReport;