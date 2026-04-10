var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('about', {
    title: 'About (/about)',
    heading: 'About (/about)',
  });
});

module.exports = router;
