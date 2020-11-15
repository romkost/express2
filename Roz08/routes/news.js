const express = require('express');
const router = express.Router();
const News = require('../models/news');

/* GET home page. */
//router.get('/', function(req, res, next) {
router.get('/', (req, res) => {
  const search = req.query.search || '';

  const findNews = News
    .find({title: new RegExp(search.trim(), 'i') })
    .sort({created: -1}); //-1 sortowanie malejące, 1=rosnące

  findNews.exec((err, data) => {
    res.render('news', { title: 'News', data, search }); // renderje: /views/news.pug
  });
});



module.exports = router;
