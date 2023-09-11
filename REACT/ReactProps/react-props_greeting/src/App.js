import "./styles.css";

export default function App() {
  const nameDis = 'James';
  return (
    <>
      <Greeting name={nameDis} />
    </>
  );
}


function Greeting({ name }) {
   const coaches = ['James', 'John', 'Jordan'];
if (coaches.includes(name)) {
    return <p>Hello, Coach!</p>;
  } else {
    return <p>Hello, {name}!</p>;
  }
}


