import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <Box/>
      <Box isBlack={isBlack}/>
    </div>
  );
}
