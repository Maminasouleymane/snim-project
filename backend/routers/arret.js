const arretControlller = require("../controllers").arret;
const express = require("express");
const router = new express.Router();

router.get("/arret", arretControlller.findAll);
router.post("/arret", arretControlller.create);

module.exports = router;
