const auxilierControlller = require("../controllers").auxilier;
const express = require("express");
const router = new express.Router();

router.get("/apitest", (req, res) =>
  res.status(200).send({ message: "everyhting work well so far " })
);

console.log(auxilierControlller.create);
router.get("/auxliair", auxilierControlller.findAll);
router.post("/auxiliair", auxilierControlller.create);

module.exports = router;
