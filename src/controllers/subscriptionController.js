const router = require("express").Router();

const { Subscription } = require("../models");
const validateRequest = require("../middlewares/validator");
const subscriptionDto = require("../dto/subscription");

router.post("/", validateRequest(subscriptionDto), async (req, res) => {
  try {
    const {
      type,
      price,
      description,
      aimed_audience,
      users_limit,
      profile_limit,
      advance_feature,
    } = req.body;

    const subscription = await Subscription.create({
      type,
      price,
      description,
      aimed_audience,
      users_limit,
      profile_limit,
      advance_feature,
    });

    res.status(201).json(subscription);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
