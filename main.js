console.clear()

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

const vowel = ['a', 'e', 'i', 'o', 'u']

const pigLatin = (word) => {
 word = word.trim(' ')
 word= word.toLowerCase() 
 wordSplitArr = word.split('') // this convert the word(string) to an array.
//  console.log(wordSplitArr)
 checkVowel(word)


//Ceaser's way 1 I like this one but still need to ask matt about my way why it didn't work*********************

if (vowel.includes(word[0])){
  return word +'yay'
}
else {
  let consonant = ""
  for(let i=0; i<word.length; i++){
      if(vowel.includes(word[i])) {
        break
      }
      consonant +=word[i]
  }
  return word.substring(consonant.length) + consonant + "ay"
}
}


//Ceaser'way 2 REGULAR EXPRESSION AKA REGEX*********************
// if (vowel.includes(word[0])){
//     return word +'yay'
//   }

// else {
//   let firstMatch = word.match(/[aeiou]/g)||0
//   let vowel = word.indexOf(firstMatch[0])
//   return word.substring(vowel) +  word.substring(0,vowel) + "ay"
// }
// }






 //**********Ying's way bumping into a wall need to ask MATT about the if statement and it's not working the way I wanted. 

// if the first character is a vowel

//code has been cleaned up quite a bit. 
//in node main.js when typing the word, it satisfy the condition,
// but fails the test though, if troubleshoot further, the test can be passed. 


// function checkVowel(word){
//   console.log(wordSplitArr[0]);
//      if(wordSplitArr[0]=== "a"|| 
//         wordSplitArr[0]=== "e" || 
//         wordSplitArr[0]=== "i" || 
//         wordSplitArr[0]=== "o" || 
//         wordSplitArr[0]=== "u") {  
//         console.log( word +"yay") // i know this one works, but don't know how to get it out of the loop.  
//           return true;
//         }

//        else if(wordSplitArr[0]!== "a"|| 
//                wordSplitArr[0]!== "e" || 
//                wordSplitArr[0]!== "i" || 
//                wordSplitArr[0]!== "o" || 
//                wordSplitArr[0]!== "u") {        

//              for (let index = 0; index<word.length; index++){
//                   nonVowel = wordSplitArr.shift();
//                   console.log(wordSplitArr[index])  
//                   break

              //  console.log(wordSplitArr[index])
              // just to see what's the first letter print out

  //           }           
  //       }  console.log(wordSplitArr.join('') + nonVowel + "ay") 
        
  //   }
  // }

  

  //*********MATT'S WAY*******IT'S WORKING :)  */
  
  
  // let vowelArr = ["a","e","i","o", "u"]; 
  // console.log(word)
  // if(vowelArr.includes(word[0])){
  //   return word +'yay'
  // }
  //  return word;


// **************end of Matt's way*************














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

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
