function convert(nbr1) {
  return parseInt((nbr1 - 32) * 5) / 9;
}

function setFormResult(formId, nbr, conv, message) {
  const formResult = document.getElementById(formId);
  formResult.textContent = message.replace("${a}", nbr).replace("${b}", conv);
}

function submitForm(event) {
  event.preventDefault();
  const form = document.getElementById("form-2");
  const nbr1 = form["nbr-1"].value;
  const conv1 = convert(nbr1);
  const nbr2 = form["nbr-2"].value;
  const conv2 = convert(nbr2);
  const nbr3 = form["nbr-3"].value;
  const conv3 = convert(nbr3);

  setFormResult(
    "form-result-1",
    nbr1,
    conv1,
    "• ${a} degrees Fahrenheit = ${b} degrees Celsius"
  );
  setFormResult(
    "form-result-2",
    nbr2,
    conv2,
    "• Temperature of ${a} Fahrenheit is equivalent to ${b} degrees Celsius"
  );
  setFormResult(
    "form-result-3",
    nbr3,
    conv3,
    "• Water boiling temperate is ${a} Fahrenheit or ${b} Celsius"
  );
}

function isValid(nbr) {
  if (nbr == "") return false;
  nbr = Number(nbr);
  if (isNaN(nbr)) return false;
  return true;
}

function startPrompt() {
  const nbr1 = prompt("enter number");
  const nbr2 = prompt("enter number");
  const nbr3 = prompt("enter number");
  if (!isValid(nbr1) || !isValid(nbr2) || !isValid(nbr3))
    return alert("invalid input");
  const conv1 = convert(nbr1);
  const conv2 = convert(nbr2);
  const conv3 = convert(nbr3);
  console.log(`• ${nbr1} degrees Fahrenheit = ${conv1} degrees Celsius`);
  console.log(
    `• Temperature of ${nbr2} Fahrenheit is equivalent to ${conv2} degrees Celsius`
  );
  console.log(
    `• Water boiling temperate is ${nbr3} Fahrenheit or ${conv3} Celsius`
  );
}
