const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: (url) => validator.isURL(url, {
      protocols: ['http', 'https'],
      require_protocol: true,
    }),
  },
  trailerLink: {
    type: String,
    required: true,
    validate: (url) => validator.isURL(url, {
      protocols: ['http', 'https'],
      require_protocol: true,
    }),
  },
  thumbnail: {
    type: String,
    required: true,
    validate: (url) => validator.isURL(url, {
      protocols: ['http', 'https'],
      require_protocol: true,
    }),
  },
  owner: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
