const dashboardModel = require("../models/dashboardModel");
const fs = require("fs");

module.exports = {
  index: (req, res) => {
    dashboardModel.getAll((err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/index", { rows });
    });
  },

  // CRUD admin
  admin: (req, res) => {
    dashboardModel.get("table_user", (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/admin", { rows });
    });
  },

  createAdmin: (req, res) => {
    dashboardModel.createAdmin(req.body, (err, result) => {
      res.redirect("/dashboard/admin");
    });
  },

  deleteAdmin: (req, res) => {
    dashboardModel.deleteAdmin(req.params.id, (err, result) => {
      res.redirect("/dashboard/admin");
    });
  },

  // CRUD Visi Misi
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

  // CRUD Sambtan
  sambutan: (req, res) => {
    dashboardModel.get("sambutan", (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/sambutan", { rows });
    });
  },

  createSambutan: (req, res) => {
    dashboardModel.createUpload(
      "sambutan",
      req.body,
      req.file.filename,
      (err, result) => {
        res.redirect("/dashboard/sambutan");
      }
    );
  },

  editSambutan: (req, res) => {
    dashboardModel.getById("sambutan", req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/edit-sambutan", { rows });
    });
  },

  updateSambutan: (req, res) => {
    if (!req.file) {
      // Kondisi jika tidak update foto
      dashboardModel.update(
        "sambutan",
        req.body,
        req.params.id,
        (err, result) => {
          console.log("Foto tidak diperbarui!");
          res.redirect("/dashboard/sambutan");
        }
      );
    } else {
      // Kondisi jika foto diperbarui
      // Hapus dulu file foto lama
      dashboardModel.getById("sambutan", req.params.id, (err, result) => {
        const row = JSON.parse(JSON.stringify(result));
        const nameFoto = row.map((obj) => obj.foto_sambutan);
        const deleteFoto = `assets/images/sambutan/${nameFoto.toString()}`;
        fs.unlinkSync(deleteFoto);
      });

      // Update data baru ke database
      dashboardModel.updateUpload(
        "sambutan",
        req.body,
        req.params.id,
        req.file.filename,
        (err, result) => {
          res.redirect("/dashboard/sambutan");
        }
      );
    }
  },

  deleteSambutan: (req, res) => {
    // Hapus file foto
    dashboardModel.getById("sambutan", req.params.id, (err, result) => {
      const row = JSON.parse(JSON.stringify(result));
      const nameFoto = row.map((obj) => obj.foto_sambutan);
      const deleteFoto = `assets/images/sambutan/${nameFoto.toString()}`;
      fs.unlinkSync(deleteFoto);
    });

    // Hapus data di database
    dashboardModel.delete("sambutan", req.params.id, (err, result) => {
      res.redirect("/dashboard/sambutan");
    });
  },

  // CRUD Kejuruan
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

  // CRUD Berita
  berita: (req, res) => {
    dashboardModel.get("berita", (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/berita", { rows });
    });
  },

  createBerita: (req, res) => {
    dashboardModel.createUpload(
      "berita",
      req.body,
      req.file.filename,
      (err, result) => {
        res.redirect("/dashboard/berita");
      }
    );
  },

  editBerita: (req, res) => {
    dashboardModel.getById("berita", req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/edit-berita", { rows });
    });
  },

  updateBerita: (req, res) => {
    if (!req.file) {
      // Kondisi jika tidak update foto
      dashboardModel.update(
        "berita",
        req.body,
        req.params.id,
        (err, result) => {
          console.log("Foto tidak diperbarui!");
          res.redirect("/dashboard/berita");
        }
      );
    } else {
      // Kondisi jika foto diperbarui
      // Hapus dulu file foto lama
      dashboardModel.getById("berita", req.params.id, (err, result) => {
        const row = JSON.parse(JSON.stringify(result));
        const nameFoto = row.map((obj) => obj.foto_berita);
        const deleteFoto = `assets/images/berita/${nameFoto.toString()}`;
        fs.unlinkSync(deleteFoto);
      });

      // Update data baru ke database
      dashboardModel.updateUpload(
        "berita",
        req.body,
        req.params.id,
        req.file.filename,
        (err, result) => {
          res.redirect("/dashboard/berita");
        }
      );
    }
  },

  deleteBerita: (req, res) => {
    // Hapus file foto
    dashboardModel.getById("berita", req.params.id, (err, result) => {
      const row = JSON.parse(JSON.stringify(result));
      const nameFoto = row.map((obj) => obj.foto_berita);
      const deleteFoto = `assets/images/berita/${nameFoto.toString()}`;
      fs.unlinkSync(deleteFoto);
    });

    // Hapus data di database
    dashboardModel.delete("berita", req.params.id, (err, result) => {
      res.redirect("/dashboard/berita");
    });
  },

  //CRUD Galeri
  galeri: (req, res) => {
    dashboardModel.get("galeri", (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/galeri", { rows });
    });
  },

  createGaleri: (req, res) => {
    dashboardModel.createUpload(
      "galeri",
      req.body,
      req.file.filename,
      (err, result) => {
        res.redirect("/dashboard/galeri");
      }
    );
  },

  editGaleri: (req, res) => {
    dashboardModel.getById("galeri", req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/edit-galeri", { rows });
    });
  },

  updateGaleri: (req, res) => {
    if (!req.file) {
      // Kondisi jika tidak update foto
      dashboardModel.update(
        "galeri",
        req.body,
        req.params.id,
        (err, result) => {
          console.log("Foto tidak diperbarui!");
          res.redirect("/dashboard/galeri");
        }
      );
    } else {
      // Kondisi jika foto diperbarui
      // Hapus dulu file foto lama
      dashboardModel.getById("galeri", req.params.id, (err, result) => {
        const row = JSON.parse(JSON.stringify(result));
        const nameFoto = row.map((obj) => obj.foto_galeri);
        const deleteFoto = `assets/images/galeri/${nameFoto.toString()}`;
        fs.unlinkSync(deleteFoto);
      });

      // Update data baru ke database
      dashboardModel.updateUpload(
        "galeri",
        req.body,
        req.params.id,
        req.file.filename,
        (err, result) => {
          res.redirect("/dashboard/galeri");
        }
      );
    }
  },

  deleteGaleri: (req, res) => {
    // Hapus file foto
    dashboardModel.getById("galeri", req.params.id, (err, result) => {
      const row = JSON.parse(JSON.stringify(result));
      const nameFoto = row.map((obj) => obj.foto_galeri);
      const deleteFoto = `assets/images/galeri/${nameFoto.toString()}`;
      fs.unlinkSync(deleteFoto);
    });

    // Hapus data di database
    dashboardModel.delete("galeri", req.params.id, (err, result) => {
      res.redirect("/dashboard/galeri");
    });
  },
};
