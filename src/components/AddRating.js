import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Map from './Map';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddRating = ({ ratings, addBusiness }) => {
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [rating, setRating] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const handleClick = () => {
        let lastListingId = ratings[ratings.length - 1].id;
        let newListingId = Number(lastListingId + 1);

        addBusiness({
            id: newListingId,
            name: name,
            team: team,
            rating: rating,
            address: address,
            description: description
        })

        navigate('/');
    }

    return (
        <Container maxWidth="lg" sx={{ my: '3rem' }}>
            <Grid container spacing={8}>
                <Grid item xs={12} md={6}>
                    <form>
                        <TextField
                            fullWidth
                            hiddenLabel
                            required
                            id="name"
                            name="name"
                            label="Ballpark Name"
                            variant="standard"
                            onChange={(event) => setName(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            hiddenLabel
                            id="address"
                            name="address"
                            label="Team"
                            type="text"
                            variant="standard"
                            onChange={(event) => setTeam(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            hiddenLabel
                            id="hours"
                            name="hours"
                            label="Rating (1-5)"
                            type="text"
                            variant="standard"
                            onChange={(event) => setRating(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            hiddenLabel
                            id="hours"
                            name="hours"
                            label="Description"
                            type="text"
                            variant="standard"
                            onChange={(event) => setAddress(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            hiddenLabel
                            required
                            id="name"
                            name="name"
                            label="Short description"
                            variant="standard"
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <Button
                            variant="contained" sx={{
                                mt: 3, width: '50%', backgroundColor: '#3E51B5', color: '#fff', '&:hover': {
                                    backgroundColor: '#CCC',
                                    color: '#000'
                                }
                            }}
                            onClick={handleClick} >
                            Save
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Map inputAddress={address} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default AddRating;