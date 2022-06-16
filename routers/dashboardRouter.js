const express = require("express");
const router = express.Router();
const verify = require("../config/verify");
const dashboardController = require("../controllers/dashboardController");

router.get("/", verify.isLogin, dashboardController.index);
router.get("/admin", verify.isLogin, dashboardController.admin);

// visi misi
router.get("/visimisi", verify.isLogin, dashboardController.visiMisi);
router.post("/createvisimisi", dashboardController.createVisiMisi);
router.get(
  "/editvisimisi/:id",
  verify.isLogin,
  dashboardController.editVisiMisi
);
router.post("/editvisimisi/:id", dashboardController.updateVisiMisi);
router.get(
  "/deletevisimisi/:id",
  verify.isLogin,
  dashboardController.deleteVisiMisi
);

// sambutan
router.get("/sambutan", verify.isLogin, dashboardController.sambutan);
router.post("/createsambutan", dashboardController.createSambutan);
router.get(
  "/editsambutan/:id",
  verify.isLogin,
  dashboardController.editSambutan
);
router.post("/editsambutan/:id", dashboardController.updateSambutan);
router.get(
  "/deletesambutan/:id",
  verify.isLogin,
  dashboardController.deleteSambutan
);

// kejuruan
router.get("/kejuruan", verify.isLogin, dashboardController.kejuruan);
router.post("/createkejuruan", dashboardController.createKejuruan);
router.get(
  "/editkejuruan/:id",
  verify.isLogin,
  dashboardController.editKejuruan
);
router.post("/editkejuruan/:id", dashboardController.updateKejuruan);
router.get(
  "/deletekejuruan/:id",
  verify.isLogin,
  dashboardController.deleteKejuruan
);

// berita
router.get("/berita", verify.isLogin, dashboardController.berita);
router.post("/createberita", dashboardController.createBerita);
router.get("/editberita/:id", verify.isLogin, dashboardController.editBerita);
router.post("/editberita/:id", dashboardController.updateBerita);
router.get(
  "/deleteberita/:id",
  verify.isLogin,
  dashboardController.deleteBerita
);

// galeri
router.get("/galeri", verify.isLogin, dashboardController.galeri);
router.post("/creategaleri", dashboardController.createGaleri);
router.get("/editgaleri/:id", verify.isLogin, dashboardController.editGaleri);
router.post("/editgaleri/:id", dashboardController.updateGaleri);
router.get(
  "/deletegaleri/:id",
  verify.isLogin,
  dashboardController.deleteGaleri
);

module.exports = router;
