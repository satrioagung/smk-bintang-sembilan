-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: db4free.net    Database: smkbintang9bm
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `berita`
--

DROP TABLE IF EXISTS `berita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `berita` (
  `id_berita` int NOT NULL AUTO_INCREMENT,
  `nama_berita` varchar(50) DEFAULT NULL,
  `detail_berita` varchar(1500) DEFAULT NULL,
  `foto_berita` varchar(50) DEFAULT NULL,
  `aktif_berita` enum('yes','no') DEFAULT 'yes',
  PRIMARY KEY (`id_berita`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `berita`
--

LOCK TABLES `berita` WRITE;
/*!40000 ALTER TABLE `berita` DISABLE KEYS */;
INSERT INTO `berita` VALUES (9,'Kunjungan Pengawas ke SMK Bintang Sembilan','<p>Pada Hari ini, Pengawas SMK Bandar Mataram berkesempatan berkunjung ke SMK Bintang Sembilan dalam rangka monitoring dan evaluasi kegiatan belajar mengajar di SMK&nbsp; Bintang Sembilan.</p>\r\n<p>Turut hadir dalam pertemuan ini Kepala SMK Bintang Sembilan dan seluruh jajaran dewan guru di SMK Bintang Sembilan.</p>','1657596931065.jpeg','yes'),(10,'Pelaksanaan UKK Siswa Siswi Kelas XII','<p>Dalam rangka ujian kelulusan para siswa siswi dilaksanakan UKK (Ujian Kompetensi Kejuruan) berupa ujian praktik langsung apa yang sudah dipelajari selama di SMK Bintang Sembilan.</p>\r\n<p>Pada kesempatan kali ini, UKK yang dilaksanakan&nbsp; adalah dari kejuruan TKJ. Ujiannya&nbsp; berupa instalasi mikrotik dan merakit PC.</p>','1657597156133.jpeg','yes'),(11,'Vaksinasi Keluarga Besar Yayasan Bintang Sembilan','<p>Hari ini, digelar vaksinasi serentak dosis pertama di aula SMK Bintang Sembilan.</p>\r\n<p>Para penerima vaksin terdiri dari siswa siswi SMK Bintang Sembilan, MA Maarif 07 Bandar Mataram dan&nbsp; MTs Darul Hiayah&nbsp; beserta santri santri Pondok Pesantern Darul Hidayah</p>','1657597307875.jpg','yes'),(12,'Kegiatan Belajar Mengajar SMK Bintang Sembilan','<p>Beginilah potret kegiatan belajar mengajar di kelas XII SMK Bintang Sembilan</p>','1657597409735.jpeg','no'),(13,'Apel Pagi SIswa Siswi SMK Bintang Sembilan','<p>Apel pagi dilaksanakan setiap hari oleh siswa siswi SMK Bitang Sembilan.</p>\r\n<p>Kegiatan ini bertujuan untuk mningkatkan semangat serta motivasi belajar para siswa siswi SMK Bintang Sembilan.</p>','1657597686882.jpeg','yes');
/*!40000 ALTER TABLE `berita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `galeri`
--

DROP TABLE IF EXISTS `galeri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `galeri` (
  `id_galeri` int NOT NULL AUTO_INCREMENT,
  `nama_galeri` varchar(50) DEFAULT NULL,
  `detail_galeri` varchar(255) DEFAULT NULL,
  `foto_galeri` varchar(50) DEFAULT NULL,
  `foto_galeri2` varchar(50) DEFAULT NULL,
  `foto_galeri3` varchar(50) DEFAULT NULL,
  `foto_galeri4` varchar(50) DEFAULT NULL,
  `foto_galeri5` varchar(50) DEFAULT NULL,
  `aktif_galeri` enum('yes','no') DEFAULT 'yes',
  PRIMARY KEY (`id_galeri`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `galeri`
--

LOCK TABLES `galeri` WRITE;
/*!40000 ALTER TABLE `galeri` DISABLE KEYS */;
INSERT INTO `galeri` VALUES (6,'Gedung SMK Bintang Sembilan','<p>Foto gedung Gedung SMK Bintang Sembilan</p>','1657597489823.jpg','','','','','yes'),(7,'Kegiatan Belajar Mengajar SMK Bintang Sembilan','<p>Foto Kegiatan Belajar Mengajar SMK Bintang Sembilan</p>','1657597527160.jpeg',NULL,NULL,NULL,NULL,'yes'),(8,'Dewan Guru SMK Bintang Sembilan','<p>Foto Dewan Guru SMK Bintang Sembilan</p>','1657597546090.jpeg',NULL,NULL,NULL,NULL,'yes'),(9,'Rapat Musyawarah Dewan Guru','<p>Foto Rapat Musyawarah Dewan Guru</p>','1657597796402.jpeg',NULL,NULL,NULL,NULL,'no');
/*!40000 ALTER TABLE `galeri` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kejuruan`
--

