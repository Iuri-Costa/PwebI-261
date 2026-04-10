var express = require('express');
var router = express.Router();

const page = (name, view) => (req, res) => {
  res.render(view, {
    title: name,
    heading: name,
  });
};

router.get('/', page('Users (/users)', 'users'));

router.get('/:userid', (req, res) => {
  const userid = req.params.userid;

  if (!userid || userid.trim() === '') {
    return res.redirect('/signup');
  }

  res.render('user', {
    title: `Bem-vindo, ${userid}`,
    heading: `Bem-vindo, ${userid}`,
    userid,
  });
});

module.exports = router;
