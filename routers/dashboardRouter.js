const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

router.get("/", dashboardController.index);
router.get("/admin", dashboardController.admin);

// visi misi
router.get("/visimisi", dashboardController.visiMisi);
router.post("/createvisimisi", dashboardController.createVisiMisi);
router.get("/editvisimisi/:id", dashboardController.editVisiMisi);
router.post("/editvisimisi/:id", dashboardController.updateVisiMisi);
router.get("/deletevisimisi/:id", dashboardController.deleteVisiMisi);

// sambutan
router.get("/sambutan", dashboardController.sambutan);
router.post("/createsambutan", dashboardController.createSambutan);
router.get("/editsambutan/:id", dashboardController.editSambutan);
router.post("/editsambutan/:id", dashboardController.updateSambutan);
router.get("/deletesambutan/:id", dashboardController.deleteSambutan);

// kejuruan
router.get("/kejuruan", dashboardController.kejuruan);
router.post("/createkejuruan", dashboardController.createKejuruan);
router.get("/editkejuruan/:id", dashboardController.editKejuruan);
router.post("/editkejuruan/:id", dashboardController.updateKejuruan);
router.get("/deletekejuruan/:id", dashboardController.deleteKejuruan);

// berita
router.get("/berita", dashboardController.berita);
router.post("/createberita", dashboardController.createBerita);
router.get("/editberita/:id", dashboardController.editBerita);
router.post("/editberita/:id", dashboardController.updateBerita);
router.get("/deleteberita/:id", dashboardController.deleteBerita);

// galeri
router.get("/galeri", dashboardController.galeri);
router.post("/creategaleri", dashboardController.createGaleri);
router.get("/editgaleri/:id", dashboardController.editGaleri);
router.post("/editgaleri/:id", dashboardController.updateGaleri);
router.get("/deletegaleri/:id", dashboardController.deleteGaleri);

module.exports = router;
