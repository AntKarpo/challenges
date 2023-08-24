console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');


addButton.addEventListener("click", (event) => {
event.preventDefault();

const slideIn = document.createElement('OL'); 
  slideIn.className = 'toast-container__message';
  toastContainer.appendChild(slideIn); 
  slideIn.innerHTML += "Hello from the other side";
});
  // Exercise: Append a new entry to the toast messages container


clearButton.addEventListener("click", () => {
  
  toastContainer.innerHTML = "";
  
  // Exercise: Clear the stack of toast messages
});




