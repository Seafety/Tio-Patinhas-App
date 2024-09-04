import React from "react";
import SaldoTotal from "../../components/molecules/SaldoTotal";
import LimitesDiarios from "../../components/molecules/LimitesDiarios";
import Historico from "../../components/molecules/Historico";
import styles from "./index.module.scss";

const Transactions = () => {
  return <div className={styles.transactions}>
  <SaldoTotal />
  <LimitesDiarios />
  <Historico /></div>;
};

export default Transactions;
