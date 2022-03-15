const { Router } = require("express");

// import all the controllers
const subscriptionController = require("../controllers/subscriptionController");

module.exports = Router()
  .use("/api/subscription", subscriptionController)
  .use("api/test", subscriptionController);
