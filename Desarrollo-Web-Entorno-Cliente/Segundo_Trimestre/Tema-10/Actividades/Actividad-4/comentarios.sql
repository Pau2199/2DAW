-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 27-10-2019 a las 14:00:10
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `comentarios`
--
CREATE DATABASE IF NOT EXISTS `comentarios` DEFAULT CHARACTER SET utf16 COLLATE utf16_general_ci;
USE `comentarios`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `comentario` mediumtext NOT NULL,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `nombre`, `email`, `comentario`, `fecha`) VALUES
(1, 'Marta Robles', 'marta@mail.com', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorum blanditiis qui, nihil asperiores adipisci laboriosam earum voluptatibus dolores distinctio recusandae esse ut iure repellat consequuntur praesentium hic deleniti ipsum.', '2019-10-01 18:23:00'),
(2, 'Marcos Gil', 'marcos@mail.com', 'Maxime laboriosam atque, quia! Eum mollitia dolor, sunt corporis hic ullam sint culpa ipsam, eos voluptate atque quasi eligendi nostrum ipsum odio est optio? Nesciunt dignissimos ad magnam architecto ratione.', '2019-10-08 10:37:40'),
(3, 'Joan Martínez', 'joan@mail.com', 'Quis ipsa illo totam, velit dolore quos, accusantium ducimus officiis praesentium omnis dolor dicta tenetur, voluptatibus, accusamus maiores consequatur hic cumque. Ipsam, explicabo hic doloribus fugiat cupiditate animi obcaecati soluta.', '2019-10-09 09:03:05'),
(4, 'Susana López', 'susana@mail.com', 'Delectus debitis, ducimus! Nesciunt dolore aperiam corrupti a molestias architecto natus excepturi, repudiandae quaerat! Vel minima magni, impedit dolorum accusantium nesciunt ab, aliquid tempora architecto in, reiciendis quos fugit at.', '2019-10-09 11:40:55');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
GRANT USAGE ON *.* TO 'comentarios'@'localhost' IDENTIFIED BY PASSWORD '*4ED98F3253A847892DBE0011B8AEF48E68ECE696';

GRANT ALL PRIVILEGES ON `comentarios`.* TO 'comentarios'@'localhost';