const express = require('express');
const Movie = require('../models/movieModel');

const router = express.Router();

// Function to fetch random movie
async function getRandomMovie() {
    try {
        const randomMovie = await Movie.aggregate([{ $sample: { size: 1 } }]);
        return randomMovie[0];
    } catch (error) {
        console.error('Error fetching random movie:', error);
        throw error;
    }
}

router.get('/browse', async (req, res) => {
    try {
        const movies = await Movie.aggregate([{ $sample: { size: 10 } }]);
        const randomMovie = await getRandomMovie(); // Fetch random movie
        res.render('browse', { movies, randomMovie }); // Pass random movie to browse.ejs
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).send('Internal Server Error');
    }
});


router.get('/randommovie', async (req, res) => {
    try {
        const randomMovie = await getRandomMovie(); // Fetch random movie
        res.render('randommovie', { movie: randomMovie }); // Pass random movie to template
    } catch (error) {
        console.error('Error fetching random movie:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;
