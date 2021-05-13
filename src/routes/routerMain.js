// imports
var express = require('express');
var router = express.Router();
var fs = require('fs-extra');

router.get('/', function (req, res) {
  req.session.url = '/';
  return res.render('index', req.session);
});

router.get('/services', function (req, res) {
  req.session.url = '/services';
  return res.render('services', req.session);
});

router.get('/contact', function (req, res) {
  req.session.url = '/contact';
  return res.render('contact', req.session);
});

router.get('/history', function (req, res) {
  req.session.url = '/history';
  req.session.projects = fs.readJSONSync('./src/db/articles.json');
  return res.render('history', req.session);
});

router.get('/detail/:articleID', function (req, res) {
  req.session.url = '/detail';
  var articles = fs.readJSONSync('./src/db/articles.json');
  req.session.articles = articles;
  req.session.article = req.session.articles[parseInt(req.params.articleID)];
  res.render('detailView', req.session);
});

// reidrection router
var redirects = require('./routerRedirects')
router.use(redirects);

// to be able to require this from server.js
module.exports = router;