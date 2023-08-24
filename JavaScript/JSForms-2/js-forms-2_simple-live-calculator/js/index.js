console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener('input', updateResult);
secondInput.addEventListener('input', updateResult);


function updateResult() {   
result.textContent = firstInput.value * secondInput.value;
}