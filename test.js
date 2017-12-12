const fs = require('fs');

console.log(
  Object.keys(process.env).filter(key => key.startsWith('TRAVIS_')).map(key => ({ [key]: process.env[key] }))
);
const npmrc = fs.readFileSync('./.npmrc', 'utf8');

console.log(npmrc, npmrc.length);
