var express = require('express');
var router = express.Router();

const page = (name) => (req, res) => {
  res.send(`<h1>${name}</h1>`);
};

router.get('/', page("Users (/users)"));

router.get('/:userid', (req, res) => {
  const userid = req.params.userid;

  if (!userid || userid.trim() === "") {
    return res.redirect("/signup");
  }

  res.send(`<h1>Bem-vindo, ${userid}</h1>`);
});

module.exports = router;
