var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const connectionString =  process.env.MONGO_CON;
console.log(connectionString);
mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var birdsRouter = require('./routes/birds');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var birds = require("./models/birds"); 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/selector',selectorRouter);
app.use('/resource',resourceRouter);
app.use('/addmods',addmodsRouter);
app.use('/birds',birdsRouter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

// We can seed the collection if needed on server start 
async function recreateDB(){ 
  // Delete everything 
  await birds.deleteMany(); 
 
  let instance1 = new 
birds({name:"GoldenEagle",  type:"Wild", national_bird: "Albania"}); 
let instance2 = new 
birds({name:"Red-crested turaco",  type:"Wild", national_bird:"angola"}); 
let instance3 = new 
birds({name:"Zenaida dove",  type:"Domestic", national_bird:"Anguilla"});
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 
  instance2.save( function(err,doc) { 
    if(err) return console.error(err); 
    console.log("First object saved") 
}); 
instance3.save( function(err,doc) { 
  if(err) return console.error(err); 
  console.log("First object saved") 
}); 
} 
 
let reseed = true; 
if (reseed) { recreateDB();}

module.exports = app;