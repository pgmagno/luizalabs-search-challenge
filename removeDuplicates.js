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
exports.removeOuterDuplicates = removeOuterDuplicates;