function calculateVowels(word) {
  let nbr = 0;
  const vowels = ["a", "e", "i", "o", "u", "y"];
  for (let idx = 0; idx < word.length; idx += 1)
    vowels.includes(word[idx]) ? (nbr += 1) : null;
  return nbr;
}

function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  for (let idx = 0; idx < word.length; idx += 1)
    if (word[idx] !== reversed[idx]) return false;
  return true;
}

function getResult(word, show = false) {
  const vowels = calculateVowels(word.toLowerCase());
  const isPal = isPalindrome(word.toLowerCase());
  const formResult = document.getElementById("form-result");
  const msg = `${word} contains ${vowels} vowels and is ${
    isPal ? "" : "not "
  }a palindrome`;
  console.log(msg);
  if (show) return alert(msg);
  formResult.textContent = msg;
}

function submitForm(event) {
  event.preventDefault();
  const form = document.getElementById("form-5");
  const text = form["text-1"].value;
  getResult(text.trim());
}

function startPrompt() {
  const value = prompt("enter word");
  getResult(value.trim(), true);
}
