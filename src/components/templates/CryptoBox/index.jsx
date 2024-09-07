import React from "react";
import styles from "./index.module.scss";

const CryptoBox = ({ title, children }) => {
  return (
    <div className={styles.cryptoBox}>
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default CryptoBox;
