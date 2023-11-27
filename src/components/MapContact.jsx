import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/contact.css';


const MapContact = ({center,zoom}) => {
  return (
    <MapContainer center={center} zoom={zoom} className='map-contact'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>Aquí estamos</Popup>
      </Marker>
      <Marker position={[-33.137419,-64.3653236]}>
        <Popup>Veterinaria VetVida, Martin Quenon 825, X5800 Río Cuarto, Córdoba</Popup>
      </Marker>
    </MapContainer>
);
};




export default MapContact;