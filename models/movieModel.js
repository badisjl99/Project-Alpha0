const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  rating: String,
  genres: [String],
  url: String,
  imageUrl: String,
  trailerLink: String,
  summary: String,
  directors: [String],
  actors: [{
    role: String,
    name: String
  }],
  year: String,
  download: [{
    link: String,
    quality: String
  }],
  movieImage: [String]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
