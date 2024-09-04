import React, { useState } from 'react';
import styles from './index.module.scss';
import btcIcon from '../../../asset/btcIcon.svg';
import ethIcon from '../../../asset/ethIcon.svg';
import dogeIcon from '../../../asset/dogeIcon.svg';
import cakeIcon from '../../../asset/cakeIcon.svg';
import tether from '../../../asset/tether.svg';
import litecoin from '../../../asset/litecoin.svg';

const FastBuy = ({ onBuy }) => {
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [showCryptoList, setShowCryptoList] = useState(false);
  const [amount, setAmount] = useState('');

  const cryptos = [
    { name: 'Tether', symbol: 'USDT', img: tether },
    { name: 'Litecoin', symbol: 'LTC', img: litecoin },
    { name: 'Bitcoin', symbol: 'BTC', img: btcIcon },
    { name: 'Ethereum', symbol: 'ETH', img: ethIcon },
    { name: 'Doge', symbol: 'DOGE', img: dogeIcon },
    { name: 'Pancake', symbol: 'CAKE', img: cakeIcon }, 
  ];

  const handleCryptoClick = (crypto) => {
    setSelectedCrypto(crypto);
    setShowCryptoList(false);
  };

  const toggleCryptoList = () => {
    setShowCryptoList(!showCryptoList);
  };

  const handleBuyClick = () => {
    const amountValue = parseFloat(amount.replace('R$', '').replace(',', '.'));
    
    if (!selectedCrypto || amountValue <= 0 || isNaN(amountValue)) {
      alert('Selecione uma criptomoeda e insira um valor válido maior que zero.');
      return;
    }

    onBuy(selectedCrypto, amount);
    setAmount('');
  };

  return (
    <div className={styles.compraRapida}>
      <h2 className={styles.title}>Compra Rápida</h2>
      
      <div className={styles.cryptoOptions}>
        {selectedCrypto ? (
          <div className={styles.cryptoSelected}>
            <img src={selectedCrypto.img} alt={selectedCrypto.name} />
            <span>{selectedCrypto.symbol}</span>
          </div>
        ) : (
          <div className={styles.cryptoPlaceholder}>Selecione uma Cripto</div>
        )}

        <div className={styles.addCrypto} onClick={toggleCryptoList}>
          <span>+</span>
        </div>
      </div>

      {showCryptoList && (
        <div className={styles.cryptoList}>
          {cryptos.map((crypto) => (
            <div 
              key={crypto.symbol} 
              className={styles.cryptoItem} 
              onClick={() => handleCryptoClick(crypto)}
            >
              <img src={crypto.img} alt={crypto.name} />
              <span>{crypto.name}</span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.inputGroup}>
        <label>Quantidade: <span> &nbsp; R$ </span></label>
        <input 
          type="text" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      
      <button className={styles.buyButton} onClick={handleBuyClick}>
        Comprar Agora
      </button>
    </div>
  );
};

export default FastBuy;
