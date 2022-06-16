const con = require("../config/database");

let mysql = require("mysql");
let createPool = mysql.createPool(con);

createPool.on("error", (err) => {
  console.error(err);
});

module.exports = {
  getUser: (connect, data, cb) => {
    connect.query(
      `SELECT * FROM table_user WHERE user_email = ? AND user_password = SHA2(?,512)`,
      [data.email, data.pass],
      cb
    );
  },

  createUser: (connect, data, cb) => {
    connect.query(
      `INSERT INTO table_user (user_name,user_email,user_password) VALUES (?,?,SHA2(?,512));`,
      [data.username, data.email, data.pass],
      cb
    );
  },
};
