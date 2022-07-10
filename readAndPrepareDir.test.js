const c = require('./readAndPrepareDir');

test('Throws ERROR if directory is empty', () => {    

    function readAndPrepareDir() {
        c.readAndPrepareDir('./empty');
    }
    expect(readAndPrepareDir).toThrowError(new Error("The directory inserted is empty.\n"));
});

test('Throws ERROR if directory is not passed as argument', () => {    

    function readAndPrepareDir() {
        c.readAndPrepareDir(undefined);
    }
    expect(readAndPrepareDir).toThrowError(new Error("App usage missing 'directory' argument. Usage example: \"node app.js 'term1 term2' 'directory'\".\n"));
});

test('Returns ARRAY of sorted filenames if passed valid directory', () => {

    const fileNamesArray = ['file1.txt', 'file2.txt','file3.txt'];

    expect(c.readAndPrepareDir('./data2')).toEqual(fileNamesArray);
});



