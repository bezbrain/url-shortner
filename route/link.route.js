const express = require("express");
const router = express.Router();

const { createLink, getUrl } = require("../controllers/link.controller");

router.post("/", createLink);
router.get("/:shortUrl", getUrl);

module.exports = router;
