const express = require("express");
const router = express.Router();
const verify = require("../config/verify");
const loginController = require("../controllers/loginController");

router.get("/", verify.isLogout, loginController.login);
router.get("/logout", loginController.logout);

router.post("/auth", loginController.loginAuth);

module.exports = router;
