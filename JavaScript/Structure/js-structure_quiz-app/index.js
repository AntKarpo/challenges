// Store the cards in a global state
import { cards } from "./global.js";
import { Bookmark } from "./components/Bookmark/bookmark.js";
import { CardList } from "./components/CardList/CardList.js";
import { Form } from "./components/Form/Form.js";
import { App } from "./components/App/App.js";
import { Card } from "./components/Card/Card.js";
import { Header } from "./components/Header/Header.js";

Bookmark({active:true , onClick:function(){}});
CardList();
Form();
Header();

export default function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = {
    question: data.question,
    answer: data.answer,
    tags: data.tags.split(","),
    isBookmarked: false,
  };

  cards.unshift(newCard);

  // To prevent the need to rerender, we add the new card to the DOM directly
  const cardList = document.querySelector(".card-list");
  const newCardElement = Card(newCard);
  cardList.prepend(newCardElement);

  event.target.reset();
  event.target.elements.question.focus();
}


// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
