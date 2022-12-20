import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState, createContext, useMemo, useContext } from "react";
import NavBar from "./components/NavBar";
import Settings from "./components/Settings";
import { UserContext } from "./contexts/userContext";

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
  const { user } = useContext(UserContext);
  const [openSettings, setOpenSettings] = useState(false);
  const handleOpenSettings = () => setOpenSettings(true);
  const handleCloseSettings = () => setOpenSettings(false);

  return (
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar user={user.id} setOpenSettings={setOpenSettings} />
        <Settings openSettings={openSettings} setOpenSettings={setOpenSettings} />
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;
