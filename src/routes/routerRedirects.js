// imports
var express = require('express');
var fs = require('fs-extra');
var router = express.Router();

router.get('/source', function (req, res) {
  return res.redirect('https://github.com/sebmandal/sebmandal-website')
});

router.get('/instagram', function (req, res) {
  return res.redirect('https://instagram.com/sebastian_productions1');
});

router.get('/github', function (req, res) {
  return res.redirect('https://sebmandal.com/github');
});

router.get('/personal-instagram', function (req, res) {
  return res.redirect('https://instagram.com/sebmandal');
});

router.get('/youtube', function (req, res) {
  return res.redirect('https://www.youtube.com/channel/UCaCYjktYm9hz1pkGmwSNO-w');
});

router.get('/email', function (req, res) {
  return res.redirect('mailto:sebastian.mandal@icloud.com');
});

// to be able to require this from server.js
module.exports = router;