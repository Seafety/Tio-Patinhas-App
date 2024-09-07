import React from "react";
import styles from "./index.module.scss";
import CryptoBox from "../../templates/CryptoBox";
import cryptoData from "../../../json/cryptoData.json";

import bitcoinIcon from "../../../asset/btcIcon.svg";
import ethereumIcon from "../../../asset/ethIcon.svg";
import pancakeIcon from "../../../asset/cakeIcon.svg";
import dogIcon from "../../../asset/dogeIcon.svg";

const iconMap = {
  "bitcoin-icon": bitcoinIcon,
  "ethereum-icon": ethereumIcon,
  "pancake-icon": pancakeIcon,
  "dogcoin-icon": dogIcon,
};

const CryptoSections = () => {
  return (
    <div className={styles.cryptoSections}>
      <CryptoBox title="Moedas Populares">
        <div className={styles.cryptoBoxContent}>
          {cryptoData.popularCoins.map((coin, index) => (
            <div key={index} className={styles.coinItem}>
              <img
                src={iconMap[coin.icon]}
                alt={coin.name}
                className={styles.coinIcon}
              />
              <span className={styles.coinName}>{coin.name}</span>
              <span className={styles.coinSymbol}>{coin.symbol}</span>
              <span className={styles.coinPrice}>{coin.price}</span>
              <span
                className={`${styles.coinChange} ${
                  parseFloat(coin.change) > 0
                    ? styles.positive
                    : styles.negative
                }`}
              >
                {coin.change}
              </span>
            </div>
          ))}
        </div>
      </CryptoBox>

      <CryptoBox title="Moedas com Maior Alta">
        <div className={styles.cryptoBoxContent}>
          {cryptoData.highCoins.map((coin, index) => (
            <div key={index} className={styles.coinItem}>
              <img
                src={iconMap[coin.icon]}
                alt={coin.name}
                className={styles.coinIcon}
              />
              <span className={styles.coinName}>{coin.name}</span>
              <span className={styles.coinSymbol}>{coin.symbol}</span>
              <span className={styles.coinPrice}>{coin.price}</span>
              <span
                className={`${styles.coinChange} ${
                  parseFloat(coin.change) > 0
                    ? styles.positive
                    : styles.negative
                }`}
              >
                {coin.change}
              </span>
            </div>
          ))}
        </div>
      </CryptoBox>

      <CryptoBox title="Moedas com Maior Volume">
        <div className={styles.cryptoBoxContent}>
          {cryptoData.volumeCoins.map((coin, index) => (
            <div key={index} className={styles.coinItem}>
              <img
                src={iconMap[coin.icon]}
                alt={coin.name}
                className={styles.coinIcon}
              />
              <span className={styles.coinName}>{coin.name}</span>
              <span className={styles.coinSymbol}>{coin.symbol}</span>
              <span className={styles.coinPrice}>{coin.price}</span>
              <span
                className={`${styles.coinChange} ${
                  parseFloat(coin.change) > 0
                    ? styles.positive
                    : styles.negative
                }`}
              >
                {coin.change}
              </span>
            </div>
          ))}
        </div>
      </CryptoBox>
    </div>
  );
};

export default CryptoSections;
