console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  const operator = event.target.querySelector('input[name="operator"]:checked').value;

  const numberA =Number(event.target.elements.numberA.value);
const numberB = Number(event.target.elements.numberB.value);

  if  (operator === "addition") {
  result = add(numberA, numberB);
}else if ( operator === "subtraction"){
  result = subtract(numberA, numberB);
} else if ( operator === "multiplication"){
  result = multiply(numberA, numberB);
} else if ( operator === "division"){
  result = divide(numberA, numberB);
  if (numberB === 0){
    result = "choose another number numnuts";
  }
} 
  // --^-- write your code here --^--
  resultOutput.textContent = result;
});
