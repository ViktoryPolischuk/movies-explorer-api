const express = require('express');
const {
  getMovies,
  createMovie,
  deleteMovieById,
} = require('../controllers/movies');
const { validateMovie, validateMovieId } = require('../utils/validators/movies');

const router = express.Router();

router.get('/', getMovies);
router.post('/', validateMovie, createMovie);
router.delete('/_id', validateMovieId, deleteMovieById);

module.exports = router;
