import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset, login, logout } from "../features/auth/authSlice";
import { Paper, Typography, TextField, IconButton } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Spinner from '../components/Spinner'

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
        toast.error(message)
    }

    if (isSuccess || user) {
        navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <h1 className="title">
        <LoginIcon fontSize="large" className="title-icon" />
        <br />
        Login
      </h1>
      <Typography variant="h6" gutterBottom className="center">
        Login to begin recording entries
      </Typography>
      <Paper className="form">
        <TextField
          size="small"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={onChange}
        ></TextField>
        <TextField
          size="small"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={onChange}
        ></TextField>
        <IconButton onClick={onSubmit}>Submit</IconButton>
      </Paper>
    </>
  );
}

export default Login;
