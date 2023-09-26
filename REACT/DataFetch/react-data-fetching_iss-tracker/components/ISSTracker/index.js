
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  const { data, error,isLoading, mutate } = useSWR(URL);
  
  if (error) return <h1>Error</h1>;
  if (isLoading)  return <p>Loading...</p>;

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={()=>mutate()} 
      />
    </main>
  );
}
