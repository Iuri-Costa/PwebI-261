var express = require('express');
var router = express.Router();

const homeRouter = require('./home');
const aboutRouter = require('./about');
const dataRouter = require('./data');
const signupRouter = require('./signup');
const signinRouter = require('./signin');

router.use('/', homeRouter);
router.use('/about', aboutRouter);
router.use('/data', dataRouter);
router.use('/signup', signupRouter);
router.use('/signin', signinRouter);

module.exports = router;
