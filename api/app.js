var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sequelize = require('./models').sequelize;

var house = require('./routes/house');
var user = require('./routes/user');

var app = express();

// time test 3 backend


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

//enable use CORS
app.use(cors());


app.use('/api', house);
app.use('/api', user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// test DB connection
(async () => {
  try {
      await sequelize.authenticate();
      console.log('Connection to the database successful!');

  } catch (error) {
      console.error('Error connecting to the database: ', error);

  }

})();


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
