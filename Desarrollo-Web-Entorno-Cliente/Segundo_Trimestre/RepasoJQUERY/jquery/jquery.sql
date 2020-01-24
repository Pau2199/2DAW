-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-01-2020 a las 00:37:37
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `jquery`
--
CREATE DATABASE IF NOT EXISTS `jquery` DEFAULT CHARACTER SET utf16 COLLATE utf16_general_ci;
USE `jquery`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

DROP TABLE IF EXISTS `actividades`;
CREATE TABLE `actividades` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`id`, `nombre`, `fecha`) VALUES
(1, 'Act1', '2020-01-04'),
(2, 'Act2', '2020-01-05'),
(3, 'Act3', '2020-01-06'),
(4, 'Act4', '2020-01-07'),
(5, 'Act5', '2020-01-08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
CREATE TABLE `alumnos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido1` varchar(30) NOT NULL,
  `apellido2` varchar(30) NOT NULL,
  `dni` varchar(9) NOT NULL,
  `fechanacimiento` date NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id`, `nombre`, `apellido1`, `apellido2`, `dni`, `fechanacimiento`, `email`, `telefono`) VALUES
(1, 'Peter', 'Kiendl', 'Hearne', '89443736A', '1983-12-24', 'phearne0@is.gd', '658870592'),
(2, 'Dora', 'Sheehan', 'Fireman', '18394408B', '1986-10-13', 'dfireman1@usda.gov', '394999606'),
(3, 'Jodie', 'Helleker', 'Ridpath', '68056103C', '1980-05-19', 'jridpath2@jiathis.com', '757757528'),
(4, 'Josefa', 'Crow', 'Winchcum', '18831263D', '1980-05-26', 'jwinchcum3@narod.ru', '990460081'),
(5, 'Aymer', 'Plampeyn', 'Cossentine', '67378488E', '1984-02-22', 'acossentine4@yale.edu', '868753809'),
(6, 'Andre', 'Stiling', 'Minkin', '72079466F', '1997-06-28', 'aminkin5@hibu.com', '541394564'),
(7, 'Albina', 'Erdis', 'Lockhart', '39638559G', '1999-04-27', 'alockhart6@networkadvertising.org', '654212633'),
(8, 'Margery', 'Maystone', 'Haddrill', '88871436H', '1982-04-02', 'mhaddrill7@live.com', '895438715'),
(9, 'Garik', 'Chatain', 'Ewart', '87873935I', '1988-09-09', 'gewart8@livejournal.com', '888829246'),
(10, 'Louis', 'Landell', 'Mulqueen', '37232466J', '1995-03-28', 'lmulqueen9@com.com', '189330885');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notas`
--

DROP TABLE IF EXISTS `notas`;
CREATE TABLE `notas` (
  `actividad` int(11) NOT NULL,
  `alumno` int(11) NOT NULL,
  `nota` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Volcado de datos para la tabla `notas`
--

INSERT INTO `notas` (`actividad`, `alumno`, `nota`) VALUES
(1, 1, '0'),
(1, 2, '0'),
(1, 3, '0'),
(1, 4, '0'),
(1, 5, '0'),
(1, 6, '0'),
(1, 7, '0'),
(1, 8, '0'),
(1, 9, '0'),
(1, 10, '0'),
(2, 1, '0'),
(2, 2, '0'),
(2, 3, '0'),
(2, 4, '0'),
(2, 5, '0'),
(2, 6, '0'),
(2, 7, '0'),
(2, 8, '0'),
(2, 9, '0'),
(2, 10, '0'),
(3, 1, '0'),
(3, 2, '0'),
(3, 3, '0'),
(3, 4, '0'),
(3, 5, '0'),
(3, 6, '0'),
(3, 7, '0'),
(3, 8, '0'),
(3, 9, '0'),
(3, 10, '0'),
(4, 1, '0'),
(4, 2, '0'),
(4, 3, '0'),
(4, 4, '0'),
(4, 5, '0'),
(4, 6, '0'),
(4, 7, '0'),
(4, 8, '0'),
(4, 9, '0'),
(4, 10, '0'),
(5, 1, '0'),
(5, 2, '0'),
(5, 3, '0'),
(5, 4, '0'),
(5, 5, '0'),
(5, 6, '0'),
(5, 7, '0'),
(5, 8, '0'),
(5, 9, '0'),
(5, 10, '0');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `notas`
--
ALTER TABLE `notas`
  ADD PRIMARY KEY (`actividad`,`alumno`),
  ADD KEY `actividad` (`alumno`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `notas`
--
ALTER TABLE `notas`
  ADD CONSTRAINT `notas_ibfk_1` FOREIGN KEY (`actividad`) REFERENCES `actividades` (`id`),
  ADD CONSTRAINT `notas_ibfk_2` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

GRANT USAGE ON *.* TO 'jquery'@'localhost' IDENTIFIED BY PASSWORD '*DD8A11E135D7BC246CE8D6B7B7BF89100AFEE6D1';

GRANT ALL PRIVILEGES ON `jquery`.* TO 'jquery'@'localhost' WITH GRANT OPTION;
