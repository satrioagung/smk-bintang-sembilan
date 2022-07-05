const homeModel = require("../models/homeModel");

module.exports = {
  home: (req, res) => {
    homeModel.getAll((err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("home/index", { rows });
    });
  },

  detailBerita: (req, res) => {
    // menangani params yang tidak sesuai
    if(req.params.id >= 0 == false){
      return res.render("home/page-not-found");
    }

    // menangani params yang sesuai
    homeModel.getBerita(req.params.id, (err, result) => {
      if(result[0].length < 1){
        res.render("home/page-not-found");
      } else {
        const moment = require('moment');
        const rows = JSON.parse(JSON.stringify(result));
        res.render("home/detail-berita", { rows, moment });
      }
    });
  },

  createKomentar: (req, res) => {
    homeModel.createKomentar(req.body, (err, result) => {
      res.redirect(`/berita/${req.body.id_berita}`);
    });
  },
};
