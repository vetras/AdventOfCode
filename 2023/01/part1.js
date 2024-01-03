'use strict';

const fs = require('fs');

const result = fs.readFileSync('data.txt')
  .toString()
  .split("\n")
  .map(x => recoverNumber(x))
  .reduce((total, x) => total + x, 0);

console.log("Sum:", result);

function recoverNumber(line) {
  if(line.length == 0) {
    return 0;
  }
  
  const d1 = recoverFirstDigit(line);
  const d2 = recoverFirstDigit(line.split("").reverse().join(""));
  
  return parseInt(`${d1}${d2}`);
}

function recoverFirstDigit(line) {
  for (const _char of line) {
    if (!isNaN(parseInt(_char))) {
      return parseInt(_char);
    }
  }
  throw new Error(`No digit found in this line '${line}'`);
}
