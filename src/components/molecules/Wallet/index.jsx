import React from 'react';
import styles from './index.module.scss';

const Wallet = () => {
  return (
    <div className={styles.carteira}>
      <h2>Carteira</h2>
      <ul>
        <li>
          <span>Bitcoin</span>
          <span>0,16 BTC</span>
          <span>R$ 56.153,58</span>
        </li>
        <li>
          <span>Ethereum</span>
          <span>2 ETH</span>
          <span>R$ 36.949,20</span>
        </li>
        <li>
          <span>Pancake</span>
          <span>1250 CAKE</span>
          <span>R$ 14.761,23</span>
        </li>
        <li>
          <span>Pancake</span>
          <span>841 CAKE</span>
          <span>R$ 546,26</span>
        </li>
      </ul>
    </div>
  );
};

export default Wallet;
