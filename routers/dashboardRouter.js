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

router.get("/", verify.isLogin, dashboardController.index);
router.get("/admin", verify.isLogin, dashboardController.admin);
router.post("/createadmin", dashboardController.createAdmin);
router.get("/deleteadmin/:id", verify.isLogin, dashboardController.deleteAdmin);
// router.get("/deletegaleri/:id", verify.isLogin, dashboardController.deleteGaleri);

// visi misi
router.get("/visimisi", verify.isLogin, dashboardController.visiMisi);
router.post("/createvisimisi", dashboardController.createVisiMisi);
router.get("/editvisimisi/:id", verify.isLogin, dashboardController.editVisiMisi);
router.post("/editvisimisi/:id", dashboardController.updateVisiMisi);
router.get("/deletevisimisi/:id", verify.isLogin, dashboardController.deleteVisiMisi);

// sambutan
router.get("/sambutan", verify.isLogin, dashboardController.sambutan);
router.post("/createsambutan", fotoSambutan.single("foto"), dashboardController.createSambutan);
router.get("/editsambutan/:id", verify.isLogin, dashboardController.editSambutan);
router.post( "/editsambutan/:id", fotoSambutan.single("foto"), dashboardController.updateSambutan);
router.get("/deletesambutan/:id", verify.isLogin, dashboardController.deleteSambutan );

// kejuruan
router.get("/kejuruan", verify.isLogin, dashboardController.kejuruan);
router.post("/createkejuruan", dashboardController.createKejuruan);
router.get("/editkejuruan/:id", verify.isLogin, dashboardController.editKejuruan);
router.post("/editkejuruan/:id", dashboardController.updateKejuruan);
router.get("/deletekejuruan/:id", verify.isLogin, dashboardController.deleteKejuruan);

// berita
router.get("/berita", verify.isLogin, dashboardController.berita);
router.post("/createberita", fotoBerita.single('foto'), dashboardController.createBerita);
router.get("/editberita/:id", verify.isLogin, dashboardController.editBerita);
router.post("/editberita/:id", fotoBerita.single('foto'), dashboardController.updateBerita);
router.get("/deleteberita/:id", verify.isLogin, dashboardController.deleteBerita);

// galeri
router.get("/galeri", verify.isLogin, dashboardController.galeri);
router.post("/creategaleri", fotoGaleri.single('foto'), dashboardController.createGaleri);
router.get("/editgaleri/:id", verify.isLogin, dashboardController.editGaleri);
router.post("/editgaleri/:id", fotoGaleri.single('foto'), dashboardController.updateGaleri);
router.get( "/deletegaleri/:id", verify.isLogin, dashboardController.deleteGaleri);

module.exports = router;
