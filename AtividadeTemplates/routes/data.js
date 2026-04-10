var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('data', {
    title: 'Data (/data - GET)',
    heading: 'Data (/data - GET)',
  });
});

router.post('/', (req, res) => {
  res.render('data-post', {
    title: 'POST em /data',
    heading: 'POST recebido em /data',
  });
});

module.exports = router;
