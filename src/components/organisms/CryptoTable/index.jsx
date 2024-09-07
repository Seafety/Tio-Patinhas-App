import React, { useState } from "react";
import styles from "./index.module.scss";
import cryptoData from "../../../json/cryptoData.json";
import FavoriteIcon from "../../atoms/FavoriteIcon";
import SearchBar from "../../molecules/SearchBar";

import ethereumIcon from "../../../asset/ethIcon.svg";
import ethreumIcon from "../../../asset/etheIcon.svg";
import chinuIcon from "../../../asset/chiIcon.svg";
import varenIcon from "../../../asset/varIcon.svg";
import pancakeIcon from "../../../asset/cakeIcon.svg";
import sutersuIcon from "../../../asset/sutIcon.svg";
import stellarIcon from "../../../asset/steIcon.svg";
import tetherIcon from "../../../asset/tetIcon.svg";
import bnbIcon from "../../../asset/bnbIcon.svg";
import solanaIcon from "../../../asset/solIcon.svg";

const iconMap = {
  "eth-icon": ethereumIcon,
  "ethe-icon": ethreumIcon,
  "chinu-icon": chinuIcon,
  "vrn-icon": varenIcon,
  "cake-icon": pancakeIcon,
  "suter-icon": sutersuIcon,
  "xlm-icon": stellarIcon,
  "usdt-icon": tetherIcon,
  "bnb-icon": bnbIcon,
  "sol-icon": solanaIcon,
};

const CryptoTable = () => {
  const [activeTab, setActiveTab] = useState("Todas");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const toggleFavorite = (coinSymbol) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(coinSymbol)
        ? prevFavorites.filter((symbol) => symbol !== coinSymbol)
        : [...prevFavorites, coinSymbol]
    );
  };

  const filteredCryptoData =
    activeTab === "Favoritos"
      ? cryptoData.cryptoTable.filter((coin) => favorites.includes(coin.symbol))
      : cryptoData.cryptoTable.filter((coin) =>
          coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className={styles.cryptoTableContainer}>
      {/* Seção Favoritos / Todas as Criptos */}
      <div className={styles.tabFilter}>
        <span
          className={`${styles.tabOption} ${
            activeTab === "Favoritos" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("Favoritos")}
        >
          Favoritos
        </span>
        <span
          className={`${styles.tabOption} ${
            activeTab === "Todas" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("Todas")}
        >
          Todas as Criptos
        </span>
      </div>

      {/* Seção de Categorias + Barra de Pesquisa */}
      <div className={styles.categoryFilterContainer}>
        <div className={styles.categoryFilter}>
          {["Todos", "Solana", "Memes", "Metaverso", "Outros"].map(
            (category) => (
              <span
                key={category}
                className={`${styles.categoryOption} ${
                  activeCategory === category ? styles.active : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </span>
            )
          )}
        </div>
        <div>
          <SearchBar />
        </div>
      </div>

      {/* Tabela de Criptos */}
      <div className={styles.cryptoTable}>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Mudança</th>
              <th>Volume 24h</th>
              <th>Capitalização de Mercado</th>
            </tr>
          </thead>
          <tbody>
            {filteredCryptoData.map((coin, index) => (
              <tr
                key={index}
                className={`${styles.tableRow} ${
                  favorites.includes(coin.symbol) ? styles.favorite : ""
                }`}
              >
                <td>
                  <FavoriteIcon
                    isFavorite={favorites.includes(coin.symbol)}
                    toggleFavorite={() => toggleFavorite(coin.symbol)}
                  />
                  <img
                    src={iconMap[`${coin.symbol.toLowerCase()}-icon`]}
                    alt={coin.name}
                    className={styles.tableIcon}
                  />
                  <div className={styles.coinDetails}>
                    <span className={styles.coinName}>{coin.name}</span>
                    <span className={styles.coinSymbol}>{coin.symbol}</span>
                  </div>
                </td>
                <td>{coin.price}</td>
                <td
                  className={
                    parseFloat(coin.change) > 0
                      ? styles.positive
                      : styles.negative
                  }
                >
                  {coin.change}
                </td>
                <td>{coin.volume}</td>
                <td>{coin.marketCap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
