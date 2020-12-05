'use strict';

var fs = require('fs');

var result = fs.readFileSync('data.txt')
  .toString()
  .split("\n")
  .map(x => parseInt(x))
  .reduce((total, x) => total + x, 0);

console.log("Sum:", result);
