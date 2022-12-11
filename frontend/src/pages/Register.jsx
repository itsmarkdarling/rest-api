import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset, logout } from "../features/auth/authSlice";
import { Paper, Typography, TextField, IconButton } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <h1 className="title">
        <HowToRegIcon fontSize="large" />
        <br />
        Register
      </h1>
      <Typography variant="h6" gutterBottom className="center">
        Create an account to add entries
      </Typography>
      <Paper className="form">
        <TextField
          size="small"
          placeholder="Enter your name"
          name="name"
          id='name'
          value={name}
          onChange={onChange}
        ></TextField>
        <TextField
          size="small"
          placeholder="Enter your email"
          name="email"
          id='email'
          value={email}
          onChange={onChange}
        ></TextField>
        <TextField
          size="small"
          placeholder="Enter password"
          name="password"
          id='password'
          value={password}
          onChange={onChange}
        ></TextField>
        <TextField
          size="small"
          placeholder="Confirm password"
          name="password2"
          id='password2'
          value={password2}
          onChange={onChange}
        ></TextField>
        <IconButton onClick={onSubmit}>Submit</IconButton>
      </Paper>
    </>
  );
}

export default Register;
