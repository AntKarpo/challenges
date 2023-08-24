console.clear();

const form = document.querySelector('[data-js="form"]');


form.addEventListener('submit', (event)=> {
event.preventDefault();

const formElements = event.target.elements;
const firstName = formElements.firstName.value;
const lastName = formElements.lastName.value;
const age = formElements.age.value;
const email = formElements.email.value;
const complaint = formElements.complaint.value;
const details = formElements.details.value;
const badness = formElements.badness.value;
const orderDate = formElements.orderDate.value;
const tos = formElements.tos.value;


console.log('firstName: ',firstName);
console.log('lastName: ',lastName);
console.log('age: ', age);
console.log('email: ', email);
console.log('complaint: ', complaint );
console.log('details: ', details );
console.log('badness: ', badness);
console.log('oder date: ', orderDate);
console.log('tos: ', tos);

console.log("The age-badness-sum of "+ firstName+ "is ", parseFloat(age) + parseFloat(badness));
});