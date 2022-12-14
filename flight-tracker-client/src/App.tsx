import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState, createContext, useMemo } from "react";
import NavBar from "./components/NavBar";
import Tile from "./components/Tile";
import { MapContainer, Marker } from "react-leaflet";
import "./App.css";
import L from "leaflet"; //leaflet object
import Plane from "./Plane.svg";

export const ColourModeContext = createContext({ toggleColourMode: () => {} });

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const iconPlane = new L.Icon({
    //custom icon
    iconUrl: Plane,
    iconRetinaUrl: Plane,
    iconSize: new L.Point(25, 25),
    className: "leaflet-div-icon",
  });
  const colourMode = useMemo(
    () => ({
      toggleColourMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <MapContainer //leaflet react component which holds the leaflet map, the leaflet api has been adapted to work with jsx not made for it
          center={[53.47835503304096, -2.2440638998635642]} //Manchester coords
          zoom={8}
          scrollWheelZoom={false}
        >
          <Tile />
          <Marker
            position={[53.47835503304096, -2.2440638998635642]}
            icon={iconPlane}
            eventHandlers={{
              click: () => {
                console.log("marker clicked");
              },
            }}
          />
        </MapContainer>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;
