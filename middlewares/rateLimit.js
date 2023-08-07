const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  message: 'Слишком много запросов на сервер',
});
