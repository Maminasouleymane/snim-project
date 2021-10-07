-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: snim
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `arret_imp`
--

DROP TABLE IF EXISTS `arret_imp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `arret_imp` (
  `date` varchar(20) NOT NULL,
  `groupe` varchar(45) DEFAULT NULL,
  `defaut` varchar(100) DEFAULT NULL,
  `code_defaut` varchar(30) DEFAULT NULL,
  `type_defaut` varchar(45) DEFAULT NULL,
  `section` varchar(50) DEFAULT NULL,
  `h_debut` varchar(20) DEFAULT NULL,
  `h_fin` varchar(20) DEFAULT NULL,
  `duree_hh_mm` varchar(20) DEFAULT NULL,
  `duree_heure` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `arret_imp`
--

LOCK TABLES `arret_imp` WRITE;
/*!40000 ALTER TABLE `arret_imp` DISABLE KEYS */;
INSERT INTO `arret_imp` VALUES ('02/09/2021','Aux.Com','jhkjhkjh','jlk','kljlk','lkjlk','07:30','07:30','jlkj','lkj'),('05/09/2021','GR7','testing','1213','DD','Apc','07:30','07:30','1213','1213'),('08/28/2021','GR8','nlknl','knlkn','lknlk','nlknl','07:30','07:30','99898','98900'),('08/31/2021','GRP.Secours','manque de gasoil','1213','AE','B','13:30','19:30','12:32','12:32'),('09/02/2021','GR8','test','cxvcvv','fdsfsdf','fdsfsdf','07:30','11:36','1213','12:32'),('2021-08-05','G3','changement injecteur','VST',NULL,'D','7:20','7:49','1.25','1,44'),('2021-12-11','G5','rev','RV',NULL,'D','D','D','D','D'),('2021-12-13','G5','rev','RV',NULL,'D','D','D','D','D'),('2021-12-23','G8','rev','RV',NULL,'D','D','D','D','D'),('2021-12-29','G8','rev','RV',NULL,'D','D','D','D','D'),('2202-11-11','date','rev','RV',NULL,'D','D','D','D','D'),('2202-12-11','date','rev','RV',NULL,'D','D','D','D','D'),('dfgf','fgdg','dfgfdg','dfgdfg',NULL,'fdgdfg','fdgdfg','gdfgdfg','cgcxvcv','xvbcvc'),('05/09/2021','GR7','Défaut de préssion huile (haute)','','1','E','11:36','11:36','12:32','13:32'),('05/09/2021','GR10','Module deporté','','','E','07:30','07:30','',''),('07/09/2021','GR10','kjkljlkj','lkl',';lk;l','k;k;','07:30','07:30','kjkjk','lkkj');
/*!40000 ALTER TABLE `arret_imp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auxilier`
--

DROP TABLE IF EXISTS `auxilier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auxilier` (
  `date` varchar(30) NOT NULL,
  `obb1` float DEFAULT NULL,
  `obb2` float DEFAULT NULL,
  `spedm` float DEFAULT NULL,
  PRIMARY KEY (`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auxilier`
--

LOCK TABLES `auxilier` WRITE;
/*!40000 ALTER TABLE `auxilier` DISABLE KEYS */;
INSERT INTO `auxilier` VALUES ('02/09/2021',12,21,41),('04/09/2021',121,312,23),('12/08/2021',0,0,211);
/*!40000 ALTER TABLE `auxilier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groupe`
--

DROP TABLE IF EXISTS `groupe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groupe` (
  `date` varchar(30) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `ep` float DEFAULT NULL,
  `hmarche` float DEFAULT NULL,
  `np` int DEFAULT NULL,
  `huile` int DEFAULT NULL,
  `comb` int DEFAULT NULL,
  `ap` float DEFAULT NULL,
  `ai` float DEFAULT NULL,
  PRIMARY KEY (`date`,`numero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groupe`
--

LOCK TABLES `groupe` WRITE;
/*!40000 ALTER TABLE `groupe` DISABLE KEYS */;
INSERT INTO `groupe` VALUES ('02/09/2021','EO',0,0,0,0,0,0,0),('02/09/2021','GR10',0,0,0,0,0,0,0),('02/09/2021','GR3',0,123,32,23,32,0,0),('02/09/2021','GR7',0,0,0,0,0,0,0),('02/09/2021','GR8',0,0,0,0,0,0,0),('04/09/2021','EO',212,0,0,0,0,0,0),('04/09/2021','GR10',21,0,0,0,0,0,0),('04/09/2021','GR3',12,234,212,342,21,1,4),('04/09/2021','GR7',22,123,123,32,231,1,21),('04/09/2021','GR8',12,21,1,1,0,0,0),('05/09/2021','EO',23,0,0,0,0,0,0),('05/09/2021','GR10',5,3,0,0,5000,0,0),('05/09/2021','GR3',62,24,0,200,15720,0,0),('05/09/2021','GR7',10,8,3,0,920,0,1),('05/09/2021','GR8',0,0,0,0,0,0,0),('08/09/2021','EO',0,0,0,0,0,0,0),('08/09/2021','GR10',0,0,0,0,0,0,0),('08/09/2021','GR3',0,0,0,0,0,0,0),('08/09/2021','GR7',57.84,22.9,1,0,12917,0,0),('08/09/2021','GR8',11.16,8,0,0,3748,0,0),('26/08/2021','GR10',0,0,0,0,0,0,0),('26/08/2021','GR3',0,0,0,0,0,0,0),('26/08/2021','GR7',57.84,22.9,1,0,12917,0,0),('26/08/2021','GR8',11.16,8,0,0,3784,0,0),('27/08/2021','EO',313111,0,0,0,0,0,0),('27/08/2021','GR10',0,0,0,0,0,0,0),('27/08/2021','GR3',121,3232,4343,0,0,0,0),('27/08/2021','GR7',0,0,0,0,0,0,0),('27/08/2021','GR8',0,0,0,0,0,0,0),('29/08/2021','EO',0,0,0,0,0,0,0),('29/08/2021','GR10',0,0,0,0,0,0,0),('29/08/2021','GR3',21,21,1,223,332,12,2),('29/08/2021','GR7',0,0,0,0,0,0,0),('29/08/2021','GR8',0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `groupe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operation`
--

DROP TABLE IF EXISTS `operation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operation` (
  `date` varchar(40) NOT NULL,
  `op1` float DEFAULT NULL,
  `op2` float DEFAULT NULL,
  `op3` float DEFAULT NULL,
  PRIMARY KEY (`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operation`
--

LOCK TABLES `operation` WRITE;
/*!40000 ALTER TABLE `operation` DISABLE KEYS */;
INSERT INTO `operation` VALUES ('02/09/2021',45,66,22),('04/09/2021',232,0,21),('12/08/2021',11111100000,23232,11133),('2020-22-11',111,121,0),('undefined',0,0,0);
/*!40000 ALTER TABLE `operation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `snim_somelec`
--

