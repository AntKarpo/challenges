import GlobalStyle from "../styles";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const initialLights = [
    { id: '1', name: 'Living Room', isOn: false },
    { id: '2', name: 'Kitchen', isOn: true },
    { id: '3', name: 'Bathroom', isOn: true},
    { id: '4', name: 'Bedroom', isOn: true},
    { id: '5', name: 'Floor', isOn: true}
  ];

  const [lights, setLights] = useState(initialLights)

  function handleToggle(lightId){
    setLights(lights.map(light => lightId === light.id ? {...light, isOn: !light.isOn}: light))
  }
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} toggleLight={handleToggle} />
    </Layout>
  );
}
