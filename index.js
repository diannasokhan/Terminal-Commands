const myLibrary = require('./my-library');
const uuid = require('uuid');
const newUuid = uuid();
const terminalCommands = require('./terminal-commands/terminal-commands.js')

terminalCommands.touch('newText', 'hi')
terminalCommands.ls();
terminalCommands.mkdir('newFolder')
console.log(`your new Universally unique identifier is ${newUuid}`);
myLibrary.myFirstMethod();