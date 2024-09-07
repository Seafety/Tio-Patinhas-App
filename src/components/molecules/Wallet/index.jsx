import React from "react";
import styles from "./index.module.scss";
import btcIcon from "../../../asset/btcIcon.svg";
import ethIcon from "../../../asset/ethIcon.svg";
import cakeIcon from "../../../asset/cakeIcon.svg";
import dogeIcon from "../../../asset/dogeIcon.svg";

const Wallet = () => {
  return (
    <div className={styles.wallet}>
      <h2 className={styles.title}>Carteira</h2>
      <ul className={styles.walletList}>
        <li className={styles.walletItem}>
          <div className={styles.coinInfo}>
            <span className={styles.coinIcon}>
              <img src={btcIcon}></img>
            </span>
            <span className={styles.coinName}>Bitcoin</span>
          </div>
          <div className={styles.coinBalance}>0,16 BTC</div>
          <div className={styles.coinValue}>R$ 56.153,58</div>
        </li>
        <li className={styles.walletItem}>
          <div className={styles.coinInfo}>
            <span className={styles.coinIcon}>
              <img src={ethIcon}></img>
            </span>
            <span className={styles.coinName}>Ethereum</span>
          </div>
          <div className={styles.coinBalance}>2 ETH</div>
          <div className={styles.coinValue}>R$ 36.949,20</div>
        </li>
        <li className={styles.walletItem}>
          <div className={styles.coinInfo}>
            <span className={styles.coinIcon}>
              <img src={cakeIcon}></img>
            </span>
            <span className={styles.coinName}>Pancake</span>
          </div>
          <div className={styles.coinBalance}>1250 CAKE</div>
          <div className={styles.coinValue}>R$ 14.761,23</div>
        </li>
        <li className={styles.walletItem}>
          <div className={styles.coinInfo}>
            <span className={styles.coinIcon}>
              <img src={dogeIcon}></img>
            </span>
            <span className={styles.coinName}>Doge</span>
          </div>
          <div className={styles.coinBalance}>841 DOGE</div>
          <div className={styles.coinValue}>R$ 546,26</div>
        </li>
      </ul>
    </div>
  );
};

export default Wallet;
