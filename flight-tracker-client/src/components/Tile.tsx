import { TileLayer, useMap } from "react-leaflet";
const Tile = () => {
  const map = useMap();

  return (
    <TileLayer //leaflet map display
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  );
};

export default Tile;
