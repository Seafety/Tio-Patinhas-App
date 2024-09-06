import React from "react";
import styles from "./index.module.scss";
import Plus from "../../../asset/MetodoPagamento/Plus.svg";
import LogoCartao from "../../../asset/MetodoPagamento/LogoCartao.svg";
import Aproximacao from "../../../asset/MetodoPagamento/Aproximacao.svg";
import Ship from "../../../asset/MetodoPagamento/Ship.svg";
import Visa from "../../../asset/MetodoPagamento/Visa.svg";
const MetodoPagamento = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Titles}>
        <h3>Método de Pagamento</h3>
        <img src={Plus} alt="" />
      </div>
      <div className={styles.Card}>
        <div>
          <img src={LogoCartao} alt="" className={styles.Logo} />
          <div className={styles.Data}>
            <p>346</p>
            <h4>4324 1235 5321</h4>
            <p>Validade 07/29</p>
          </div>
        </div>
        <div>
          <img src={Aproximacao} alt="" className={styles.Aproximacao} />
          <img src={Ship} alt="" className={styles.Ship} />
          <img src={Visa} alt="" className={styles.Visa} />
        </div>
      </div>
    </div>
  );
};

export default MetodoPagamento;
