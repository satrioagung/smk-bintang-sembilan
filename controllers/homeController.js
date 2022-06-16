const homeModel = require("../models/homeModel");

module.exports = {
  home: (req, res) => {
    homeModel.getAll((err, result) => {
      const rows = JSON.parse(JSON.stringify(result));
      console.log(rows[0]);
      res.render("home/index", { rows });
    });
  },
};
