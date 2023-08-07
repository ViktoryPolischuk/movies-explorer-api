require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');
const auth = require('./middlewares/auth');
const cors = require('./middlewares/cors');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const NotFoundError = require('./utils/errors/NotFoundError');
const { login, createUser, logout } = require('./controllers/users');
const { validateSignIn, validateSignUp } = require('./utils/validators/users');
const { PORT, DB_URL } = require('./utils/constants');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(requestLogger);
app.use(cors);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.post('/signin', validateSignIn, login);
app.post('/signup', validateSignUp, createUser);
app.post('/signout', logout);
app.use('/users', auth, usersRouter);
app.use('/movies', auth, moviesRouter);
app.use((req, res, next) => {
  next(new NotFoundError('Запрашиваемый роут не найден'));
});
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

mongoose.connect(DB_URL, { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
