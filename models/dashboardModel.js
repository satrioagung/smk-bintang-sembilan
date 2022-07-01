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

  getAll: (cb) => {
    connect.query(
      `SELECT * FROM table_user;
      SELECT * FROM  visimisi; 
      SELECT * FROM  sambutan; 
      SELECT * FROM  kejuruan;
      SELECT * FROM  berita;
      SELECT * FROM  galeri`,
      cb
    );
  },

  create: (tabel, data, cb) => {
    connect.query(
      `INSERT INTO ${tabel} SET 
      nama_${tabel}='${data.nama}', 
      detail_${tabel}='${data.detail}'`,
      cb
    );
  },

  // Create data with uploading foto by Multer
  createUpload: (tabel, data, file, cb) => {
    connect.query(
      `INSERT INTO ${tabel} SET 
      nama_${tabel}='${data.nama}', 
      detail_${tabel}='${data.detail}',
      foto_${tabel}='${file}'`,
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

  // Update data with uploading foto by Multer
  updateUpload: (tabel, data, id, file, cb) => {
    connect.query(
      `UPDATE ${tabel} SET 
      nama_${tabel}='${data.nama}', 
      detail_${tabel}='${data.detail}', 
      foto_${tabel}='${file}' 
      WHERE id_${tabel}=${id}`,
      cb
    );
  },

  // for update  menu with active status
  updateKomentar: (data, id, cb) => {
    connect.query(
      `UPDATE komentar SET aktif_komentar = '${data.aktif}' WHERE id_komentar = '${id}'`,
      cb
    );
  },

  updateAktif: (tabel, data, id, cb) => {
    connect.query(
      `UPDATE ${tabel} SET 
      nama_${tabel} = '${data.nama}', 
      detail_${tabel} = '${data.detail}',
      aktif_${tabel} = '${data.aktif}'
      WHERE id_${tabel}=${id}`,
      cb
    );
  },

  // Update data with uploading foto by Multer
  updateUploadAktif: (tabel, data, id, file, cb) => {
    connect.query(
      `UPDATE ${tabel} SET 
      nama_${tabel} = '${data.nama}', 
      detail_${tabel} = '${data.detail}', 
      foto_${tabel} = '${file}',
      aktif_${tabel} = '${data.aktif}' 
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
