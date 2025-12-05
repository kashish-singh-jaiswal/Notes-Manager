const express = require("express");
const router = express.Router();
const controller = require("../controllers/notesController");

router.get("/", controller.getHome);
router.get("/add", controller.getAddNote);
router.post("/add", controller.postAddNote);

module.exports = router;