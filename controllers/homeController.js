const homeModel = require("../models/homeModel");

module.exports = {
  home: (req, res) => {
    homeModel.getAll((err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("home/index", { rows });
    });
  },

  detailBerita: (req, res) => {
    homeModel.getBerita(req.params.id, (err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      res.render("home/detail-berita", { rows });
    });
  },
};
