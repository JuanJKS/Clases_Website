-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-11-2022 a las 22:49:13
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clasesparticulares`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opiniones`
--

DROP TABLE IF EXISTS `opiniones`;
CREATE TABLE IF NOT EXISTS `opiniones` (
  `id_op` int(11) NOT NULL AUTO_INCREMENT,
  `opinion` text NOT NULL,
  `autor` varchar(100) NOT NULL,
  `zona` varchar(100) NOT NULL,
  PRIMARY KEY (`id_op`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `opiniones`
--

INSERT INTO `opiniones` (`id_op`, `opinion`, `autor`, `zona`) VALUES
(1, 'Quiero agradecer al profesor Juan Cruz, ya que Nicolás logró aprobar matemáticas. Se compromete al máximo con el objetivo y se preocupa por que aprenda.', 'Graciela', 'Rosario'),
(2, 'Lo recomiendo! Llevé a mi hijo de 11 años porque tenía problemas en matemáticas y supo explicarle. Gracias por tu gran paciencia Juan!!!', 'Nicolás', 'Colegiales'),
(3, 'La primera vez que lo contacté casi no tenía tiempo de preparación y no aprobé, cosa que me dijo de entrada desde su sinceridad. Seguimos trabajando para la siguiente instancia y me fue genial. Sos un genio!', 'Antonella', 'San Telmo'),
(4, 'A mis hijos siempre les costó mucho matemática, probé con muchos profes e igual les costaba. Juan los acompañó durante todo este año y no tuvieron que recuperar nada. Muchas gracias Juan.', 'Fabiola', 'Caballito'),
(5, 'La verdad que su clase virtual es un espectáculo, se le entiende bárbaro y es todo muy fluido. Logra que uno llegue a los resultados por sus propios medios...', 'Ezequiel', 'Neuquén'),
(6, 'A pesar de la distancia, logra hacerse entender perfecto y las clases se te pasan volando. Muchas gracias Juan, pensé que no iba a poder, y por acá me resultaba re difícil conseguir profe.', 'Valeria', 'Corrientes'),
(7, 'Excelente profesor, es muy claro y práctico a la hora de enseñar y tiene buen método para captar la atención del alumno.', 'Ariel', 'Flores'),
(8, 'Soy una persona grande, tengo mas de 50 años y hacía una eternidad que no practicaba la matemática, tenía mucho miedo. Gracias por tu infinita paciencia, es increíble el don que tenés para explicar.', 'Alejandra', 'Villa Urquiza'),
(9, 'No te voy a decir que ahora me gusta matemática, pero la verdad que al menos no me molesta ir a tus clases jaja, sos groso Juan.', 'Hernán', 'Saavedra'),
(10, 'Es exigente, por momentos molesta que te corrija hasta el mas mínimo detalle, pero la verdad es que todo ese esfuerzo que conlleva su proceso luego se ve en las notas.', 'Matías', 'Palermo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'bo_juancruz@hotmail.com', '80760190f7bce8aa7ab45117f1a15b07');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
