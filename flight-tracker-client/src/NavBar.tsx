import { Box, AppBar, Toolbar, Typography } from "@mui/material"

function NavBar(){
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar position="static">
                <Toolbar>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar