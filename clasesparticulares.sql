-- MySQL dump 10.13  Distrib 8.1.0, for Linux (x86_64)
--
-- Host: localhost    Database: clasesparticulares
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `opiniones`
--

DROP TABLE IF EXISTS `opiniones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `opiniones` (
  `id_op` int NOT NULL AUTO_INCREMENT,
  `opinion` text NOT NULL,
  `autor` varchar(100) NOT NULL,
  `zona` varchar(100) NOT NULL,
  PRIMARY KEY (`id_op`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `opiniones`
--

LOCK TABLES `opiniones` WRITE;
/*!40000 ALTER TABLE `opiniones` DISABLE KEYS */;
INSERT INTO `opiniones` VALUES (1,'Quiero agradecer al profesor Juan Cruz, ya que Nicolás logró aprobar matemáticas. Se compromete al máximo con el objetivo y se preocupa por que aprenda.','Graciela','Rosario'),(2,'Lo recomiendo! Llevé a mi hijo de 11 años porque tenía problemas en matemáticas y supo explicarle. Gracias por tu gran paciencia Juan!!!','Nicolás','Colegiales'),(3,'La primera vez que lo contacté casi no tenía tiempo de preparación y no aprobé, cosa que me dijo de entrada desde su sinceridad. Seguimos trabajando para la siguiente instancia y me fue genial. Sos un genio!','Antonella','San Telmo'),(4,'A mis hijos siempre les costó mucho matemática, probé con muchos profes e igual les costaba. Juan los acompañó durante todo este año y no tuvieron que recuperar nada. Muchas gracias Juan.','Fabiola','Caballito'),(5,'La verdad que su clase virtual es un espectáculo, se le entiende bárbaro y es todo muy fluido. Logra que uno llegue a los resultados por sus propios medios...','Ezequiel','Neuquén'),(6,'A pesar de la distancia, logra hacerse entender perfecto y las clases se te pasan volando. Muchas gracias Juan, pensé que no iba a poder, y por acá me resultaba re difícil conseguir profe.','Valeria','Corrientes'),(7,'Excelente profesor, es muy claro y práctico a la hora de enseñar y tiene buen método para captar la atención del alumno.','Ariel','Flores'),(8,'Soy una persona grande, tengo mas de 50 años y hacía una eternidad que no practicaba la matemática, tenía mucho miedo. Gracias por tu infinita paciencia, es increíble el don que tenés para explicar.','Alejandra','Villa Urquiza'),(9,'No te voy a decir que ahora me gusta matemática, pero la verdad que al menos no me molesta ir a tus clases jaja, sos groso Juan.','Hernán','Saavedra'),(10,'Es exigente, por momentos molesta que te corrija hasta el mas mínimo detalle, pero la verdad es que todo ese esfuerzo que conlleva su proceso luego se ve en las notas.','Matías','Palermo');
/*!40000 ALTER TABLE `opiniones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (3,'admin@opiniones.com','e10adc3949ba59abbe56e057f20f883e');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-14 16:58:01
