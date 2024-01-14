const BadRequestError = require("../errors/bad-request");

// Middleware to extract and store the URL from req.body
const extractUrlMiddleware = (req, res, next) => {
  const { url } = req.body;

  //   if (!url) {
  //     throw new BadRequestError("Please provide a URL");
  //   }

  req.originalUrl = url;
  next();
};

module.exports = extractUrlMiddleware;
