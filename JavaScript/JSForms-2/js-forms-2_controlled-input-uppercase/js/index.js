console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');



input.addEventListener('input', (event)=> {
event.preventDefault();

input.value = input.value.toUpperCase();
});