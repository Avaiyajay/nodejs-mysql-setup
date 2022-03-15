const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const passport = require("passport");
const db = require("./models");

const app = express();

// importing strategies
// require("../auth/passportFacebook");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

// routing
app.use("/", require("./routers/apiRouter"));
app.use(require("./error/api-error-handler"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
  db.sequelize
    .authenticate()
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
