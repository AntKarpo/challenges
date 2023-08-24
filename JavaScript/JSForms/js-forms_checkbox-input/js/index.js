console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
const tos = event.target.elements.tos.checked;
  if (!tos) {
    showTosError();
    return;
  } 
    hideTosError();
  
  // --^-- write your code here --^--

  //eslint-disable-next-line no-alert
  alert("Form submitted");
});
