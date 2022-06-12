module.exports = {
  home: (req, res) => {
    res.render("index");
  },

  dashboard: (req, res) => {
    res.render("dashboard/index");
  },
};
