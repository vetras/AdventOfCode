'use strict';

var fs = require('fs');

function repeatedFrequency(listOfInts, dic, frequency) {
  
  for (var i = 0; i < listOfInts.length; i++) {
    
    dic[frequency] == undefined ? dic[frequency] = 1 : dic[frequency]++;
    
    if (dic[frequency] == 2) {
      return {
        found: true,
        f: frequency
      };
    }
    
    frequency = frequency + listOfInts[i];
  }
  
  return {
    found: false,
    f: frequency
  };
}

function loop(numbers) {
  
  var dic = {};
  var frequency = 0;
  var found = false;
  var result;

  while (!found) {
    result = repeatedFrequency(numbers, dic, frequency);
    found = result.found;
    frequency = result.f;
  }

  return result.f;
}

var numbers = fs.readFileSync('data.txt')
  .toString()
  .split("\n")
  .map(x => parseInt(x));

console.log("first repeated frequency: ", loop(numbers));

// tests
// console.log('Expected  0, got : ', loop([1, -1]));
// console.log('Expected 10, got : ', loop([+3, +3, +4, -2, -4]));
// console.log('Expected  5, got : ', loop([-6, +3, +8, +5, -6]));
// console.log('Expected 14, got : ', loop([+7, +7, -2, -7, -4]));
