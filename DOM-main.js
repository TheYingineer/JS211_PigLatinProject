const vowel = ['a', 'e', 'i', 'o', 'u']
const output = document.getElementById("output")
const pigLatin = () => {
  // console.log("click") 

 let input = document.getElementById("user-input").value; 
 console.log(input)
 input = input.trim(' ')
 input= input.toLowerCase() 


 //  wordSplitArr = input.split('') // this convert the input(string) to an array.
//  console.log(wordSplitArr)
//  checkVowel()


//Ceaser's way 1 I like this one but still need to ask matt about my way why it didn't work*********************

if (vowel.includes(input[0])){
  
  // console.log(newWord, input)
  // console.log(output, 'hello')
   output.innerText = input +'yay'
}
else {
  let consonant = ""
  for(let i=0; i<input.length; i++){
      if(vowel.includes(input[i])) {
        break
      }
      // consonant +=input[i]
      consonant = consonant + input[i]
  }
   
   output.innerText = input.substring(consonant.length) + consonant + "ay"
}
}




