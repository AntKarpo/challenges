import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  const foundCountry = countries.find(country =>country.name.startsWith(searchString));
const foundCountries = countries.filter(country =>country.name.startsWith(searchString));


foundCountries.forEach((countrii) => {
  const countryElement = Country(countrii);
  container.append(countryElement);
});

  if (foundCountry) {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  }
  
});