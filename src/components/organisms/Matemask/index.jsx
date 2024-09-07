import React from "react";
import MetamaskLogo from "../../../asset/logos_metamask-icon.svg";
import styles from "./index.module.scss";

const Metamask = () => {
  return (
    <div className={styles.container}>
      <div className={styles.metamask}>
        <img src={MetamaskLogo} alt="Logo da MetaMask" />
        <div>
          <h2>Conecte o Metamask</h2>
          <p>Para que você tenha uma experiência ainda melhor.</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.newBudget}>Criar uma Nova Carteira</button>
        <button className={styles.addBudget}>
          Adicionar uma Carteira Existente
        </button>
      </div>
    </div>
  );
};

export default Metamask;
