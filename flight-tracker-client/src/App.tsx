import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { useState } from "react"
import NavBar from "./components/NavBar"

function App() {
  const [theme, setTheme] = useState<boolean>(true)
  const updateTheme = () => {
    setTheme(prev => !prev)
  }
  let themes = createTheme({
    palette: {
      mode: theme ? "light" : "dark"
    }
  });
  
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline/>
      <div>
        <NavBar changeTheme={updateTheme} currTheme={theme}/>
      </div>
    </ThemeProvider>
  )
}

export default App
