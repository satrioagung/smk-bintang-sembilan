const express = require("express");
const router = express.Router();
const verify = require("../config/verify");
const dashboardController = require("../controllers/dashboardController");

// konfigurasi multer (upload image)
const multer = require("multer");
const path = require("path");

const storageSambutan = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/images/sambutan");
  },
  filename: (req, file, cb) => {
    // console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const storageBerita = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/images/berita");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const storageGaleri = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/images/galeri");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fotoSambutan = multer({ storage: storageSambutan });
const fotoBerita = multer({ storage : storageBerita });
const fotoGaleri = multer({ storage : storageGaleri });

// admin
router.get("/", verify.isLogin, dashboardController.index);
router.get("/admin", verify.isLogin, dashboardController.admin);
router.post("/createadmin", dashboardController.createAdmin);
router.get("/deleteadmin/:id", verify.isLogin, dashboardController.deleteAdmin);

// visi misi
router.get("/visimisi", verify.isLogin, dashboardController.visiMisi);
router.get("/editvisimisi/:id", verify.isLogin, dashboardController.editVisiMisi);
router.post("/editvisimisi/:id", dashboardController.updateVisiMisi);

// sambutan
router.get("/sambutan", verify.isLogin, dashboardController.sambutan);
router.get("/editsambutan/:id", verify.isLogin, dashboardController.editSambutan);
router.post( "/editsambutan/:id", fotoSambutan.single("foto"), dashboardController.updateSambutan);

// kejuruan
router.get("/kejuruan", verify.isLogin, dashboardController.kejuruan);
router.get("/editkejuruan/:id", verify.isLogin, dashboardController.editKejuruan);
router.post("/editkejuruan/:id", dashboardController.updateKejuruan);

// berita
router.get("/berita", verify.isLogin, dashboardController.berita);
router.post("/createberita", fotoBerita.single('foto'), dashboardController.createBerita);
router.get("/editberita/:id", verify.isLogin, dashboardController.editBerita);
router.post("/editberita/:id", fotoBerita.single('foto'), dashboardController.updateBerita);
router.get("/deleteberita/:id", verify.isLogin, dashboardController.deleteBerita);

// komentar
router.get("/komentar", verify.isLogin, dashboardController.komentar);
router.post("/createkomentar", fotoBerita.single('foto'), dashboardController.createKomentar);
router.get("/editkomentar/:id", verify.isLogin, dashboardController.editKomentar);
router.post("/editkomentar/:id", fotoBerita.single('foto'), dashboardController.updateKomentar);
router.get("/deletekomentar/:id", verify.isLogin, dashboardController.deleteKomentar);

// galeri
router.get("/galeri", verify.isLogin, dashboardController.galeri);
router.post("/creategaleri", fotoGaleri.single('foto'), dashboardController.createGaleri);
router.get("/editgaleri/:id", verify.isLogin, dashboardController.editGaleri);
router.post("/editgaleri/:id", fotoGaleri.single('foto'), dashboardController.updateGaleri);
router.get( "/deletegaleri/:id", verify.isLogin, dashboardController.deleteGaleri);

module.exports = router;
