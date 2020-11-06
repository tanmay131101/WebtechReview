var express = require('express');
var router = express.Router();



/* GET home page. */
app.get('/login', function(req, res, next) {
    res.render('login.ejs', { title: 'Express' });
});



module.exports = router;