DROP TABLE IF EXISTS `kejuruan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kejuruan` (
  `id_kejuruan` int NOT NULL AUTO_INCREMENT,
  `nama_kejuruan` varchar(50) DEFAULT NULL,
  `detail_kejuruan` varchar(1500) DEFAULT NULL,
  PRIMARY KEY (`id_kejuruan`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kejuruan`
--

LOCK TABLES `kejuruan` WRITE;
/*!40000 ALTER TABLE `kejuruan` DISABLE KEYS */;
INSERT INTO `kejuruan` VALUES (1,'Kejuruan','<ul>\r\n<li>TKJ</li>\r\n<li>TKR</li>\r\n<li>Otomotif</li>\r\n<li>Multimedia</li>\r\n<li>Marketing</li>\r\n<li>Administrasi Perkantoran</li>\r\n</ul>'),(4,'Ekstrakulikuler','<ul class=\"i8Z77e\">\r\n<li class=\"TrT0Xe\">IPNU IPPNU</li>\r\n<li class=\"TrT0Xe\">Pendidikan Pramuka.</li>\r\n<li class=\"TrT0Xe\">Pasukan Pengibar Bendera (PASKIBRA)</li>\r\n<li class=\"TrT0Xe\">Palang Merah Pemuda (PMR)</li>\r\n<li class=\"TrT0Xe\">Pasukan Keamanan Sekolah (PKS)</li>\r\n</ul>');
/*!40000 ALTER TABLE `kejuruan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `komentar`
--

DROP TABLE IF EXISTS `komentar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `komentar` (
  `id_komentar` int NOT NULL AUTO_INCREMENT,
  `nama_komentar` varchar(50) DEFAULT NULL,
  `email_komentar` varchar(50) DEFAULT NULL,
  `detail_komentar` varchar(1500) DEFAULT NULL,
  `date_komentar` date DEFAULT NULL,
  `aktif_komentar` enum('yes','no') DEFAULT 'yes',
  `id_berita` int DEFAULT NULL,
  PRIMARY KEY (`id_komentar`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `komentar`
--

LOCK TABLES `komentar` WRITE;
/*!40000 ALTER TABLE `komentar` DISABLE KEYS */;
INSERT INTO `komentar` VALUES (3,'Kholikul Anwar','ipnuippnulamteng@gmail.com','Terus Maju SMK Bintang Sembilan ???','2022-07-14','yes',9),(4,'Rauf Asyifa','rauf1@gamil.com','Luar biasa, semoga semakin hebat!','2022-07-14','yes',9),(5,'Agus Mustakim','agusrio12@gmail.com','Sukses selalu siswa siswi SMK Bintang Sembilan ??','2022-07-14','yes',10),(6,'Ali Sofyan','alisofyan112@gamil.com','Salam sehat ??','2022-07-14','yes',11),(7,'Laila','laila@gmail.com','Panas panas tetap semangat','2022-07-14','yes',13);
/*!40000 ALTER TABLE `komentar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sambutan`
--

DROP TABLE IF EXISTS `sambutan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sambutan` (
  `id_sambutan` int NOT NULL AUTO_INCREMENT,
  `nama_sambutan` varchar(50) DEFAULT NULL,
  `detail_sambutan` varchar(1500) DEFAULT NULL,
  `foto_sambutan` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_sambutan`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sambutan`
--

LOCK TABLES `sambutan` WRITE;
/*!40000 ALTER TABLE `sambutan` DISABLE KEYS */;
INSERT INTO `sambutan` VALUES (18,'Sambutan Kepala Sekolah','<p>Mari bergabung bersama keluarga besar SMK Bintang Sembilan Bandar Mataram. Bersama SMK Bintang Sembilan raih kesuksesan. SMK Bisa,&nbsp; SMK Hebat!!</p>\r\n<h5>- Agus Mustakim, S.Pd.</h5>','1657596505344.jpg');
/*!40000 ALTER TABLE `sambutan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_user`
--

DROP TABLE IF EXISTS `table_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `table_user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) DEFAULT NULL,
  `user_email` varchar(50) DEFAULT NULL,
  `user_password` text,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_user`
--

LOCK TABLES `table_user` WRITE;
/*!40000 ALTER TABLE `table_user` DISABLE KEYS */;
INSERT INTO `table_user` VALUES (34,'Admin SMK','adminsmk@gmail.com','90d184c75a1cc922de7cbd61c9b63500874461dfcc326494fe0475ba9ed9ebf7b662c24c925560154ceb1cf10718e7b856b6c03832535321be434306694fac9a');
/*!40000 ALTER TABLE `table_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visimisi`
--

DROP TABLE IF EXISTS `visimisi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visimisi` (
  `id_visimisi` int NOT NULL AUTO_INCREMENT,
  `nama_visimisi` varchar(30) DEFAULT NULL,
  `detail_visimisi` varchar(1500) DEFAULT NULL,
  PRIMARY KEY (`id_visimisi`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visimisi`
--

LOCK TABLES `visimisi` WRITE;
/*!40000 ALTER TABLE `visimisi` DISABLE KEYS */;
INSERT INTO `visimisi` VALUES (1,'Visi','<p style=\"text-align: center;\">Menjadi Sekolah Menengah Kejuruan yang berkarakter, berbudaya, berwawasan lingkungan, menghasilkan insan yang bertaqwa, profesional, mampu berwirausaha dan berdaya saing global</p>'),(3,'Misi','<ul>\r\n<li>Menyelenggarakan kegiatan pendampingan keagamaan dalam rangka peningkatan ketaqwaan.</li>\r\n<li>Menyelenggarakan pembiasaan beribadah sesuai agama masing-masing.</li>\r\n<li>Menyelenggarakan pembelajaran dengan pendekatan teknologi informasi dan komunikasi.</li>\r\n<li>Mengembangkan kurikulum, metodologi pembelajaran dan sistem penilaian berbasis kompetensi sesuai dengan kebutuhan industri global.</li>\r\n<li>Menyelenggarakan sertifikasi kompetensi bagi siswa.</li>\r\n</ul>');
/*!40000 ALTER TABLE `visimisi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-27 22:12:16
