const nanoId = require("nanoid");
const BadRequestError = require("../errors/bad-request");
const NotFoundError = require("../errors/not-found");
const { StatusCodes } = require("http-status-codes");
const LinkCollection = require("../model/Link");

const createLink = async (req, res) => {
  const url = await LinkCollection.create(req.body);

  res.status(StatusCodes.CREATED).json({
    success: true,
    url,
    message: "URL shortened successfully",
  });
};

const getUrl = async (req, res) => {
  const {
    params: { shortUrl },
  } = req;
  console.log(shortUrl);

  const url = await LinkCollection.findOne({ shortUrl });
  console.log(url);
  console.log(url.originalUrl);

  if (!url) {
    throw new NotFoundError("The shortUrl not found");
  }

  res.status(StatusCodes.OK).redirect(url.originalUrl);
};

module.exports = {
  createLink,
  getUrl,
};
