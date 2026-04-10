const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res) => {
  res.status(404).render('404', {
    title: '404 - Página não encontrada',
    heading: '404 - Página não encontrada',
  });
});

module.exports = app;
