console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkButton = document.querySelector('[data-js="dark-mode-button"]');
const lightButton = document.querySelector('[data-js="light-mode-button"]');
const toggleMode = document.querySelector('[data-js="toggle-button"]');

console.log("button dark", darkButton);

darkButton.addEventListener("click", function () {
  bodyElement.classList.add("dark");
});

lightButton.addEventListener("click", function () {
  bodyElement.classList.remove("dark");
});

toggleMode.addEventListener("click", function () {
  bodyElement.classList.toggle("dark");
});
