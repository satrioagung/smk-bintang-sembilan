const express = require("express");
const router = express.Router();
const verify = require("../config/verify");
const loginController = require("../controllers/loginController");

router.get("/", verify.isLogout, loginController.login);
router.get("/logout", loginController.logout);

router.post("/auth", loginController.loginAuth);

router.get("/register", verify.isLogout, loginController.formRegister);
router.post("/save", verify.isLogout, loginController.saveRegister);

module.exports = router;
