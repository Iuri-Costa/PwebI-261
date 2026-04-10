var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('signin', {
    title: 'Signin (/signin)',
    heading: 'Signin (/signin)',
  });
});

module.exports = router;
