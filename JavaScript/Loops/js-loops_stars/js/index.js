console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledstars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let stars = 1; stars < 6; stars++) {
   const img = document.createElement('img');
   if (stars <= filledstars) {
   img.src = ("assets/star-filled.svg");
   } else {
    img.src = ("assets/star-empty.svg");
   }
 img.addEventListener('click', function() {
renderStars(stars);
});
starContainer.append(img);
  }
  //--^-- your code here --^--
}

renderStars(0);
 