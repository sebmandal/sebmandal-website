// imports
var express = require('express');
var router = express.Router();

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

// to be able to require this from server.js
module.exports = router;