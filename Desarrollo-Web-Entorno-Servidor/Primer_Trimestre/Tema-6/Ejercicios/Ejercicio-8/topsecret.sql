-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-12-2019 a las 20:27:36
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `topsecret`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `nombre` varchar(50) NOT NULL,
  `pApellido` varchar(50) NOT NULL,
  `sApellido` varchar(50) NOT NULL,
  `fNacimiento` date NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `cElectronico` varchar(50) NOT NULL,
  `contrasenya` varchar(100) NOT NULL,
  `rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`nombre`, `pApellido`, `sApellido`, `fNacimiento`, `usuario`, `cElectronico`, `contrasenya`, `rol`) VALUES
('alex', 'salcedo', 'santamaria', '2019-12-12', 'alex', 'alex@gmail.com', '$2y$10$4XUnLSiN3G2dFFBVRx8EE.XWxdt29A6m6cUs/eFVrNnyosaxB.Mja', 'user'),
('pau', 'llorens', 'martinez', '2019-12-17', 'pau21', 'pau9990@gmail.com', '$2y$10$UZC8U5wQHnKdtNdlYObdV.0I2rkuAWIdyG4ADAsJPT/.z.BP2yUaa', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
