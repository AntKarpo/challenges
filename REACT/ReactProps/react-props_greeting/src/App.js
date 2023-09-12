import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name={'James'} />
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


