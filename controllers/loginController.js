const con = require("../config/database");

let mysql = require("mysql");
const loginModel = require("../models/loginModel");
let pool = mysql.createPool(con);

pool.on("error", (err) => {
  console.error(err);
});

module.exports = {
  login(req, res) {
    res.render("login/login", {
      colorFlash: req.flash("color"),
      statusFlash: req.flash("status"),
      pesanFlash: req.flash("message"),
    });
  },

  loginAuth(req, res) {
    let email = req.body.email;
    let password = req.body.pass;
    if (email && password) {
      pool.getConnection(function (err, connection) {
        if (err) throw err;
        loginModel.getUser(connection, req.body, (err, results) => {
          if (err) throw error;
          if (results.length > 0) {
            req.session.loggedin = true;
            req.session.userid = results[0].user_id;
            req.session.username = results[0].user_name;
            res.redirect("/dashboard");
          } else {
            req.flash("color", "danger");
            req.flash("status", "Oops..");
            req.flash("message", "Akun tidak ditemukan");
            res.redirect("/login");
          }
        });
        connection.release();
      });
    } else {
      res.redirect("/login");
      res.end();
    }
  },

  logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        return console.log(err);
      }
      res.clearCookie("secretname");
      res.redirect("/login");
    });
  },

  formRegister(req, res) {
    res.render("login/register");
  },

  saveRegister(req, res) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.pass;
    if (username && email && password) {
      pool.getConnection(function (err, connection) {
        if (err) throw err;
        loginModel.createUser(connection, req.body, (err, results) => {
          if (err) throw error;
          req.flash("color", "success");
          req.flash("status", "Yes..");
          req.flash("message", "Registrasi berhasil");
          res.redirect("/login");
        });
        connection.release();
      });
    } else {
      res.redirect("/login");
      res.end();
    }
  },
};
