import { FaUser, FaLock } from "react-icons/fa";
import "./Home.css";
import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = { width: "800px", height: "400px" };

const Home = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => console.error(err)
    );
  }, []);

  console.log("A chave é " + import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

  return (
    <div className="home-container">
      <div className="map-container">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location || { lat: -23.55052, lng: -46.633308 }}
            zoom={15}
          >
            {location && <Marker position={location} />}
          </GoogleMap>
        </LoadScript>
      </div>

      <div className="form">
        <h1>Seu título aqui</h1>
      </div>
    </div>
  );
};

export default Home;
