function saveWords() {
  let words = [];
  let display = "";

  while (true) {
    const value = prompt("add a word").trim();
    if (value.toLowerCase() === "stop") break;
    words.push(value);
  }
  if (words.length === 0)
    return console.log(`No words to display, Stop was the first word entered.`);
  console.log("You entered the following words:");
  words.forEach((word) => (display += `${word}\n`));
  alert(display);
  console.log(display);
}

saveWords();
