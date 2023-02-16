function calculate(nbr1, operation, nbr2, show = false) {
  let result = 0;
  switch (operation) {
    case "+":
      result = nbr1 + nbr2;
      break;
    case "-":
      result = nbr1 - nbr2;
      break;
    case "*":
      result = nbr1 * nbr2;
      break;
    case "/":
      result = nbr1 / nbr2;
      break;
  }
  const formResult = document.getElementById("form-result");
  const msg = `Output: ${nbr1} ${operation} ${nbr2}: ${result}`;
  console.log(msg);
  if (show) return alert(msg);
  formResult.textContent = msg;
}

function submitForm(event) {
  event.preventDefault();
  const form = document.getElementById("form-1");
  const nbr1 = form["nbr-1"].value;
  const operation = form["operation"].value;
  const nbr2 = form["nbr-2"].value;
  calculate(Number(nbr1), operation, Number(nbr2));
}

function isValid(nbr) {
  if (nbr == "") return false;
  nbr = Number(nbr);
  if (isNaN(nbr) || !Number.isInteger(nbr)) return false;
  return true;
}

function startPrompt() {
  const operands = ["+", "-", "*", "/"];
  const nbr1 = prompt("enter number").trim();
  const operation = prompt("enter operand").trim();
  const nbr2 = prompt("enter number").trim();

  if (!isValid(nbr1) || !operands.includes(operation) || !isValid(nbr2))
    return alert("invalid input");
  calculate(Number(nbr1), operation, Number(nbr2), true);
}
