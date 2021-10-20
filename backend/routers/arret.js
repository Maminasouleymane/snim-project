const arretControlller = require("../controllers").arret;
const express = require("express");
const router = new express.Router();

router.get("/apitest", (req, res) =>
  res.status(200).send({ message: "everyhting work well so far " })
);

// console.log(arretControlller.create);
router.get("/displayArret", arretControlller.findAll);
router.post("/addArret", arretControlller.create);

module.exports = router;
