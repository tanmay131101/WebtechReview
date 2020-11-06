var express = require('express');
var router = express.Router();

/* GET home page. */
app.get('/contact', function(req, res, next) {
    res.render('contact.ejs', { title: 'Express' });
});

module.exports = router;
