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

  editVisiMisi: (req, res) => {
    // menangkap params  yang tidak sesuai
    if (req.params.id >= 0 == false) {
      return res.render("dashboard/page-not-found");
    }

    // menangkap params yang sesuai
    dashboardModel.getById("visimisi", req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      if (result.length < 1) {
        return res.render("dashboard/page-not-found");
      }
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

  // CRUD Sambtan
  sambutan: (req, res) => {
    dashboardModel.get("sambutan", (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/sambutan", { rows });
    });
  },

  editSambutan: (req, res) => {
    // menangkap params  yang tidak sesuai
    if (req.params.id >= 0 == false) {
      return res.render("dashboard/page-not-found");
    }

    // menangkap params yang sesuai
    dashboardModel.getById("sambutan", req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      if (result.length < 1) {
        return res.render("dashboard/page-not-found");
      }
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
        if (fs.existsSync(deleteFoto)) {
          fs.unlinkSync(deleteFoto);
        } else {
          return;
        }
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

  // CRUD Kejuruan
  kejuruan: (req, res) => {
    dashboardModel.get("kejuruan", (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/kejuruan", { rows });
    });
  },

  editKejuruan: (req, res) => {
    // menangkap params  yang tidak sesuai
    if(req.params.id >= 0 == false){
      return res.render("dashboard/page-not-found");
    }
    
    // menangkap params yang sesuai
    dashboardModel.getById("kejuruan", req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      if (result.length < 1) {
        return res.render("dashboard/page-not-found");
      }
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
    // menangkap params  yang tidak sesuai
    if(req.params.id >= 0 == false){
      return res.render("dashboard/page-not-found");
    }

    // menangkap params yang sesuai
    dashboardModel.getById("berita", req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      if (result.length < 1) {
        return res.render("dashboard/page-not-found");
      }
      res.render("dashboard/edit-berita", { rows });
    });
  },

  updateBerita: (req, res) => {
    if (!req.file) {
      // Kondisi jika tidak update foto
      dashboardModel.updateAktif(
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
        if (fs.existsSync(deleteFoto)) {
          fs.unlinkSync(deleteFoto);
        } else {
          return;
        }
      });

      // Update data baru ke database
      dashboardModel.updateUploadAktif(
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
      if (fs.existsSync(deleteFoto)) {
        fs.unlinkSync(deleteFoto);
      } else {
        return;
      }
    });

    // Hapus data di database
    dashboardModel.delete("berita", req.params.id, (err, result) => {
      res.redirect("/dashboard/berita");
    });
  },

  // CRUD Komentar
  komentar: (req, res) => {
    dashboardModel.get("komentar", (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("dashboard/komentar", { rows });
    });
  },

  createKomentar: (req, res) => {
    dashboardModel.create("visimisi", req.body, (err, result) => {
      res.redirect("/dashboard/visimisi");
    });
  },

  editKomentar: (req, res) => {
    // menangkap params  yang tidak sesuai
    if(req.params.id >= 0 == false){
      return res.render("dashboard/page-not-found");
    }

    // menangkap params yang sesuai
    dashboardModel.getById("komentar", req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      if (result.length < 1) {
        return res.render("dashboard/page-not-found");
      }
      res.render("dashboard/edit-komentar", { rows });
    });
  },

  updateKomentar: (req, res) => {
    dashboardModel.updateKomentar(req.body, req.params.id, (err, result) => {
      res.redirect("/dashboard/komentar");
    });
  },

  deleteKomentar: (req, res) => {
    dashboardModel.delete("komentar", req.params.id, (err, result) => {
      res.redirect("/dashboard/komentar");
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
    // menangkap params  yang tidak sesuai
    if(req.params.id >= 0 == false){
      return res.render("dashboard/page-not-found");
    }

    // menangkap params yang sesuai
    dashboardModel.getById("galeri", req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      if (result.length < 1) {
        return res.render("dashboard/page-not-found");
      }
      res.render("dashboard/edit-galeri", { rows });
    });
  },

  updateGaleri: (req, res) => {
    if (!req.file) {
      // Kondisi jika tidak update foto
      dashboardModel.updateAktif(
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
        if (fs.existsSync(deleteFoto)) {
          fs.unlinkSync(deleteFoto);
        } else {
          return;
        }
      });

      // Update data baru ke database
      dashboardModel.updateUploadAktif(
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
      if (fs.existsSync(deleteFoto)) {
        fs.unlinkSync(deleteFoto);
      } else {
        return;
      }
    });

    // Hapus data di database
    dashboardModel.delete("galeri", req.params.id, (err, result) => {
      res.redirect("/dashboard/galeri");
    });
  },
};
