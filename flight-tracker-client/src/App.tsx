import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState, createContext, useMemo } from "react";
import NavBar from "./components/NavBar";

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
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;
