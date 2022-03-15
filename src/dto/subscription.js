const yup = require("yup");

module.exports = yup.object().shape({
  type: yup.string().trim().required(),
  price: yup.number().required(),
  description: yup.string().trim(),
  aimed_audience: yup.string().trim(),
  users_limit: yup.number().required(),
  profile_limit: yup.number().required(),
  advance_feature: yup.string(),
});
