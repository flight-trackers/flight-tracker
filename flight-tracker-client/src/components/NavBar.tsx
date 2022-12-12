import { useState, useContext, MouseEvent } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  TextField,
  IconButton,
  Button,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import "../components.css";
import { ColourModeContext } from "../App";

function NavBar() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const theme = useTheme();
  const colourMode = useContext(ColourModeContext);

  const open = Boolean(anchorEl);

  const menuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const menuClose = () => {
    setAnchorEl(null);
  };

  const loginUser = () => {
    setLoggedIn((prev) => !prev);
  };

  const logoutUser = () => {
    setLoggedIn((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <div className="toolbar-left">
            <IconButton onClick={menuOpen} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={menuClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {loggedIn ? (
                <div>
                  <TextField
                    size="small"
                    placeholder="Username"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: 1,
                      border: "none",
                      margin: "0 10px 0 10px",
                    }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextField
                    size="small"
                    placeholder="Password"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: 1,
                      border: "none",
                      margin: "0 10px 10px 0",
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <MenuItem onClick={loginUser} sx={{ margin: "0 10px" }}>
                    Log In
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem sx={{ margin: "0 10px" }}>Settings</MenuItem>
                  <MenuItem
                    onClick={colourMode.toggleColourMode}
                    sx={{ margin: "0 10px" }}
                  >
                    {theme.palette.mode === "light" ? "Dark" : "Light"}
                  </MenuItem>
                  <MenuItem onClick={logoutUser} sx={{ margin: "0 10px" }}>
                    Log Out
                  </MenuItem>
                </div>
              )}
            </Menu>
            <p className="toolbar-user">Username</p>
            <img
              src="https://via.placeholder.com/50"
              className="toolbar-avatar"
            />
          </div>
          <div className="toolbar-right">
            <TextField
              className="toolbar-search"
              size="small"
              placeholder="Search"
              sx={{ backgroundColor: "white", borderRadius: 1, border: "none" }}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <IconButton sx={{ color: "white" }}>
              <SearchIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
