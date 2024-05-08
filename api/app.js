var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors")

const config = {
  application: {
      cors: {
          server: [
              {
                  origin: "localhost:5173", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                  credentials: true
              }
          ]
      }
  }
}

const postsRouter = require("./routes/posts")
const userRouter = require("./routes/user")
const { default: mongoose } = require('mongoose');

var app = express();

const DATA_BASE_PASSWORD  = "braghieri_12";

const URL = "mongodb+srv://lafuentegonzalo1:"+DATA_BASE_PASSWORD+"@blog.ecsb9ga.mongodb.net/?retryWrites=true&w=majority&appName=blog";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(URL);
}

// view engine setup
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(
  config.application.cors.server
));

app.use("/api/user",userRouter)
app.use("/api/posts",postsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // render the error page
  res.status(err.status || 500);
  console.log("algo esta mal")
  res.send("error")
});

module.exports = app;
