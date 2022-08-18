import { Toolbar, Typography, Box, IconButton, Tooltip, Avatar, AppBar } from "@mui/material"


function TopBar() {
    return (
      <AppBar position='fixed'  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,.87)'
      }}>
        <Typography >
         LOGO
        </Typography>
        <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            </Box>
      </Toolbar>
    </AppBar>
    )
}
export default TopBar