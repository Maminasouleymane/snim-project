const liaisonControlller = require("../controllers").liaison;
const express = require("express");
const router = new express.Router();

router.get("/apitest", (req, res) =>
  res.status(200).send({ message: "everyhting work well so far " })
);

// console.log(arretControlller.create);
router.get("/displayLiaison", liaisonControlller.findAll);
router.post("/addLiaison", liaisonControlller.create);

module.exports = router;
