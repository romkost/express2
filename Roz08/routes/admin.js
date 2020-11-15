const express = require('express');
const News = require('../models/news');
const router = express.Router();


router.all('*', (req, res, next) => {
  if (!req.session.admin) {
    res.redirect('login');
    return;
  }
  next(); //aby wywoływały się pozostałe requesty

}); // odpali sie na kazda metode, adres

/* GET home page. */
//router.get('/', function(req, res, next) {
router.get('/', (req, res) => {
  News.find({}, (err, data) => {
    console.log(data);
    res.render('admin/index', { title: 'Admin', data }); // renderje: /views/index.pug
  });
  //console.log(req.session.admin);
});

router.get('/news/add', (req, res) => {
  res.render('admin/news-form', { title: 'Dodaj news', body: {}, bladValid: {} });
});

router.post('/news/add', (req, res) => {
  const body = req.body; // body zawiera dane w formularzu
    
  const newsData = new News(body);
  const bladValid = newsData.validateSync();
  
  newsData.save((err) => {
    //console.log(bladValid.message);
    if (err) {
      res.render('admin/news-form', { title: 'Dodaj news', bladValid, body});// dodaje bladValid, zeby moc wykorzystac go w PUGu
      return;
    }

    res.redirect('/admin')
  });
});

router.get('/news/delete/:id', (req, res) => {
  News.findByIdAndDelete(req.params.id, (err) => {
    res.redirect('/admin')
  });
});


module.exports = router;
