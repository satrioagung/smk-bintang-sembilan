const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.home);
router.get("/berita/:id", homeController.detailBerita);
router.post("/komen", homeController.createKomentar)

module.exports = router;
