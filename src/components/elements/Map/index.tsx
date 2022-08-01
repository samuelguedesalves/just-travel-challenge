import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { StylesContainer } from "./styles";

export default function Map() {
  return (
    <StylesContainer>
      <MapContainer
        center={[-12.987094, -38.450521]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "340px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-12.987094, -38.450521]}>
          <Popup>
            Just Travel
          </Popup>
        </Marker>
      </MapContainer>
    </StylesContainer>
  );
}
