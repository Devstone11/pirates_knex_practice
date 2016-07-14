var express = require('express');
var router = express.Router();
var Pirates = require('../lib/queries')

router.get('/', function(req, res, next) {
  Pirates.all().then(function(payload) {
    res.render('pirates/index', { title: 'The International Pirates Database',
      pirates: payload.rows});
  })
});

router.get('/:id', function(req, res, next) {
  Pirates.find(req.params.id).then(function(payload) {
    res.render('pirates/show', {
      pirate: payload.rows[0]});
  })
});

router.get('/:id/delete', function(req, res, next) {
  Pirates.destroy(req.params.id).then(function() {
    res.redirect('/pirates')
  })
});

router.get('/:id/edit', function(req, res, next) {
  Pirates.find(req.params.id).then(function(payload) {
    res.render('pirates/edit', {
      pirate: payload.rows[0]
    })
  })
});

router.post('/:id', function(req, res, next) {
  Pirates.updateOne(req.body, req.params.id).then(function() {
    res.redirect('/pirates')
  })
});

router.get('/new', function(req, res, next) {
  res.render('pirates/new', { title: 'The International Pirates Database' });
});

router.post('/', function(req, res, next) {
  Pirates.create(req.body).then(function() {
    res.redirect('/pirates');
  })
})


module.exports = router;
