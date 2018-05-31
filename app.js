var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var catalogRouter = require('./routes/catalog');
var api = require('./routes/api');

var app = express();

// Set mongoose connection
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var mongoDB = 'mongodb://ngivens:Iamsobadatthis@ds161860.mlab.com:61860/ece_database';
mongoose.connect(mongoDB, function(err, res){
  if(err){
    console.log('DB CONNECTION FAILED: '+err);
  }else{
    console.log('DB CONNECTION SUCCESS: '+mongoDB);
  }
});

var db = mongoose.connection;

// Importing mongoose Models
const capacitors = require('./models/capacitors.js'),
  resistors = require('./models/resistors.js'),
  inductors = require('./models/inductors.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', api);

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

module.exports = app;
