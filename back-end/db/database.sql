-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mar. 03 juil. 2018 à 11:50
-- Version du serveur :  5.7.19
-- Version de PHP :  7.2.0RC2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `private_shop_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `t_shop`
--

CREATE TABLE `t_shop` (
  `id_shop` int(11) NOT NULL,
  `nom` varchar(128) NOT NULL,
  `adresse` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `t_shop`
--

INSERT INTO `t_shop` (`id_shop`, `nom`, `adresse`) VALUES
(1, 'Jeans Shop', '23 rue des coquelicots Toulouse'),
(2, 'shoesland', '72 rue de metz'),
(3, 'skate shop', '23 rue de starsbourg Toulouse'),
(4, 'info geek', '75 rue des templiers Toulouse');

-- --------------------------------------------------------

--
-- Structure de la table `t_produits`
--

CREATE TABLE `t_produits` (
  `id_produit` int(11) NOT NULL,
  `nom` varchar(128) NOT NULL,
  `taille` varchar(128) NOT NULL,
  `quantité` varchar(128) NOT NULL,
  `couleurs` int(11) NOT NULL,
   `id_shop` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `t_produits`
--

-- --------------------------------------------------------

--
-- Structure de la table `t_customers`
--

CREATE TABLE `t_customers` (
  `id_customer` int(11) NOT NULL,
  `nom` int(11) NOT NULL,
  `adresse` VARCHAR(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `t_customers`
--
--
-- Index pour les tables déchargées
--

--
-- Index pour la table `t_shop`
--
ALTER TABLE `t_shop`
  ADD PRIMARY KEY (`id_shop`);

--
-- Index pour la table `t_produits`
--
ALTER TABLE `t_produits`
  ADD PRIMARY KEY (`id_produit`);

--
-- Index pour la table `t_customers`
--
ALTER TABLE `t_customers`
  ADD PRIMARY KEY (`id_customer`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `t_shop`
--
ALTER TABLE `t_shop`
  MODIFY `id_shop` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `t_produits`
--
ALTER TABLE `t_produits`
  MODIFY `id_produit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `t_customers`
--
ALTER TABLE `t_customers`
  MODIFY `id_customer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;