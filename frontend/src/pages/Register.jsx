import { useState, useEffect } from 'react'
import { Paper, Typography, TextField, IconButton } from '@mui/material'
import HowToRegIcon from '@mui/icons-material/HowToReg';

function Register() {
    const [formData, setFormData] = useState( {
        name: '',
        email: '',
        password: '',
        password2: '',
    })

const { name, email, password, password2 } = formData

const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}

  return (
    <>
    <h1 className="title"><HowToRegIcon fontSize="large" /><br />Register</h1>
    <Typography variant="h6" gutterBottom className="center">Please create an account</Typography>
    <Paper className="form">
        <TextField size="small" placeholder="Enter your name" name='name' value={name} onChange={onChange}></TextField>
        <TextField size="small" placeholder="Enter your email" name='email' value={email} onChange={onChange}></TextField>
        <TextField size="small" placeholder="Enter password" name='password' value={password} onChange={onChange}></TextField>
        <TextField size="small" placeholder="Confirm password" name='password2' value={password2} onChange={onChange}></TextField>
        <IconButton>Submit</IconButton>
    </Paper>
    </>
  )
}

export default Register