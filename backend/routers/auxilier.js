const auxilierControlller = require("../controllers").auxilier;
const express = require("express");
const router = new express.Router();

router.get("/auxliair", auxilierControlller.findAll);
router.post("/auxiliair", auxilierControlller.create);

module.exports = router;
