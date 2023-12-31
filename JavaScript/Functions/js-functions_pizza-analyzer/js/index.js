console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let diameter1=pizzaInput1.value;
let diameter2=pizzaInput2.value;

pizzaInput1.addEventListener("input", () => {
diameter1 = pizzaInput1.value;
calculatePizzaGain(diameter1, diameter2);
updatePizzaDisplay(pizza1,diameter1);
updateOutputColor(diameter1,diameter2);
});

pizzaInput2.addEventListener("input", () => {
  diameter2 = pizzaInput2.value;
calculatePizzaGain(diameter2, diameter1);
updatePizzaDisplay(pizza2,diameter2);
updateOutputColor(diameter2,diameter1);

});


function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * (diameter1 / 2) ** 2;
  const area2 = Math.PI * (diameter2 / 2) ** 2;

  const pizzaGain = ((area2 - area1) / area1) * 100;
  
  const roundedPizzaGain = Math.round(pizzaGain);

  output.textContent = `${roundedPizzaGain}`;
}
// Task 1
// define the function calculatePizzaGain here

function updatePizzaDisplay(pizzaElement, newSize) {
  const displaySize = (newSize / 24) * 100;
  pizzaElement.style.width = `${displaySize}px`;
}
// Task 2
// define the function updatePizzaDisplay here
function updateOutputColor(size1, size2) {
  const outputColor = size2 > size1 ? "var(--green)" : "var(--red)";
  outputSection.style.backgroundColor = outputColor;
}
// Task 3
// define the function updateOutputColor here
