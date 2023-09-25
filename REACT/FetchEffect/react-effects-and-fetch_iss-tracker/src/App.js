import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
   const response = await fetch(URL);
   const data = await response.json();
   setCoords({
    longitude:data.longitude, 
    latitude:data.latitude
  });
  console.log("longtitude",data.longitude);
} catch (error) {
  console.log(error);
}
}
useEffect(() => {
  let isInit = true;
  let intervalId = 0;

  if (isInit) {
    getISSCoords();

 intervalId = setInterval(() => {
      getISSCoords();
    }, 5000);
  console.log(intervalId);
  }

  return () => {
      clearInterval(intervalId);
      isInit = false;
    };
  }, []);




return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}