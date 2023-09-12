import React from "react";
import "./styles.css";

export default function App() {
  return (
  <Sum valueA={1} valueB={2} />
  );
}

function Sum({valueA,valueB}) {
let sum = valueA + valueB;
return (
<div>
  <p>{valueA} + {valueB} ={sum}
  </p>
</div>);
}
