const math = require('./math');
const fs = require('fs');

const a = 10;
const b = 5;

const addResult = math.add(a, b);
const subtractResult = math.subtract(a, b);
const multiplyResult = math.multiply(a, b);
const divideResult = math.divide(a, b);

const logContent = `
Results of Math Operations:
Add: ${a} + ${b} = ${addResult}
Subtract: ${a} - ${b} = ${subtractResult}
Multiply: ${a} * ${b} = ${multiplyResult}
Divide: ${a} / ${b} = ${divideResult}
`;

// Creating and writing to log.txt
fs.writeFileSync('log.txt', logContent);

// Reading and displaying the file content
const fileContent = fs.readFileSync('log.txt', 'utf8');
console.log(fileContent);
