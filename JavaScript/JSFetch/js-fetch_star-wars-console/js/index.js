console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch("https://swapi.dev/api/people");

    if (response.ok) {

      const data = await response.json();
      console.log('R2-D2 eyes are ',data.results[2].eye_color)
      return data;

    } else {

      console.log("No worky");
    }
  } catch (e) {

    console.log("Error Error");
  }
}

fetchData();



