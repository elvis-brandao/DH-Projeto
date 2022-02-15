CREATE DATABASE  IF NOT EXISTS `game_traders` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `game_traders`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: game_traders
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `empresas_frete_venda`
--

DROP TABLE IF EXISTS `empresas_frete_venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresas_frete_venda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_empresa` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresas_frete_venda`
--

LOCK TABLES `empresas_frete_venda` WRITE;
/*!40000 ALTER TABLE `empresas_frete_venda` DISABLE KEYS */;
INSERT INTO `empresas_frete_venda` VALUES (1,'correios'),(2,'brasspress'),(3,'sequoia');
/*!40000 ALTER TABLE `empresas_frete_venda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS `enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rua` varchar(150) NOT NULL,
  `numero` varchar(5) DEFAULT 's/n',
  `complemento` varchar(50) DEFAULT NULL,
  `bairro` varchar(50) NOT NULL,
  `cep` varchar(9) NOT NULL,
  `referencia` varchar(100) DEFAULT NULL,
  `usuarios_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_enderecos_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_enderecos_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
INSERT INTO `enderecos` VALUES (1,'rua usu1','1','asdasasd','bairro1','111','djladjas',1),(2,'rua usu2','2','asdsadsa','bairro2','222','ldjlsja',2),(3,'rua usu3','3','bnzxcmz','bairro3','333','qwoeu',3);
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedbacks_vendedor`
--

DROP TABLE IF EXISTS `feedbacks_vendedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedbacks_vendedor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `feedback_msg` varchar(150) NOT NULL,
  `vendedores_id` int NOT NULL,
  `tipo_feedback_id` int NOT NULL,
  `usuarios_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_feedbacks_vendedores1_idx` (`vendedores_id`),
  KEY `fk_feedbacks_vendedor_tipo_feedback1_idx` (`tipo_feedback_id`),
  KEY `fk_feedbacks_vendedor_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_feedbacks_vendedor_tipo_feedback1` FOREIGN KEY (`tipo_feedback_id`) REFERENCES `tipos_feedback` (`id`),
  CONSTRAINT `fk_feedbacks_vendedor_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `fk_feedbacks_vendedores1` FOREIGN KEY (`vendedores_id`) REFERENCES `vendedores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedbacks_vendedor`
--

