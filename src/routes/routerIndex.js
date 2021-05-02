// imports
var express = require('express');
var fs = require('fs-extra');
var router = express.Router();
var articles = fs.readJSONSync('./src/db/articles.json');

router.get('/', function (req, res) {
  var articles = fs.readJSONSync('./src/db/articles.json');
  // res.render('index', { name: 'sebmandal', age: 15 });
  req.session.articles = articles;
  res.render('index', req.session);
});

// to be able to require this from server.js
module.exports = router;