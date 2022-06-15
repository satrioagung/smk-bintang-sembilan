const mysql = require("mysql");
const config = require("../config/database");
const connect = mysql.createConnection(config);

module.exports = {
  get: (tabel, cb) => {
    connect.query(`SELECT * FROM ${tabel}`, cb);
  },

  getById: (tabel, id, cb) => {
    connect.query(`SELECT * FROM ${tabel} WHERE id_${tabel}=${id}`, cb);
  },

  create: (tabel, data, cb) => {
    connect.query(
      `INSERT INTO ${tabel} SET 
      nama_${tabel}='${data.nama}', 
      detail_${tabel}='${data.detail}'`,
      cb
    );
  },

  update: (tabel, data, id, cb) => {
    connect.query(
      `UPDATE ${tabel} SET 
      nama_${tabel}='${data.nama}', 
      detail_${tabel}='${data.detail}' 
      WHERE id_${tabel}=${id}`,
      cb
    );
  },

  delete: (tabel, id, cb) => {
    connect.query(`DELETE FROM ${tabel} WHERE id_${tabel}=${id}`, cb);
  },
};
