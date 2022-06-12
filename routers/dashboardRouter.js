const express = require("express");
const router = express.Router();
const verify = require("../config/verify");
const dashboardController = require("../controllers/dashboardController");

router.get("/", verify.isLogin, dashboardController.dashboard);
router.get("/admin", dashboardController.admin);

module.exports = router;
