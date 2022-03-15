const ApiError = require("../error/api-error");

const apiErrorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.code).json(err.message);
  }

  return res.status(500).json({ message: "Something went wrong" });
};

module.exports = apiErrorHandler;
