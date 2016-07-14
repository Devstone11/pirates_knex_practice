var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'The International Pirates Database' });
});

module.exports = router;
