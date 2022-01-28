import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = ({ addUser }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const handleChange = (event) => {
        setUser(event.target.value);
    }

    const handleClick = () => {
        document.cookie = `isLoggedIn=true;max-age=60*100*5;`;
        document.cookie = `username=${user}`;

        addUser({
            isLoggedIn: true,
            username: user
        });

        navigate('/');
    }

    return (
        <Container maxWidth="sm" sx={{ my: '3rem' }}>
            <form>
                <TextField
                    fullWidth
                    hiddenLabel
                    required
                    id="username"
                    label="Username"
                    defaultValue=""
                    variant="standard"
                    onChange={(event) => handleChange(event)}
                />
                <TextField
                    fullWidth
                    hiddenLabel
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <Button
                    variant="contained" sx={{
                        mt: 3, backgroundColor: '#E0E0E0', color: '#000', '&:hover': {
                            backgroundColor: '#CCC',
                        }
                    }}
                    fullWidth
                    onClick={handleClick}>
                    Login
                </Button>
                <Button
                    variant="contained" sx={{
                        mt: 3, backgroundColor: '#E0E0E0', color: '#000', '&:hover': {
                            backgroundColor: '#CCC',
                        }
                    }}
                    fullWidth
                    onClick={handleClick}>
                    Sign Up
                </Button>

            </form>
        </Container >
    );
}

export default Login;