DROP TABLE IF EXISTS `snim_somelec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `snim_somelec` (
  `date` varchar(45) NOT NULL,
  `consomateur` varchar(35) NOT NULL,
  `ea_d` int DEFAULT NULL,
  `er_d` int DEFAULT NULL,
  `ea_f` int DEFAULT NULL,
  `er_f` int DEFAULT NULL,
  `ea` int DEFAULT NULL,
  `er` int DEFAULT NULL,
  PRIMARY KEY (`date`,`consomateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `snim_somelec`
--

LOCK TABLES `snim_somelec` WRITE;
/*!40000 ALTER TABLE `snim_somelec` DISABLE KEYS */;
INSERT INTO `snim_somelec` VALUES ('01/03/2021','snim',336754,370403,336961,370404,20700,100),('01/03/2021','somlec',704218,705082,704240,705204,2200,12200),('01/09/2021','somlec',76867,876878,877888,7888888,80102100,701201000),('02/03/2021','snim',336961,370404,337226,370411,26500,700),('02/03/2021','somlec',704240,705204,704322,705255,8200,5100),('02/09/2021','snim',231,3242,0,0,0,0),('02/09/2021','somlec',324,324,0,0,0,0),('03/03/2021','snim',337226,370411,337368,370417,14200,600),('03/03/2021','somlec',704322,705255,704514,705439,19200,18400),('03/09/2021','snim',657,67,4543,5654,5443,545),('03/09/2021','somlec',234,568,765,460,547,787),('04/03/2021','snim',337368,370417,337478,370417,11000,0),('04/03/2021','somlec',704514,705439,704693,705607,17900,16800),('05/03/2021','snim',337478,370417,337541,370417,6300,0),('05/03/2021','somlec',704693,705607,704829,705807,13600,20000),('05/09/2021','snim',12,12,21,12,122,21),('05/09/2021','somlec',12,32,23,23,23,23),('06/03/2021','snim',337541,370417,337604,370424,6300,700),('06/03/2021','somlec',704829,705807,705001,705947,17200,14000),('07/03/2021','snim',337604,370424,337652,370440,4800,1600),('07/03/2021','somlec',705001,705947,705213,705982,21200,3500),('08/03/2021','snim',337652,370440,337688,370459,3600,1900),('08/03/2021','somlec',705213,705982,705402,706049,18900,6700),('09/03/2021','snim',337688,370459,337925,370469,23700,1000),('09/03/2021','somlec',705402,706049,705447,706149,4500,10000),('10/03/2021','snim',337925,370469,338001,370476,7600,700),('10/03/2021','somlec',705447,706149,705621,706261,17400,11200),('11/03/2021','snim',338001,370476,338113,370476,11200,0),('11/03/2021','somlec',705621,706261,705690,706351,6900,9000),('12/03/2021','snim',338113,370476,338183,370477,7000,100),('12/03/2021','somlec',705690,706351,705900,706500,21000,14900),('13/03/2021','snim',338183,370477,338222,370477,3900,0),('13/03/2021','somlec',705900,706500,706141,706654,24100,15400),('14/03/2021','snim',338222,370477,338292,370477,7000,0),('14/03/2021','somlec',706141,706654,706224,706772,8300,11800),('15/03/2021','snim',338292,370477,338639,370487,34700,1000),('15/03/2021','somlec',706224,706772,706233,706811,900,3900),('16/03/2021','snim',338639,370487,338781,370497,14200,1000),('16/03/2021','somlec',706233,706811,706294,706882,6100,7100),('17/03/2021','snim',338781,370497,338893,370497,11200,0),('17/03/2021','somlec',706294,706882,706391,707037,9700,15500),('18/03/2021','snim',338893,370497,339282,370550,38900,5300),('18/03/2021','somlec',706391,707037,706441,707063,5000,2600),('19/03/2021','snim',339282,370550,339550,370562,26800,1200),('19/03/2021','somlec',706441,707063,706510,707164,6900,10100),('20/03/2021','snim',339550,370562,339649,370563,9900,100),('20/03/2021','somlec',706510,707164,706538,707234,2800,7000),('21/03/2021','snim',339649,370563,339677,370564,2800,100),('21/03/2021','somlec',706538,707234,706953,707493,41500,25900),('22/03/2021','snim',339677,370564,339788,370581,11100,1700),('22/03/2021','somlec',706953,707493,707040,707545,8700,5200),('23/03/2021','snim',339788,370581,339909,370609,12100,2800),('23/03/2021','somlec',707040,707545,707123,707596,8300,5100),('24/03/2021','snim',339909,370609,340105,370647,19600,3800),('24/03/2021','somlec',707123,707596,707205,707610,8200,1400),('25/03/2021','snim',340105,370647,340208,370651,10300,400),('25/03/2021','somlec',707205,707610,707342,707740,13700,13000),('26/03/2021','snim',340208,370651,340294,370652,8600,100),('26/03/2021','somlec',707342,707740,707696,707925,35400,18500),('27/03/2021','snim',340294,370652,340340,370652,4600,0),('27/03/2021','somlec',707696,707925,707952,708134,25600,20900),('28/03/2021','snim',340340,370652,340346,370652,600,0),('28/03/2021','somlec',707952,708134,708208,708323,25600,18900),('29/03/2021','snim',340346,370652,340462,370652,11600,0),('29/03/2021','somlec',708208,708323,708281,708486,7300,16300),('29/08/2021','snim',32123,3454,43543,45353,1142000,4189900),('29/08/2021','somlec',343,345,33453,4546,3311000,420100),('30/03/2021','snim',340462,370652,340606,370652,14400,0),('30/03/2021','somlec',708281,708486,708362,708686,8100,20000),('31/03/2021','snim',340606,370652,340774,370662,16800,1000);
/*!40000 ALTER TABLE `snim_somelec` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'snim'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-07 12:56:30