LOCK TABLES `feedbacks_vendedor` WRITE;
/*!40000 ALTER TABLE `feedbacks_vendedor` DISABLE KEYS */;
INSERT INTO `feedbacks_vendedor` VALUES (1,'ótimo vendedor, entrega no prazo, atendimento bom',1,1,1),(2,'vendedor ok, recomendo',2,3,1),(3,'não recomendo esse vendedor',3,2,1),(4,'vendedor excelente',2,1,2),(5,'não tive problemas com a entrega, mas demorou um pouco',3,3,2);
/*!40000 ALTER TABLE `feedbacks_vendedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fretes_venda`
--

DROP TABLE IF EXISTS `fretes_venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fretes_venda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `valor_frete` decimal(5,2) NOT NULL,
  `data_despacho_frete` date DEFAULT NULL,
  `data_entrega_frete` date DEFAULT NULL,
  `cod_rastreio_frete` text NOT NULL,
  `enderecos_id` int NOT NULL,
  `vendas_id` int NOT NULL,
  `tipos_frete_venda_id` int NOT NULL,
  `empresas_frete_venda_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_frete_venda_enderecos1_idx` (`enderecos_id`),
  KEY `fk_frete_venda_vendas1_idx` (`vendas_id`),
  KEY `fk_fretes_venda_tipos_frete_venda1_idx` (`tipos_frete_venda_id`),
  KEY `fk_fretes_venda_empresas_frete_venda1_idx` (`empresas_frete_venda_id`),
  CONSTRAINT `fk_frete_venda_enderecos1` FOREIGN KEY (`enderecos_id`) REFERENCES `enderecos` (`id`),
  CONSTRAINT `fk_frete_venda_vendas1` FOREIGN KEY (`vendas_id`) REFERENCES `vendas` (`id`),
  CONSTRAINT `fk_fretes_venda_empresas_frete_venda1` FOREIGN KEY (`empresas_frete_venda_id`) REFERENCES `empresas_frete_venda` (`id`),
  CONSTRAINT `fk_fretes_venda_tipos_frete_venda1` FOREIGN KEY (`tipos_frete_venda_id`) REFERENCES `tipos_frete_venda` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fretes_venda`
--

LOCK TABLES `fretes_venda` WRITE;
/*!40000 ALTER TABLE `fretes_venda` DISABLE KEYS */;
INSERT INTO `fretes_venda` VALUES (1,29.99,'2022-02-14','2022-02-14','asdsdaddasd',1,1,3,1);
/*!40000 ALTER TABLE `fretes_venda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagens_jogo`
--

DROP TABLE IF EXISTS `imagens_jogo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagens_jogo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagem_jogo` varchar(150) NOT NULL,
  `jogos_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_imagens_jogo_jogos1_idx` (`jogos_id`),
  CONSTRAINT `fk_imagens_jogo_jogos1` FOREIGN KEY (`jogos_id`) REFERENCES `jogos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagens_jogo`
--

LOCK TABLES `imagens_jogo` WRITE;
/*!40000 ALTER TABLE `imagens_jogo` DISABLE KEYS */;
INSERT INTO `imagens_jogo` VALUES (1,'img jogo 1',1),(2,'img jogo 2',2),(3,'img jogo 3',3),(4,'img jogo 4',4),(5,'img jogo 5',5),(6,'img jogo 6',6);
/*!40000 ALTER TABLE `imagens_jogo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jogos`
--

DROP TABLE IF EXISTS `jogos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jogos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_jogo` varchar(100) NOT NULL,
  `preco_jogo` decimal(5,2) NOT NULL,
  `novo_jogo` tinyint NOT NULL,
  `descricao_jogo` text NOT NULL,
  `qtde_jogo` int NOT NULL,
  `vendedores_id` int NOT NULL,
  `plataformas_jogo_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_jogos_vendedores1_idx` (`vendedores_id`),
  KEY `fk_jogos_plataformas_jogo1_idx` (`plataformas_jogo_id`),
  CONSTRAINT `fk_jogos_plataformas_jogo1` FOREIGN KEY (`plataformas_jogo_id`) REFERENCES `plataformas_jogo` (`id`),
  CONSTRAINT `fk_jogos_vendedores1` FOREIGN KEY (`vendedores_id`) REFERENCES `vendedores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogos`
--

LOCK TABLES `jogos` WRITE;
/*!40000 ALTER TABLE `jogos` DISABLE KEYS */;
INSERT INTO `jogos` VALUES (1,'jogo1 usu1',10.00,1,'vendo jogo 1',3,1,1),(2,'jogo2 usu1',15.00,0,'vendo jogo 2',1,1,2),(3,'jogo1 usu2',3.00,0,'vendo jogo 1',1,2,3),(4,'jogo2 usu2',50.00,1,'vendo jogo 2',20,2,4),(5,'jogo1 usu3',100.00,0,'vendo jogo 1',1,3,2),(6,'jogo2 usu3',49.99,1,'vendo jogo 2',14,3,1);
/*!40000 ALTER TABLE `jogos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensagens_thread`
--

DROP TABLE IF EXISTS `mensagens_thread`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensagens_thread` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mensagem_thread` varchar(150) NOT NULL,
  `threads_jogo_id` int NOT NULL,
  `usuarios_id` int NOT NULL,
  PRIMARY KEY (`id`,`usuarios_id`),
  KEY `fk_mensagens_thread_threads_jogo1_idx` (`threads_jogo_id`),
  KEY `fk_mensagens_thread_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_mensagens_thread_threads_jogo1` FOREIGN KEY (`threads_jogo_id`) REFERENCES `threads_jogo` (`id`),
  CONSTRAINT `fk_mensagens_thread_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensagens_thread`
--

LOCK TABLES `mensagens_thread` WRITE;
/*!40000 ALTER TABLE `mensagens_thread` DISABLE KEYS */;
INSERT INTO `mensagens_thread` VALUES (1,'você tem mais fotos do jogo',1,1),(2,'vou providenciar',1,2),(3,'quanto fica o frete para 12345-987',2,3),(4,'o disco está muito arranhado',3,5);
/*!40000 ALTER TABLE `mensagens_thread` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plataformas_jogo`
--

DROP TABLE IF EXISTS `plataformas_jogo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plataformas_jogo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `plataforma_jogo` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plataformas_jogo`
--

LOCK TABLES `plataformas_jogo` WRITE;
/*!40000 ALTER TABLE `plataformas_jogo` DISABLE KEYS */;
INSERT INTO `plataformas_jogo` VALUES (1,'xbox'),(2,'playstation'),(3,'wii'),(4,'pc');
/*!40000 ALTER TABLE `plataformas_jogo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status_venda`
--

DROP TABLE IF EXISTS `status_venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status_venda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status_venda` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_venda`
--

LOCK TABLES `status_venda` WRITE;
/*!40000 ALTER TABLE `status_venda` DISABLE KEYS */;
INSERT INTO `status_venda` VALUES (4,'carrinho'),(5,'em processamento'),(6,'aprovada'),(7,'finalizada');
/*!40000 ALTER TABLE `status_venda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `threads_jogo`
--

DROP TABLE IF EXISTS `threads_jogo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `threads_jogo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `jogos_id` int NOT NULL,
  `usuarios_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_threads_jogo_jogos1_idx` (`jogos_id`),
  KEY `fk_threads_jogo_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_threads_jogo_jogos1` FOREIGN KEY (`jogos_id`) REFERENCES `jogos` (`id`),
  CONSTRAINT `fk_threads_jogo_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `threads_jogo`
--

LOCK TABLES `threads_jogo` WRITE;
/*!40000 ALTER TABLE `threads_jogo` DISABLE KEYS */;
INSERT INTO `threads_jogo` VALUES (1,1,1),(2,2,3),(3,3,5);
/*!40000 ALTER TABLE `threads_jogo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_feedback`
--

DROP TABLE IF EXISTS `tipos_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo_feedback` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_feedback`
--

LOCK TABLES `tipos_feedback` WRITE;
/*!40000 ALTER TABLE `tipos_feedback` DISABLE KEYS */;
INSERT INTO `tipos_feedback` VALUES (1,'positivo'),(2,'negativo'),(3,'neutro');
/*!40000 ALTER TABLE `tipos_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_frete_venda`
--

DROP TABLE IF EXISTS `tipos_frete_venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_frete_venda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo_frete_venda` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_frete_venda`
--

LOCK TABLES `tipos_frete_venda` WRITE;
/*!40000 ALTER TABLE `tipos_frete_venda` DISABLE KEYS */;
INSERT INTO `tipos_frete_venda` VALUES (1,'transportadora'),(2,'pac'),(3,'sedex');
/*!40000 ALTER TABLE `tipos_frete_venda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_pagamento`
--

DROP TABLE IF EXISTS `tipos_pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_pagamento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo_pagamento` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_pagamento`
--

LOCK TABLES `tipos_pagamento` WRITE;
/*!40000 ALTER TABLE `tipos_pagamento` DISABLE KEYS */;
INSERT INTO `tipos_pagamento` VALUES (1,'à vista'),(2,'boleto'),(3,'cartão'),(4,'pix');
/*!40000 ALTER TABLE `tipos_pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(100) NOT NULL,
  `cpf_usuario` varchar(14) NOT NULL,
  `email_usuario` varchar(100) NOT NULL,
  `senha_usuario` varchar(60) NOT NULL,
  `telefone_usuario` varchar(20) DEFAULT NULL,
  `data_nasc_usuario` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf_usuario_UNIQUE` (`cpf_usuario`),
  UNIQUE KEY `email_usuario_UNIQUE` (`email_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'usuario1','11111','usu1@email.com','1234','111111','2000-01-01'),(2,'usuario2','22222','usu2@email.com','1234','222222','2000-02-02'),(3,'usuario3','33333','usu3@email.com','1234','333333','2000-03-03'),(4,'usuario4','44444','usu4@email.com','1234','444444','2000-04-04'),(5,'usuario5','55555','usu5@email.com','1234','555555','2000-05-05');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendas`
--

DROP TABLE IF EXISTS `vendas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_venda` datetime NOT NULL,
  `valor_venda` decimal(6,2) NOT NULL,
  `usuarios_id` int NOT NULL,
  `tipos_pagamento_id` int NOT NULL,
  `status_venda_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_vendas_usuarios1_idx` (`usuarios_id`),
  KEY `fk_vendas_tipos_pagamento1_idx` (`tipos_pagamento_id`),
  KEY `fk_vendas_status_venda1_idx` (`status_venda_id`),
  CONSTRAINT `fk_vendas_status_venda1` FOREIGN KEY (`status_venda_id`) REFERENCES `status_venda` (`id`),
  CONSTRAINT `fk_vendas_tipos_pagamento1` FOREIGN KEY (`tipos_pagamento_id`) REFERENCES `tipos_pagamento` (`id`),
  CONSTRAINT `fk_vendas_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendas`
--

LOCK TABLES `vendas` WRITE;
/*!40000 ALTER TABLE `vendas` DISABLE KEYS */;
INSERT INTO `vendas` VALUES (1,'2022-02-14 00:00:00',49.99,4,4,7),(2,'2022-01-02 00:00:00',80.00,2,2,5);
/*!40000 ALTER TABLE `vendas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendas_tem_jogos`
--

DROP TABLE IF EXISTS `vendas_tem_jogos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendas_tem_jogos` (
  `vendas_id` int NOT NULL,
  `jogos_id` int NOT NULL,
  `qtde_jogos` int NOT NULL,
  PRIMARY KEY (`vendas_id`,`jogos_id`),
  KEY `fk_vendas_has_jogos_jogos1_idx` (`jogos_id`),
  KEY `fk_vendas_has_jogos_vendas1_idx` (`vendas_id`),
  CONSTRAINT `fk_vendas_has_jogos_jogos1` FOREIGN KEY (`jogos_id`) REFERENCES `jogos` (`id`),
  CONSTRAINT `fk_vendas_has_jogos_vendas1` FOREIGN KEY (`vendas_id`) REFERENCES `vendas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendas_tem_jogos`
--

LOCK TABLES `vendas_tem_jogos` WRITE;
/*!40000 ALTER TABLE `vendas_tem_jogos` DISABLE KEYS */;
INSERT INTO `vendas_tem_jogos` VALUES (1,6,1),(2,2,2),(2,4,1);
/*!40000 ALTER TABLE `vendas_tem_jogos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendedores`
--

DROP TABLE IF EXISTS `vendedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendedores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reputacao_vendedor` decimal(2,1) unsigned zerofill DEFAULT NULL,
  `usuarios_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_vendedores_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_vendedores_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendedores`
--

LOCK TABLES `vendedores` WRITE;
/*!40000 ALTER TABLE `vendedores` DISABLE KEYS */;
INSERT INTO `vendedores` VALUES (1,5.0,2),(2,9.9,5),(3,2.0,1);
/*!40000 ALTER TABLE `vendedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'game_traders'
--

--
-- Dumping routines for database 'game_traders'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-14 20:48:29
