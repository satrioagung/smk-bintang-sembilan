const mysql = require("mysql");
const config = require("../config/database");
const connect = mysql.createConnection(config);

module.exports = {
  getAll: (cb) => {
    connect.query(
      `SELECT * FROM  visimisi; 
      SELECT * FROM  sambutan; 
      SELECT * FROM  kejuruan;
      SELECT * FROM  berita;
      SELECT * FROM  galeri`,
      cb
    );
  },
};
