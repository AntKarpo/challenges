console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const article = document.createElement("article");
const p = document.createElement("p");
const footer = document.createElement("footer");
const span = document.createElement("span");
const buttonElement = document.createElement("button");

article.className = "post";
p.className = "post__content";
p.textContent = "OK i think i got it. im going home to sleep";

footer.className = "post__footer";
span.className = "post__username";
span.textContent = "@username";
buttonElement.className = "post__button";
buttonElement.dataset.js = "like-button";
buttonElement.textContent = "♥ Like";

article.appendChild(p);
article.appendChild(footer);
footer.appendChild(span);
footer.appendChild(buttonElement);


buttonElement.addEventListener("click", handleLikeButtonClick);

document.body.appendChild(article);

// Exercise:
// Use document.createElement() and append another social media post to the body.
