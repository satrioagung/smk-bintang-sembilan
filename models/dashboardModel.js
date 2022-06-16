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

  deleteAdmin: (id, cb) => {
    connect.query(`DELETE FROM table_user WHERE user_id=${id}`, cb);
  },

  createAdmin: (data, cb) => {
    connect.query(
      `INSERT INTO table_user (user_name,user_email,user_password) VALUES (?,?,SHA2(?,512));`,
      [data.nama, data.email, data.password],
      cb
    );
  },
};
