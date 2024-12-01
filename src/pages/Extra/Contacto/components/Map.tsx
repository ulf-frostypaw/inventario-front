import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Importa los recursos de los íconos de Leaflet
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Configura los íconos de Leaflet (esto es para los íconos globales, pero también puedes definirlo para marcadores individuales)
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Alias de tipo para coordenadas
type Coordinates = [number, number];

const MapComponent: React.FC = () => {
  // Coordenadas fijas: Clima Polar del Pacífico
  const fixedPosition: Coordinates = [17.662741918495154, -101.48686935563984];

  // Crear un ícono personalizado para este marcador
  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [25, 41], // Tamaño del ícono
    iconAnchor: [12, 41], // Punto de anclaje del ícono
    popupAnchor: [1, -34], // Anclaje del popup
    shadowUrl: markerShadow,
    shadowSize: [41, 41], // Tamaño de la sombra
    shadowAnchor: [12, 41], // Anclaje de la sombra
  });

  return (
    <div>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "1.6rem",
          textAlign: "center",
          marginBottom: ".6rem",
        }}
      >
        Visítanos
      </h1>
      <MapContainer
        id="map"
        center={fixedPosition}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={fixedPosition} icon={customIcon}>
          <Popup>
            <strong>Ubicación fija:</strong> Clima Polar del Pacífico
            <br />
            <strong>Latitud:</strong> {fixedPosition[0]}
            <br />
            <strong>Longitud:</strong> {fixedPosition[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
