const express = require("express");
const app = express();

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
  res.status(404).send(`
    <h1>404 - Página não encontrada</h1>
    <a href="/">Ir para Home</a>
  `);
});

module.exports = app;
