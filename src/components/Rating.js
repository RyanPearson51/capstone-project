import React from "react";
import { useParams } from 'react-router-dom';

import Map from './Map';

import Container from '@mui/material/Container';

const Rating = ({ ratings }) => {
    let { id } = useParams();
    let currentRating = ratings.find(rating => rating.id === Number(id));

    return (
        <Container maxWidth="md" sx={{ my: '3rem' }}>
            <h1>{currentRating.name}</h1>
            <p><strong>{currentRating.address}</strong></p>
            <p>{currentRating.rating}/5 star rating</p>
            <Map inputAddress={currentRating.address} />
        </Container >
    );
}

export default Rating;