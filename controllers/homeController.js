const homeModel = require("../models/homeModel");

module.exports = {
  home: (req, res) => {
    homeModel.getAll((err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("home/index", { rows });
    });
  },

  detailBerita: (req, res) => {
    // mencari berita berdasarkan id 
    homeModel.findBerita(req.params.id, (err,  result) => {
      let parseResult = JSON.parse(JSON.stringify(result));
      let id = String(parseResult[0]['COUNT(nama_berita)']);
      if(id < 1){
        res.render("home/page-not-found");
      } else {
        return;
      }
    });

    // render detail berita
    homeModel.getBerita(req.params.id, (err, result) => {
      const moment = require('moment');
      const rows = JSON.parse(JSON.stringify(result));
      res.render("home/detail-berita", { rows, moment });
    });
  },

  createKomentar: (req, res) => {
    homeModel.createKomentar(req.body, (err, result) => {
      res.redirect(`/berita/${req.body.id_berita}`);
    });
  },
};
