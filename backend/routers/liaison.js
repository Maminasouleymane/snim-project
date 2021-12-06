const liaisonControlller = require("../controllers").liaison;
const express = require("express");
const router = new express.Router();

router.get("/liaison", liaisonControlller.findAll);
router.post("/liaison", liaisonControlller.create);

module.exports = router;
