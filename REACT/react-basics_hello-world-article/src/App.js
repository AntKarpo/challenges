import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return(<article>
    <h1>Head</h1>
    <p>Paragraph</p>
  </article>);
}