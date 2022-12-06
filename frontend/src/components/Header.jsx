import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <AppBar className="appbar" position="static" elevation={10}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Entries
          </Typography>
          <HowToRegIcon className="icon" />
          <LoginIcon className="icon" color="inherit"></LoginIcon>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
