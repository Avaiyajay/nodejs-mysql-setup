const ApiError = require("../error/api-error");

const validateRequest = (schema) => {
  return async (req, res, next) => {
    try {
      const validatedData = await schema.validate(req.body);
      req.body = validatedData;
      next();
    } catch (error) {
      next(ApiError.badRequest(error));
    }
  };
};

module.exports = validateRequest;
