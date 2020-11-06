var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app=express();

app.use( express.static( "public/stylesheets" ) );
app.use( express.static( "public/images" ) );


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));


app.use( express.static( "public/stylesheets" ) );
app.use( express.static( "public/images" ) );


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");
var nameSchema = new mongoose.Schema({
    username: String,
    password: String
});
var User = mongoose.model("User", nameSchema);



app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("user logged in,  continue shopping ");
            res.send("user logged in,  continue shopping ");

        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});

module.exports = app;

app.get('/login', function(req, res, next) {
    res.render('login.ejs', { title: 'Express' });
});

app.get('/', function(req, res, next) {
    res.render('index.ejs', { title: 'Express' });
  });

  app.get('/contact', function(req, res, next) {
    res.render('contact.ejs', { title: 'Express' });
});

app.get('/product', function(req, res, next) {
    res.render('product.ejs', { title: 'Express' });
});
app.get('/about', function(req, res, next) {
    res.render('about.ejs', { title: 'Express' });
});
