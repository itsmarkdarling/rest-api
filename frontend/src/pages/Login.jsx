import { useState, useEffect } from 'react'
import { Paper, Typography, TextField, IconButton } from '@mui/material'
import LoginIcon from "@mui/icons-material/Login";

function Login() {
    const [formData, setFormData] = useState( {
        email: '',
        password: '',
    })

const { email, password } = formData

const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}


  return (
    <>
      <h1 className="title">
        <LoginIcon fontSize="large" className="title-icon" />
        <br />
        Login
      </h1>
      <Typography variant="h6" gutterBottom className="center">Login to begin recording entries</Typography>
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
        <IconButton>Submit</IconButton>
      </Paper>
    </>
  );
}

export default Login;
