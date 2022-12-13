import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState, createContext, useMemo } from "react";
import NavBar from "./components/NavBar";
import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";

export const ColourModeContext = createContext({ toggleColourMode: () => {} });

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
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
        <MapContainer
          center={[53.47835503304096, -2.2440638998635642]}
          zoom={8}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;
