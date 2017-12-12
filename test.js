const fs = require('fs');

console.log(process.env);
const npmrc = fs.readFileSync('./.npmrc', 'utf8');

console.log(npmrc, npmrc.length);
