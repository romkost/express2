const express = require('express');
const router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
router.get('/', (req, res) => {
  res.render('quiz', { title: 'Quiz' }); // renderje: /views/index.pug
});



module.exports = router;
