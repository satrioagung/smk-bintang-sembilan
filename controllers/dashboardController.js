const dashboardModel = require("../models/dashboardModel");

module.exports = {
  index: (req, res) => {
    res.render("dashboard/index");
  },

  admin: (req, res) => {
    res.render("dashboard/admin");
  },

  visiMisi: (req, res) => {
    dashboardModel.get("visimisi", (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/visi-misi", { rows });
    });
  },

  createVisiMisi: (req, res) => {
    dashboardModel.create("visimisi", req.body, (err, result) => {
      res.redirect("/dashboard/visimisi");
    });
  },

  editVisiMisi: (req, res) => {
    dashboardModel.getById("visimisi", req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/edit-visi-misi", { rows });
    });
  },

  updateVisiMisi: (req, res) => {
    dashboardModel.update(
      "visimisi",
      req.body,
      req.params.id,
      (err, result) => {
        res.redirect("/dashboard/visimisi");
      }
    );
  },

  deleteVisiMisi: (req, res) => {
    dashboardModel.delete("visimisi", req.params.id, (err, result) => {
      res.redirect("/dashboard/visimisi");
    });
  },

  sambutan: (req, res) => {
    dashboardModel.get("sambutan", (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/sambutan", { rows });
    });
  },

  createSambutan: (req, res) => {
    dashboardModel.create("sambutan", req.body, (err, result) => {
      res.redirect("/dashboard/sambutan");
    });
  },

  editSambutan: (req, res) => {
    dashboardModel.getById("sambutan", req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/edit-sambutan", { rows });
    });
  },

  updateSambutan: (req, res) => {
    dashboardModel.update(
      "sambutan",
      req.body,
      req.params.id,
      (err, result) => {
        res.redirect("/dashboard/sambutan");
      }
    );
  },

  deleteSambutan: (req, res) => {
    dashboardModel.delete("sambutan", req.params.id, (err, result) => {
      res.redirect("/dashboard/sambutan");
    });
  },

  kejuruan: (req, res) => {
    dashboardModel.get("kejuruan", (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/kejuruan", { rows });
    });
  },

  createKejuruan: (req, res) => {
    dashboardModel.create("kejuruan", req.body, (err, result) => {
      res.redirect("/dashboard/kejuruan");
    });
  },

  editKejuruan: (req, res) => {
    dashboardModel.getById("kejuruan", req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/edit-kejuruan", { rows });
    });
  },

  updateKejuruan: (req, res) => {
    dashboardModel.update(
      "kejuruan",
      req.body,
      req.params.id,
      (err, result) => {
        res.redirect("/dashboard/kejuruan");
      }
    );
  },

  deleteKejuruan: (req, res) => {
    dashboardModel.delete("kejuruan", req.params.id, (err, result) => {
      res.redirect("/dashboard/kejuruan");
    });
  },

  berita: (req, res) => {
    dashboardModel.get("berita", (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/berita", { rows });
    });
  },

  createBerita: (req, res) => {
    dashboardModel.create("berita", req.body, (err, result) => {
      res.redirect("/dashboard/berita");
    });
  },

  editBerita: (req, res) => {
    dashboardModel.getById("berita", req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/edit-berita", { rows });
    });
  },

  updateBerita: (req, res) => {
    dashboardModel.update("berita", req.body, req.params.id, (err, result) => {
      res.redirect("/dashboard/berita");
    });
  },

  deleteBerita: (req, res) => {
    dashboardModel.delete("berita", req.params.id, (err, result) => {
      res.redirect("/dashboard/berita");
    });
  },

  galeri: (req, res) => {
    dashboardModel.get("galeri", (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/galeri", { rows });
    });
  },

  createGaleri: (req, res) => {
    dashboardModel.create("galeri", req.body, (err, result) => {
      res.redirect("/dashboard/galeri");
    });
  },

  editGaleri: (req, res) => {
    dashboardModel.getById("galeri", req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/edit-galeri", { rows });
    });
  },

  updateGaleri: (req, res) => {
    dashboardModel.update("galeri", req.body, req.params.id, (err, result) => {
      res.redirect("/dashboard/galeri");
    });
  },

  deleteGaleri: (req, res) => {
    dashboardModel.delete("galeri", req.params.id, (err, result) => {
      res.redirect("/dashboard/galeri");
    });
  },
};
