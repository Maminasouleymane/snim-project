const operationControlller = require("../controllers").operation;
const express = require("express");
const router = new express.Router();

router.get("/apitest", (req, res) =>
  res.status(200).send({ message: "everyhting work well so far " })
);

console.log(operationControlller.create);
router.get("/operation", operationControlller.findAll);
router.post("/operation", operationControlller.create);

module.exports = router;
