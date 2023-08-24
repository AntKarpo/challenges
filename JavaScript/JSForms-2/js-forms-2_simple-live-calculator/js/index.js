console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');



firstInput.addEventListener('input', updateResult);

secondInput.addEventListener('input', updateResult);

function updateResult() {   
const endResult = firstInput.value * secondInput.value;

result.textContent = `${endResult}`;
}