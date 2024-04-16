import { Marker, Popup, TileLayer, MapContainer } from 'react-leaflet';

function Map() {
  return (
    <MapContainer
      center={[13.736717, 100.523186]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      <Marker position={[13.736717, 100.523186]}>
        <Popup>Pizzaria Restaurant</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
