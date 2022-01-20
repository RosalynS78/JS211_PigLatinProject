'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {
  // dot notations
  // should lowercase and trim word before translation
  // split() - splits into list
  // input - set or return the value of text in input field
  let input = word.trim().toLowerCase().split('');
  // array of vowels a e i o u
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  // includes() - returns true if string contains a specified string otherwise false
  if(vowels.includes(input[0])) {
    // should attach "yay" if word begins with vowel
    return input.concat('yay').join().replace(/,/g, '');
    // join() - returns array into string does change orignal array
    // concat() - joins arrays and return new array
    // g - global modifier. replace all matches
    // replace() - searches string for value and returns new string with value replaced does not change orignal string
    //replaces ',' with spaces
  } else {
    // value of 0 - less than comparison of value - increment 
    for(let i = 0; i < input.length; i++) {
      if(vowels.indexOf(input[i]) !== -1) {
        // !== strict inequality
        const beforeVowel = input.splice(0, i)
        // splice() adds &/or removes array elements: overwrites original array
        // personal note difference in slice() returns selected elements in array as new array: does not change original array
        return input.concat(beforeVowel).concat('ay').join().replace(/,/g, '')
      }
    }
  }
} 


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********
// should translate a simple word
// break your code into pieces and focus on one piece at a time...
// 1. create a word var & take whitespaces out a & make lowercase
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.


// Rules
//  a. if it starts with consonant, move first letter to the end & add "ay"
//  b. if it starts with a vowel, just add "yay" to the end
//  c. if it starts with 2 consonants, move first 2 letters to the end and add "ay"

// 1. if word begins with a vowel send to one function: adds "yay"
// 2.  array for vowels: a, e, i, o, u
// 3. check the word where the vowel starts
// 4. move consonants(s) if needed,
// 5. add the appropriate ending
// 6. return the word