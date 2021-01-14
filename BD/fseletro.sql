-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13-Jan-2021 às 19:25
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `categorias`
--

INSERT INTO `categorias` (`id`, `nome`) VALUES
(1, 'microondas'),
(2, 'fogao'),
(3, 'lavaRoupas'),
(4, 'LavaLoucas'),
(5, 'geladeira');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `mensagem` varchar(300) NOT NULL,
  `data_cadastro` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `mensagem`, `data_cadastro`) VALUES
(75, 'Patricia Torres', 'Olá, tudo bem?', '2020-11-03 16:43:24'),
(76, 'Patricia Torres', '12', '2020-11-03 20:04:47');

-- --------------------------------------------------------

--
-- Estrutura da tabela `loja`
--

CREATE TABLE `loja` (
  `id` int(11) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) DEFAULT NULL,
  `telefone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `loja`
--

INSERT INTO `loja` (`id`, `cidade`, `endereco`, `complemento`, `bairro`, `telefone`) VALUES
(1, 'Rio de Janeiro', 'Avenida Presidente Vargas, 5000', '10 º andar', 'Centro', '(21) 3333-3333'),
(2, 'São Paulo', 'Avenida Paulista, 985', '3 º andar', 'Jardins', '(11) 4444-4444'),
(3, 'Santa Catarina', 'Rua Major Ávila, 370', '-', 'Vila Mariana', '(47) 5555-5555');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedidos` int(11) NOT NULL,
  `categorias_fk` int(11) DEFAULT NULL,
  `nome_cliente` varchar(45) COLLATE utf8_bin NOT NULL,
  `endereco` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `telefone` varchar(14) COLLATE utf8_bin DEFAULT NULL,
  `valor_unitario` float(8,2) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `valor_total` float(8,2) DEFAULT NULL,
  `produto_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`id_pedidos`, `categorias_fk`, `nome_cliente`, `endereco`, `telefone`, `valor_unitario`, `quantidade`, `valor_total`, `produto_fk`) VALUES
(8, 1, 'Maria', 'Rua testes', '11111111', 122.00, 5, 150.00, 6),
(9, 4, 'Patricia', 'Rua das Flores', '123456', 12.00, 50, 500.00, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `descricao` varchar(500) DEFAULT NULL,
  `preco` float DEFAULT NULL,
  `preco_venda` float DEFAULT NULL,
  `imagem` varchar(400) DEFAULT NULL,
  `nome_produto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `categoria`, `descricao`, `preco`, `preco_venda`, `imagem`, `nome_produto`) VALUES
(1, 'geladeira', 'Geladeira Frost Free Brastemp Side Inverse 540 Litros', 6389, 5019, 'https://raw.githubusercontent.com/PatriciaTorresGraciano/Full-Stack-Eletro/master/img/produtos/geladeira_brastemp.jpg', 'geladeira'),
(2, 'geladeira', 'Geladeira Frost Free Brastemp Branca 375 Litros', 2068.68, 1910.9, 'https://raw.githubusercontent.com/PatriciaTorresGraciano/Full-Stack-Eletro/master/img/produtos/geladeira_brastemp_branca.jpg', 'geladeira'),
(3, 'geladeira', 'Geladeira Frost Free Consul Prata 340 Litros', 2199.9, 2069, 'https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/geladeira_consul.jpg?raw=true', 'geladeira'),
(4, 'fogao', 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', 1209.99, 1129, 'https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/fogao_consul.jpg?raw=true', 'fogao'),
(5, 'fogao', 'Fogão de Piso 4 Bocas Atlas Monaco com Acendimento Automático', 600, 519.7, 'https://raw.githubusercontent.com/PatriciaTorresGraciano/Full-Stack-Eletro/master/img/produtos/fogao_atlas_branco.jpg?raw=true', 'fogao'),
(6, 'microondas', 'Microondas Consul 32 Litros Inox 220V', 580.99, 409.88, 'https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/microondas_consul.jpg?raw=true', 'microondas'),
(7, 'microondas', 'Microondas 25L Espelhado Philco 220V', 5080.7, 464.53, 'https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/microondas_espelhado.jpg?raw=true', 'microondas'),
(8, 'microondas', 'Forno de Microondas Eletrolux 20L Branco', 459.99, 436.05, 'https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/microondas_branco.jpg?raw=true', 'microondas'),
(9, 'lavaLoucas', 'Lava-Louças Eletolux Inox com 10 Serviços. 06 Programas de Lavagem e Painel Blue Touch', 3599, 2799.9, 'https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/lava_loucas_eletrolux.jpg?raw=true', 'lavaLoucas'),
(10, 'lavaLoucas', 'Lava-Louças Compacta 8 Serviços Branca 127V Brastemp', 1970.5, 1730.61, 'https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/lava_louca_brastemp.jpg?raw=true', 'lavaLoucas'),
(11, 'lavaRoupas', 'Lavadora de Roupas Philco Inverter 12kg', 2399.9, 2179.9, 'https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/lavadora_philco.jpg?raw=true', 'lavaRoupas'),
(12, 'lavaRoupas', 'Lavadora de Roupas Brastemp 11kg com Turbo Performance Branca', 1699, 1214.1, 'https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/lavadora_brastemp.jpg?raw=true', 'lavaRoupas');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `loja`
--
ALTER TABLE `loja`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedidos`),
  ADD UNIQUE KEY `idpedidos_UNIQUE` (`id_pedidos`),
  ADD KEY `categorias_fk` (`categorias_fk`),
  ADD KEY `produto_fk` (`produto_fk`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT de tabela `loja`
--
ALTER TABLE `loja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedidos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`categorias_fk`) REFERENCES `categorias` (`id`),
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`produto_fk`) REFERENCES `produtos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
