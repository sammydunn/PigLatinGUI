console.log("loading js file");



let button = document.getElementById('inputButton');

button.addEventListener('click',function(){
  console.log("the button got clicked");


let inputBox = document.getElementById('inputBox');

let input = inputBox.nodeValue;

console.log("the user entered",input);

let pigWord = piglatin(input);

let span = document.getElementById("translation");
span.innerText = pigWord;
})

let pigLatin = (input) => {

  let word = input.replace(/\s+/g, '').toLowerCase();
  console.log(word)

  let findFirstVowelPosition = (word) => {
    for (let i=0; i<word,length; i++) {
      if ('aeiou' .indexOf(word[i]) !== -1) {
        return i;
      }
    }
  }

  let firstPosition = findFirstVowelPosition(word)
  if (firstPosition > 0) {
    return word.slice(firstPosition) + '.' + word.slice(0, firstPosition) + 'ay';
  }
  return word + '-yay';
}