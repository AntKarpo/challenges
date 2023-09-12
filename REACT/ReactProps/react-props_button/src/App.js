import React from "react";
import "./styles.css";

export default function App() {
  function handleClick(){
    console.log("You clicked me!");
  }
  return (
    <>
      <Button color="red" text="Button" disabled={false} onClick={handleClick} />
    </>
  )
}

function Button({color, disabled,text, click }){
  return (
    <button style={{color:color}}
    disabled={disabled}
    onClick={click}
     >{text}
     </button>   
  )
}