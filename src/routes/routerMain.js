// imports
var express = require('express');
var router = express.Router();

router.get('/experimental', function (req, res) {
  return res.render('experimental');
});

// ro use the redirects router
var redirectsRouter = require('./routerRedirects');
router.use(redirectsRouter);

// to use the index router
var indexRouter = require('./routerIndex');
router.use(indexRouter);

// to use the developer router
var devRouter = require('./routerDeveloper');
router.use(devRouter);

// to use the articles router
var articlesRouter = require('./routerArticles');
router.use(articlesRouter);

// to use the detailView router
var detailViewRouter = require('./routerDetailView');
router.use(detailViewRouter);

// to use the search router
var searchRouter = require('./routerSearch');
router.use(searchRouter);

// to use the private router
var private = require('./routerPrivate');
router.use(private);

// to be able to require this from server.js
module.exports = router;