const fs = require('fs');

const npmrc = fs.readFileSync('./.npmrc', 'utf8');

console.log(npmrc, npmrc.length);
