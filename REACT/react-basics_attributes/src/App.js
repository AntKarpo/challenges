import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (<article className="article">
<h2 className="article__title">Life aaah finds a Way</h2>
<label htmlFor="react" id="react">How much do you love Jurassicpark?</label>
<input type="text" id="react"></input>
<a href="https://www.jurassicpark.com/" className="article__link">Jurassicpark</a>
  </article>);
}