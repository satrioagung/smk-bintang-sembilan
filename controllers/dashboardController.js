module.exports = {
  dashboard: (req, res) => {
    res.render("dashboard/index");
  },

  admin: (req, res) => {
    res.render("dashboard/admin");
  },
};
