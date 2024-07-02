-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: venta_ropa
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administradores` (
  `id_administradores` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_administradores`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
INSERT INTO `administradores` VALUES (1,'julioa@gmail.com','2020Julio*',1),(2,'luciano@gmail.com','2020Luciano*',1),(3,'dario@gmail.com','2020Dario*',1),(4,'gilberto@gmail.com','2020Gilberto*',1);
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colecciones`
--

DROP TABLE IF EXISTS `colecciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colecciones` (
  `id_colecciones` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `titulo` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `descripcion` text CHARACTER SET utf8mb3 COLLATE utf8_bin,
  `precio` decimal(10,2) DEFAULT NULL,
  `imagen_principal` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `imagen_secundaria` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `disponible` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_colecciones`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colecciones`
--

LOCK TABLES `colecciones` WRITE;
/*!40000 ALTER TABLE `colecciones` DISABLE KEYS */;
INSERT INTO `colecciones` VALUES (1,'Abrigos','Sybilla','Abrigo Mujer con cuello de solapas y bolsillos frontales',30000.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/abrigos1.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/abrigos1a.jpg',0),(2,'Abrigos','University Club','Abrigo Mujer con forro de sherpa y capucha',39990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/abrigos2.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/abrigos2a.jpg',1),(3,'Abrigos','Basement','Abrigo Mujer paño con botones',49900.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/abrigos3.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/abrigos3a.jpg',1),(4,'Abrigos','S. Cocci','Abrigo Mujer largo con solapa de muesca',56990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/abrigos4.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/abrigos4a.jpg',1),(5,'Abrigos','Newport','Abrigo Mujer de paño negro y botones',29990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/abrigos5.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/abrigos5a.jpg',1),(6,'Vestidos','Sybilla','Vestido Corto Mujer Ajustado de Hombros Descubiertos',14990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestido1.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestido1a.jpg',1),(7,'Vestidos','University Club','Vestido Midi Mujer con escote en V y tiritas',24990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestido2.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestido2a.jpg',1),(8,'Vestidos','Superdry','Vestido Mini Flare Mujer cuello alto y mangas largas',69900.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestido3.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestido3a.jpg',1),(9,'Vestidos','Vero Moda','Vestido Mujer cuello redondo y lazo en la cintura',29990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestido4.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestido4a.jpg',1),(10,'Vestidos','Basement','Vestido Midi Tencel Mujer con manga globo',29990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestido5.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestido5a.jpg',1),(11,'Vestidos de Fiestas','La Croixé','Vestido Largo Mujer con cuello cruzado',252990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestidofiesta1.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestidofiesta1a.jpg',1),(12,'Vestidos de Fiestas','Michael Kors','Vestido Mujer con cinturón del logo',269990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestidofiesta2.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestidofiesta2a.jpg',1),(13,'Vestidos de Fiestas','ML82','Vestido Largo Elegante de Gala con lentejuelas',109990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestidofiesta3.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestidofiesta3a.jpg',1),(14,'Vestidos de Fiestas','Lady P.','Vestido Midi Mujer de cuello halter y espalda escote pico',136990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestidofiesta4.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestidofiesta4a.jpg',1),(15,'Vestidos de Fiestas','Privilege','Vestido verde con diseno estampado',149990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestidofiesta5.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/vestidofiesta5a.jpg',1),(16,'Nueva Colección - Sweater','University Club','Sweater Mujer con alta capacidad calórica',129900.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/sueter1.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/sueter1a.jpg',1),(17,'Nueva Colección - Sweater','Basement','Sweater Mujer con mangas largas',16990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/sueter2.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/sueter2a.jpg',1),(18,'Nueva Colección - Sweater','Sybilla','Sweater Mujer de Lanilla con puño ancho',14990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/sueter3.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/sueter3a.jpg',1),(19,'Nueva Colección - Sweater','Apology','Sweater Mujer con Manga Globo',24900.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/sueter4.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/sueter4a.jpg',1),(20,'Nueva Colección - Sweater','S. Cocci','Sweater Mujer con Manga recta Tricolor',19990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/sueter5.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/sueter5a.jpg',1),(21,'Nueva Colección - Pantalones','Mossimo','Jeans Skinny Tiro Alto Mujer',24990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/pantalones1.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/pantalones1a.jpg',1),(22,'Nueva Colección - Pantalones','Basement','Jeans Cargo Tiro Alto Algodón',34990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/pantalones2.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/pantalones2a.jpg',1),(23,'Nueva Colección - Pantalones','Americanino','Jeans Skinny Tiro Medio Mujer',29990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/pantalones3.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/pantalones3a.jpg',1),(24,'Nueva Colección - Pantalones','Sybilla','Jeans Skinny Emily Tiro Medio',19990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/pantalones4.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/pantalones4a.jpg',1),(25,'Nueva Colección - Pantalones','University Club','Jeans Skinny Tiro Medio Mujer',19990.00,'https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/pantalones5.jpg','https://litolitolito.github.io/ventaRopaOnLine/img-nueva_coleccion/pantalones5a.jpg',1);
/*!40000 ALTER TABLE `colecciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_productos` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `titulo` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `descripcion` text CHARACTER SET utf8mb3 COLLATE utf8_bin,
  `precio` decimal(10,2) DEFAULT NULL,
  `imagen_principal` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `imagen_secundaria` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `disponible` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_productos`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Abrigos','Yashna','Saco Guards en mezcla de algodón de corte recto',1000.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/abrigo_1a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/abrigo_1b.jpg',0),(2,'Abrigos','Yaeko','Chaleco Guards de algodón de corte recto',490.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/abrigo_2a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/abrigo_2b.jpg',0),(3,'Abrigos','Yesseca','Saco de algodón de manga corta de corte recto',239.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/abrigo_3a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/abrigo_3b.jpg',1),(4,'Abrigos','Yancie','Chaqueta acolchada de tela sintética a ras de cuello',199.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/abrigo_4a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/abrigo_4b.jpg',1),(5,'Abrigos','Basic','Blazer de mujer regular fit',329.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/abrigo_5a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/abrigo_5b.jpg',1),(6,'Vestidos','Yahaloma','Vestido con manga 3/4 en tejido sintético de corte recto',199.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/vestidos_1a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/vestidos_1b.jpg',1),(7,'Vestidos','Yaryna','Vestido de manga corta en mezcla de lino de corte recto',179.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/vestidos_2a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/vestidos_2b.jpg',1),(8,'Vestidos','Yaryna','Vestido de manga corta en mezcla de lino de corte recto',179.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/vestidos_3a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/vestidos_3b.jpg',1),(9,'Vestidos','Yazenia','Vestido en tejido sintético de manga corta y corte recto',269.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/vestidos_4a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/vestidos_4b.jpg',1),(10,'Vestidos','Yashila','Vestido de algodón elastizado de manga corta y corte recto',149.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/vestidos_5a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/vestidos_5b.jpg',1),(11,'Vestidos','Yazenia','Vestido en tejido sintético de manga corta y corte recto',269.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/vestidos_6a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/vestidos_6b.jpg',0),(12,'Sudadera','Yancee','Buzo de mujer de corte recto',189.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/sudadera_1a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/sudadera_1b.jpg',1),(13,'Sudadera','Yalena','Buzo de mujer de corte recto',149.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/sudadera_2a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/sudadera_2b.jpg',1),(14,'Sudadera','Yancee','Buzo de mujer de corte recto',189.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/sudadera_3a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/sudadera_3b.jpg',1),(15,'Sudadera','Yalena','Buzo de mujer de corte recto',149.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/sudadera_4a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/sudadera_4b.jpg',1),(16,'Sudadera','Yasmani','Buzo de algodón elastizado de corte recto',159.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/sudadera_5a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/sudadera_5b.jpg',1),(17,'Camisas','Yarona','Camisa de mujer de corte recto',159.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/camisa_1b.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/camisa_1a.jpg',1),(18,'Camisas','Yarona','Camisa de mujer de corte recto',159.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/camisa_2a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/camisa_2b.jpg',1),(19,'Camisas','Yakira','Camisa de corte recto de algodón elastizado',145.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/camisa_3a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/camisa_3b.jpg',1),(20,'Camisas','Yasuko','Camisa de algodón de corte recto',129.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/camisa_4a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/camisa_4b.jpg',1),(21,'Camisas','Yette','Camisa en mezcla de lino de corte recto',149.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/camisa_5a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/camisa_5b.jpg',1),(22,'Camisas','Yasamin','Blusa de algodón de corte recto',109.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/camisa_6a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/camisa_6b.jpg',1),(23,'Pantalones','Yevette','Pantalón cargo en tejido ecológico y corte recto',189.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/pantalones_1a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/pantalones_1b.jpg',1),(24,'Pantalones','Yessika','Pantalón ajustado de algodón elastizado y corte recto',149.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/pantalones_2a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/pantalones_2b.jpg',1),(25,'Pantalones','Yeshodhana','Pantalón palazzo de tejido sintético y corte recto',169.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/pantalones_3a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/pantalones_3b.jpg',1),(26,'Pantalones','Yevette','Pantalón de tejido ecológico y corte recto',155.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/pantalones_4a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/pantalones_4b.jpg',1),(27,'Pantalones','Yolane','Bermuda de algodón de corte recto',139.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/pantalones_5a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/pantalones_5b.jpg',1),(28,'Pantalones','Yasmean','Bermuda en mezcla de lino de corte recto',149.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/pantalones_6a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/pantalones_6b.jpg',0),(30,'Abrigos','Basic','Blazer de mujer regular fit',329.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/abrigo_5a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/abrigo_5b.jpg',1),(32,'Abrigos','Sybilla','sdklfjklsd sdajfñlsdajfñ ñsdlafkñ',10.00,'https://litolitolito.github.io/ventaRopaOnLine/imagenes/abrigo_5a.jpg','https://litolitolito.github.io/ventaRopaOnLine/imagenes/abrigo_5b.jpg',1);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuarios` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `apellido` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `dni` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `provincia` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `rating` int NOT NULL,
  `comentarios` text CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `acepto_terminos` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_usuarios`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Juan Agustín','Pérez','12345678','Buenos Aires','juan.perez@example.com','perez12345*',5,'Me gusta esta tienda',1),(2,'Julio Ceferino','Acuña','17581419','Salta','saltagaceta@yahoo.com.ar','20205701',2,'Fue la mejor compra',1),(11,'Julio Ceferino','Acuña','21542110','Jujuy','jujuy@yahoo.com.ar','jujuyjuyd5',5,'kjh',1),(12,'Julio Ceferino','Acuña','21550201','Santa Cruz','santacruz@yahoo.com.ar','santacruz1',5,'tryr',1),(13,'Julio Ceferino','Acuña','21542110','Misiones','misiones@yahoo.com.ar','misiones1',5,'hkjkhg',1),(14,'Julio Ceferino','Acuña','21550201','Salta','wwwwwww@yahoo.com.ar','wwww111',5,'dlksjflksadj',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `id_ventas` int NOT NULL AUTO_INCREMENT,
  `id_usuarios` int NOT NULL,
  `detalle_venta` json NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `fecha_venta` date NOT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_ventas`),
  KEY `id_usuarios` (`id_usuarios`),
  CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`id_usuarios`) REFERENCES `usuarios` (`id_usuarios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_colecciones`
--

DROP TABLE IF EXISTS `ventas_colecciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas_colecciones` (
  `id_ventas` int NOT NULL,
  `id_colecciones` int NOT NULL,
  `cantidad` int NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_ventas`,`id_colecciones`),
  KEY `id_colecciones` (`id_colecciones`),
  CONSTRAINT `ventas_colecciones_ibfk_1` FOREIGN KEY (`id_ventas`) REFERENCES `ventas` (`id_ventas`),
  CONSTRAINT `ventas_colecciones_ibfk_2` FOREIGN KEY (`id_colecciones`) REFERENCES `colecciones` (`id_colecciones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_colecciones`
--

LOCK TABLES `ventas_colecciones` WRITE;
/*!40000 ALTER TABLE `ventas_colecciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas_colecciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_productos`
--

DROP TABLE IF EXISTS `ventas_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas_productos` (
  `id_ventas` int NOT NULL,
  `id_productos` int NOT NULL,
  `cantidad` int NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_ventas`,`id_productos`),
  KEY `id_productos` (`id_productos`),
  CONSTRAINT `ventas_productos_ibfk_1` FOREIGN KEY (`id_ventas`) REFERENCES `ventas` (`id_ventas`),
  CONSTRAINT `ventas_productos_ibfk_2` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id_productos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_productos`
--

LOCK TABLES `ventas_productos` WRITE;
/*!40000 ALTER TABLE `ventas_productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas_productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-01 21:44:20
