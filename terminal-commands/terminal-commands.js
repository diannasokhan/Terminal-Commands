const fs = require('fs');
module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file}`;
        }, '');
        console.log(filesToString);
    });
};

module.exports.touch = (fileName, fileContent) => {
    fs.writeFile(fileName, fileContent, (err) => {
        if(err){
            return console.log('Error');
        }
        console.log('File saved successfully');
    })
}

module.exports.mkdir = (directoryName) => {
    fs.mkdir(`./${directoryName}`, (err) => {
        if(err){
            return console.log('Error');
        }
        console.log('Directory created successfully')
    })
}