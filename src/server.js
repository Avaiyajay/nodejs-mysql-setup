const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const passport = require("passport");

// importing router
const mainRouter = require("./routes/route");

const app = express();

// importing strategies
// require("../auth/passportFacebook");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

app.use(mainRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
  // res.render("error");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
