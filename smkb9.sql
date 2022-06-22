-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2022 at 03:04 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smkb9`
--

-- --------------------------------------------------------

--
-- Table structure for table `berita`
--

CREATE TABLE `berita` (
  `id_berita` int(10) NOT NULL,
  `nama_berita` varchar(50) NOT NULL,
  `detail_berita` varchar(1500) NOT NULL,
  `foto_berita` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `berita`
--

INSERT INTO `berita` (`id_berita`, `nama_berita`, `detail_berita`, `foto_berita`) VALUES
(9, 'Berita Lagih', '<p>hihihuhu hihi huhu hihi huhu</p>', '1655730597460.png');

-- --------------------------------------------------------

--
-- Table structure for table `galeri`
--

CREATE TABLE `galeri` (
  `id_galeri` int(10) NOT NULL,
  `nama_galeri` varchar(50) NOT NULL,
  `detail_galeri` varchar(255) NOT NULL,
  `foto_galeri` varchar(50) NOT NULL,
  `foto_galeri2` varchar(50) NOT NULL,
  `foto_galeri3` varchar(50) NOT NULL,
  `foto_galeri4` varchar(50) NOT NULL,
  `foto_galeri5` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `galeri`
--

INSERT INTO `galeri` (`id_galeri`, `nama_galeri`, `detail_galeri`, `foto_galeri`, `foto_galeri2`, `foto_galeri3`, `foto_galeri4`, `foto_galeri5`) VALUES
(6, 'Galeri 2', '<p>contoh aja tapi boong</p>', '1655730727830.png', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `kejuruan`
--

CREATE TABLE `kejuruan` (
  `id_kejuruan` int(10) NOT NULL,
  `nama_kejuruan` varchar(50) NOT NULL,
  `detail_kejuruan` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kejuruan`
--

INSERT INTO `kejuruan` (`id_kejuruan`, `nama_kejuruan`, `detail_kejuruan`) VALUES
(1, 'Kejuruan', '<ul>\r\n<li>TKJ</li>\r\n<li>TKR</li>\r\n<li>Otomotif</li>\r\n<li>Multimedia</li>\r\n<li>Marketing</li>\r\n<li>Administrasi Perkantoran</li>\r\n</ul>'),
(4, 'Ekstrakulikuler', '<ul class=\"i8Z77e\">\r\n<li class=\"TrT0Xe\">Pendidikan Pramuka.</li>\r\n<li class=\"TrT0Xe\">Pasukan Pengibar Bendera (PASKIBRA)</li>\r\n<li class=\"TrT0Xe\">Palang Merah Pemuda (PMR)</li>\r\n<li class=\"TrT0Xe\">Pasukan Keamanan Sekolah (PKS)</li>\r\n<li class=\"TrT0Xe\">Ge');

-- --------------------------------------------------------

--
-- Table structure for table `sambutan`
--

CREATE TABLE `sambutan` (
  `id_sambutan` int(10) NOT NULL,
  `nama_sambutan` varchar(50) NOT NULL,
  `detail_sambutan` varchar(500) NOT NULL,
  `foto_sambutan` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sambutan`
--

INSERT INTO `sambutan` (`id_sambutan`, `nama_sambutan`, `detail_sambutan`, `foto_sambutan`) VALUES
(18, 'Sambutan Kepala Sekolah', '<p>Perlu Anda ingat, wahai pemuda Ansor dan Banser, sesungguhnya hidup adalah akidah dan perjuangan! Hidup adalah bagaimana mempertahankan akidah. Akidah Aswaja tidak boleh dirongrong oleh akidah lain</p>', '1655730909393.png');

-- --------------------------------------------------------

--
-- Table structure for table `table_user`
--

CREATE TABLE `table_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `user_email` varchar(50) DEFAULT NULL,
  `user_password` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table_user`
--

INSERT INTO `table_user` (`user_id`, `user_name`, `user_email`, `user_password`) VALUES
(26, 'agung', 'agung@gmail', '3627909a29c31381a071ec27f7c9ca97726182aed29a7ddd2e54353322cfb30abb9e3a6df2ac2c20fe23436311d678564d0c8d305930575f60e2d3d048184d79'),
(30, 'saya', 'saya@gmail', '1245943fe049ef1463c3a0cfcfe50ba59c6593afd2a18aa764522fd88d32e163857e1479ad8c07997db7e9647521717f89a339762d1f90193180dec973aa39ea');

-- --------------------------------------------------------

--
-- Table structure for table `visimisi`
--

CREATE TABLE `visimisi` (
  `id_visimisi` int(10) NOT NULL,
  `nama_visimisi` varchar(30) NOT NULL,
  `detail_visimisi` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `visimisi`
--

INSERT INTO `visimisi` (`id_visimisi`, `nama_visimisi`, `detail_visimisi`) VALUES
(1, 'Visi', '<ul>\r\n<li>Mencari Ilmu</li>\r\n<li>Bermanfaat</li>\r\n<li>Mencintai</li>\r\n</ul>'),
(3, 'Misi', '<ul>\r\n<li>Membentuk jiwa berkarakter</li>\r\n<li>Menyebarkan Ilmu</li>\r\n<li>Mencintai Ilmu</li>\r\n</ul>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `berita`
--
ALTER TABLE `berita`
  ADD PRIMARY KEY (`id_berita`);

--
-- Indexes for table `galeri`
--
ALTER TABLE `galeri`
  ADD PRIMARY KEY (`id_galeri`);

--
-- Indexes for table `kejuruan`
--
ALTER TABLE `kejuruan`
  ADD PRIMARY KEY (`id_kejuruan`);

--
-- Indexes for table `sambutan`
--
ALTER TABLE `sambutan`
  ADD PRIMARY KEY (`id_sambutan`);

--
-- Indexes for table `table_user`
--
ALTER TABLE `table_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `visimisi`
--
ALTER TABLE `visimisi`
  ADD PRIMARY KEY (`id_visimisi`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `berita`
--
ALTER TABLE `berita`
  MODIFY `id_berita` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `galeri`
--
ALTER TABLE `galeri`
  MODIFY `id_galeri` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `kejuruan`
--
ALTER TABLE `kejuruan`
  MODIFY `id_kejuruan` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sambutan`
--
ALTER TABLE `sambutan`
  MODIFY `id_sambutan` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `table_user`
--
ALTER TABLE `table_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `visimisi`
--
ALTER TABLE `visimisi`
  MODIFY `id_visimisi` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
