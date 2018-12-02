'use strict';

var fs = require('fs');

function onlyOneLetterDiff(wordA, wordB) {
  var diff = 0;

  // in this exe all words are the same length
  for (var i = 0; i < wordA.length; i++) {
    if (wordA[i] !== wordB[i]) {
      diff++;
      if (diff > 1) return false;
    }
  }

  return diff === 1;
}


function removeDiffs(wordA, wordB) {
  var word = '';
  // in this exe all words are the same length
  for (var i = 0; i < wordA.length; i++) {
    if (wordA[i] == wordB[i]) {
      word += wordA[i];
    }
  }
  return word;
}

var listOfIds = fs.readFileSync('data.txt')
  .toString()
  .split("\n");

for (var i = 0; i < listOfIds.length; i++) {
  for (var j = 1; j < listOfIds.length; j++) {
    if (onlyOneLetterDiff(listOfIds[i], listOfIds[j])) {
      // in this exe only one match will happen
      console.log('Common Letters: ', removeDiffs(listOfIds[i], listOfIds[j]));
      process.exit(0);
    }
  }
}


// tests
// console.log('Expected true , got: ', onlyOneLetterDiff('abcdefg', 'abcdXfg'));
// console.log('Expected false, got: ', onlyOneLetterDiff('abcdefg', 'abcdefg'));
// console.log('Expected false, got: ', onlyOneLetterDiff('abcdefg', 'foooooo'));

// console.log('Expected abcdfg , got: ', removeDiffs('abcdefg', 'abcdXfg'));
// console.log('Expected abcdefg, got: ', removeDiffs('abcdefg', 'abcdefg'));
// console.log('Expected a      , got: ', removeDiffs('abcdefg', 'afooooo'));
