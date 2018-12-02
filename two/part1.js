'use strict';

var fs = require('fs');

function countLetters(word) {
  var dic = {};

  for (var i = 0; i < word.length; i++) {
    var c = word[i];
    dic[c] == undefined ? dic[c] = 1 : dic[c]++;
  }

  return dic;
}

function nLetter(obj, n) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === n) return keys[i];
  }

  return null;
}

function hasLetterThatRepeats(word, n) {
  return nLetter(countLetters(word), n) == null ? false : true;
}

var listOfIds = fs.readFileSync('data.txt')
  .toString()
  .split("\n");

var IdsWithTwoOfAnyLetter = listOfIds.map(x => hasLetterThatRepeats(x, 2))
  .filter(x => x == true)
  .length;

var IdsWithThreeOfAnyLetter = listOfIds.map(x => hasLetterThatRepeats(x, 3))
  .filter(x => x == true)
  .length;


console.log("Number of Ids with two   of any letter: ", IdsWithTwoOfAnyLetter);
console.log("Number of Ids with three of any letter: ", IdsWithThreeOfAnyLetter);
console.log("CheckSum                              : ", IdsWithTwoOfAnyLetter * IdsWithThreeOfAnyLetter);

