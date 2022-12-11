import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

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
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/" className="link icon">
              Entries
            </a>
          </Typography>
          {user ? (
                <LogoutIcon
                  className="icon"
                  color="inherit"
                  onClick={onLogout}
                />
          ) : (
            <>
              <a href="/register" className="link icon">
                <HowToRegIcon />
              </a>
              <a href="/login" className="link icon">
                <LoginIcon className="icon" color="inherit" />
              </a>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
