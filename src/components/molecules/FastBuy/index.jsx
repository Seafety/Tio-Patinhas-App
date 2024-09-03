import React from 'react';
import styles from './index.module.scss';

const FastBuy = () => {
  return (
    <div className={styles.compraRapida}>
      <h2>Compra Rápida</h2>
      <div className={styles.inputGroup}>
        <input type="text"  />
        <button>Comprar Agora</button>
      </div>
    </div>
  );
};

export default FastBuy;
