module.exports = {
  home: (req, res) => {
    res.render("home/index");
  },

  dashboard: (req, res) => {
    res.render("dashboard/index");
  },

  detailBerita: (req, res) => {
    res.render("home/detail-berita");
  },
};
