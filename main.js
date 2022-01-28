const pigLatin = () => {
  let word = document.getElementById('wordInput').value;
  let displayWord = document.getElementById('wordOutput');
  let input = word.trim().toLowerCase().split('');
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  if (vowels.includes(input[0])) {
    let beginsVowel = input.concat('yay').join().replace(/,/g, '');
    displayWord.innerHTML = beginsVowel;
  } else {
    for (let i = 0; i < input.length; i++) {
      if (vowels.indexOf(input[i]) !== -1) {
        const beforeVowel = input.splice(0, i);
        let consonant = input.concat(beforeVowel).concat('ay').join().replace(/,/g, '');
        displayWord.innerHTML = consonant;
      }
    }
  }
}

function reset() {
  document.getElementById('wordInput').value = '';
  document.getElementById('wordOutput').innerText = '';
}