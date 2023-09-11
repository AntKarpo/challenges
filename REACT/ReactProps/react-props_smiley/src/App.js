import React from "react";
import "./styles.css";

export default function App() {
  return (<>
    <Smiley isHappy={false} /> 
  </>
    )
}
function Smiley({ isHappy }) {
  return (
    <div>
      {isHappy ? (
        <span role="img" aria-label="Happy Smiley">
          😃
        </span>
      ) : (
        <span role="img" aria-label="Sad Smiley">
          😞
        </span>
      )}
    </div>
  );
}