import React from "react";
import styles from "./index.module.scss";
import CryptoSections from "../../components/organisms/CryptoSections";
import CryptoTable from "../../components/organisms/CryptoTable";

const Market = () => {
  return (
    <div className={styles.container}>
      <CryptoSections />
      <CryptoTable />
    </div>
  );
};

export default Market;
