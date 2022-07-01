const mysql = require("mysql");
const config = require("../config/database");
const connect = mysql.createConnection(config);

module.exports = {
  getBerita: (id, cb) => {
    connect.query(`SELECT * FROM berita WHERE id_berita = ${id}; 
                  SELECT * FROM komentar WHERE id_berita = ${id} AND aktif_komentar  = 'yes'`, cb);
  },

  findBerita: (id, cb) => {
    connect.query(`SELECT  COUNT(nama_berita) FROM berita WHERE id_berita  = ${id}`, cb)
  },

  getAll: (cb) => {
    connect.query(
      `SELECT * FROM  visimisi; 
      SELECT * FROM  sambutan; 
      SELECT * FROM  kejuruan;
      SELECT * FROM  berita WHERE aktif_berita = 'yes';
      SELECT * FROM  galeri WHERE aktif_galeri = 'yes'`,
      cb
    );
  },

  createKomentar: (data, cb) => {
    let tgl = new  Date();
    let tanggal = `${tgl.getFullYear()}/${tgl.getMonth()+1}/${tgl.getDate()}/`;
    connect.query(`INSERT INTO komentar SET
    nama_komentar = '${data.nama}',
    email_komentar = '${data.email}',
    detail_komentar = '${data.detail}',
    date_komentar = '${tanggal}',
    id_berita = '${data.id_berita}'`,
    cb);
  },
};
