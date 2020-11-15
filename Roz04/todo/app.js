//https://www.npmjs.com/package/minimist
//npm i minimist
//npm i colors
const parseArgs = require('minimist');
const handleCommand = require('./handleCommand');
const command = parseArgs(process.argv.slice(2,3));
delete command._
//console.log(command);

handleCommand(command)