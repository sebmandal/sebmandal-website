// imports
var express = require('express');
var fs = require('fs-extra');
var router = express.Router();
var articles = fs.readJSONSync('./src/db/articles.json');

router.get('/articles/detail/:articleID', function (req, res) {
  var articles = fs.readJSONSync('./src/db/articles.json');
  req.session.articles = articles;
  req.session.article = req.session.articles[parseInt(req.params.articleID)];
  res.render('detailView', req.session);
});

// to be able to require this from server.js
module.exports = router;