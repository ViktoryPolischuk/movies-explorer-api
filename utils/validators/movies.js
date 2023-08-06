const { Joi, celebrate } = require('celebrate');

module.exports.validateMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().hex().length(24),
  }),
});

module.exports.validateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().uri({ scheme: ['http', 'https'], domain: {} }),
    trailerLink: Joi.string().required().uri({ scheme: ['http', 'https'], domain: {} }),
    thumbnail: Joi.string().required().uri({ scheme: ['http', 'https'], domain: {} }),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});
