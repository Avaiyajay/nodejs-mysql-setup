const router = require("express").Router();
const { Subscription } = require("../models");

router.get("/subscription", async (req, res) => {
  try {
    const newSubscription = await Subscription.create({ type: "basic" });
    return res.json(newSubscription);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

module.exports = router;
