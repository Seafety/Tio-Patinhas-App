import React from "react";
import styles from "./index.module.scss";
import arrowUp from "../../../asset/arrowUp.svg";
import arrowDown from "../../../asset/arrowDown.svg";

const Historico = () => {
  return (
    <div className={styles.historico}>
      <div className={styles.header}>
        <h2>Histórico</h2>
      </div>
      <div className={styles.transacao}>
        <div className={styles.data}>
          <span className={styles.mes}>Set</span>
          <span className={styles.dia}>04</span>
        </div>
        <div className={styles.detalhes}>
          <span className={styles.nome}>Ronald Mcduck</span>
          <span className={styles.tipo}>Recebido</span>
        </div>
        <div className={styles.valorContainer}>
          <img src={arrowUp} className={styles.iconeRecebido} />
          <span className={styles.valorRecebido}>R$559</span>
        </div>
      </div>
      <div className={styles.transacao}>
        <div className={styles.data}>
          <span className={styles.mes}>Ago</span>
          <span className={styles.dia}>21</span>
        </div>
        <div className={styles.detalhes}>
          <span className={styles.nome}>Moana Princess</span>
          <span className={styles.tipo}>Transferência</span>
        </div>
        <div className={styles.valorContainer}>
          <img src={arrowDown} className={styles.iconePago} />
          <span className={styles.valorPago}>R$98</span>
        </div>
      </div>
      <div className={styles.transacao}>
        <div className={styles.data}>
          <span className={styles.mes}>Jun</span>
          <span className={styles.dia}>19</span>
        </div>
        <div className={styles.detalhes}>
          <span className={styles.nome}>Mickey Mouse</span>
          <span className={styles.tipo}>Transferência</span>
        </div>
        <div className={styles.valorContainer}>
          <img src={arrowDown} className={styles.iconePago} />
          <span className={styles.valorPago}>R$98</span>
        </div>
      </div>
      <div className={styles.transacao}>
        <div className={styles.data}>
          <span className={styles.mes}>Jun</span>
          <span className={styles.dia}>12</span>
        </div>
        <div className={styles.detalhes}>
          <span className={styles.nome}>Mickey Mouse</span>
          <span className={styles.tipo}>Recebido</span>
        </div>
        <div className={styles.valorContainer}>
          <img src={arrowUp} className={styles.iconeRecebido} />
          <span className={styles.valorRecebido}>R$9.821</span>
        </div>
      </div>
    </div>
  );
};

export default Historico;
