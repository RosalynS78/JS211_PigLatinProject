// import pigLatin from "./index.js";

let input = "";

//create variables that reference Elements in the DOM
const typeInput = document.getElementById("typeInput");
const button = document.getElementById("button");
const reset = document.getElementById("reset");
const typeOutput = document.getElementById("typeOutput");
const button = document.getElementById("extra");

console.log();

//Event Listeners
// console.log(textInput)
typeInput.addEventListener("keyup", (event) => {
  input = event.target.value;
  console.log(input);
});

button.addEventListener("click", (e) => {
  let word = input.split(" ");
  let pigWord = word.map((word) => pigLatin(word)).join(" *oink* ");
  typeOutput.innerText = pigWord;
});

reset.addEventListener("click", (e) => {
  typeInput.value = "";
  typeOutput.innerText = "";
  input = "";
  console.log("click");
});

pigButton.addEventListener("mousedown", (e) => {
  pigButton.classList.remove("pig-button");
  pigButton.classList.add("pig-button2");
  let words = input.split(" ");
  let pigWord = words.map((word) => pigLatin(word)).join(" *oink* ");
  typeOutput.innerText = pigWord;
});

// pigButton.addEventListener("mouseup", (e) => {
//   pigButton.classList.remove("pig-button2");
//   pigButton.classList.add("pig-button");
// });



const pigLatin = (word) => {
    let input = word.trim().toLowerCase().split('');
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    if (vowels.includes(input[0])) {
      return input.concat('yay').join().replace(/,/g, '');
    } else {
      for (let i = 0; i < input.length; i++) {
        if (vowels.indexOf(input[i]) !== -1) {
          const beforeVowel = input.splice(0, i)
          return input.concat(beforeVowel).concat('ay').join().replace(/,/g, '')
          
        }
      }
    }
  }