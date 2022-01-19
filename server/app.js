const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors'); 
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

const port = process.env.PORT || 5000;

//server starting
app.get("/", (req, res) => {

    res.status(200).send("Engine Started, Ready to take off!");

})

//configuring dotenv file
require("./configs/dotenv");
const client = require("./configs/database");

client.connect((err) => { //Connected Database

    if (err) {

        console.log(err);

    } else {

        console.log("Data logging initiated!");
    }

});

//routes to user.js
const api = require("./routes/user");

app.use("/api", api); //Route for /api endpoint of API

//express....
app.listen(port, () => {

    console.log(`Here we go, Engines started at ${port}.`);

})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // render the error page
  res.status(err.status || 500);
  res.json({
     message: err.message,
     error: req.app.get('env') === 'development' ? err : {} 

  });
});

module.exports = app;
