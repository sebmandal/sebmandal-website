// imports
var express = require('express');
var fs = require('fs-extra');
var router = express.Router();
var articles = fs.readJSONSync('./src/db/articles.json');

router.post('/search', function (req, res) {
  var articles = fs.readJSONSync('./src/db/articles.json');
  req.session.articles = articles;
  req.session.searchParams = req.body.searchParams;
  return res.redirect('/search');
});

router.get('/search', function (req, res) {
  var articles = fs.readJSONSync('./src/db/articles.json');
  req.session.articles = articles;
  return res.render('search', req.session);
});

// to be able to require this from server.js
module.exports = router;