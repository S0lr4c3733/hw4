let tries = 0;
const NBR = 50;

function checkNumber(nbr, show = false) {
  const formResult = document.getElementById("form-result");
  if (nbr === NBR) {
    formResult.textContent = `Correct!  It took you ${tries} attempts to guess the correct number.`;
    return;
  }
  tries += 1;
  const msg = nbr > NBR ? "Too high, guess again" : "Too low, guess again";
  if (show) return alert(msg);
  formResult.textContent = msg;
}

function submitForm(event) {
  event.preventDefault();
  const form = document.getElementById("form-5");
  const nbr = form["nbr-1"].value;
  checkNumber(Number(nbr));
}

function isValid(nbr) {
  if (nbr == "") return false;
  nbr = Number(nbr);
  if (isNaN(nbr) || !Number.isInteger(nbr)) return false;
  if (nbr < 1 || nbr > 100) return false;
  return true;
}

function startPrompt() {
  const value = prompt("enter a number").trim();
  if (!isValid(value)) return alert("Invalid number");
  checkNumber(Number(value), true);
}
