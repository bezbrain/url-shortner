const express = require("express");
const router = express.Router();

const { createLink, getUrl } = require("../controllers/link.controller");

router.post("/url", createLink);
router.get("/:shortUrl", getUrl);

module.exports = router;
