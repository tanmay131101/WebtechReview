var express = require('express');
var router = express.Router();

/* GET home page. */
app.get('/about', function(req, res, next) {
    res.render('about.ejs', { title: 'Express' });
});

module.exports = router;
