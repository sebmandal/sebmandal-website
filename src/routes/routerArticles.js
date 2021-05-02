// imports
var express = require('express');
var fs = require('fs-extra');
var router = express.Router();
var articles = fs.readJSONSync('./src/db/articles.json');

router.get('/articles', function (req, res) {
  var articles = fs.readJSONSync('./src/db/articles.json');
  req.session.articles = articles;
  res.render('articles', req.session);
});

// to be able to require this from server.js
module.exports = router;