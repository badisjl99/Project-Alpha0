const express = require('express');
const Movie = require('../models/movieModel');

const router = express.Router() ;





router.get('/browse',async(req,res) =>{

    try {
        const movies = await Movie.aggregate([
          { $sample: { size: 10 } } 
        ]);

    res.render('browse', { movies });
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).send('Internal Server Error');
    }
});




module.exports = router ;