import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
    <Button>Life of Bryan</Button>
     <Button>James Earl Jones</Button>
      <Button>Tweety</Button>
      <Button>Goofy and Max</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
