import React, { useState } from 'react';
import styles from './index.module.scss';
import mastercard from '../../../asset/mastercard.svg';
import visa from '../../../asset/visa.svg';

const SaldoTotal = () => {
  // Estado contendo os cartões com cores diferentes
  const [cartoes, setCartoes] = useState([
    { tipo: 'Crédito', numero: '**** **** **** 2598', limite: 25000, icone: mastercard, cor: 'black' },
    { tipo: 'Débito', numero: '**** **** **** 1234', limite: 12000, icone: visa, cor: '#1E90FF' },
    { tipo: 'Cartão de Recompensa', numero: '**** **** **** 5678', limite: 50000, icone: mastercard, cor: '#F79033' },
  ]);

  const [cartaoAtual, setCartaoAtual] = useState(0); 

  const handleProximo = () => {
    if (cartaoAtual < cartoes.length - 1) {
      setCartaoAtual(cartaoAtual + 1);
    }
  };

  const handleAnterior = () => {
    if (cartaoAtual > 0) {
      setCartaoAtual(cartaoAtual - 1);
    }
  };

  return (
    <div className={styles.saldoTotal}>
      <h2>Saldo Total</h2>
      <div className={styles.saldoInfo}>
        <span className={styles.saldo}>R$106.065,00</span>
        <span className={styles.contas}>Todas Contas</span>
      </div>
      
      <div 
        className={styles.cartao} 
        style={{ backgroundColor: cartoes[cartaoAtual].cor }}
      >
        <div className={styles.cartaoHeader}>
          <span style={{fontSize: '1rem', fontStyle: 'normal', fontWeight: 500, lineHeight:'20px', textTransform: 'capitalize'}}>Tipo De Cartão</span>
          <h3>{cartoes[cartaoAtual].tipo}</h3>
          <span>{cartoes[cartaoAtual].numero}</span>
        </div>
        <div className={styles.cartaoInfo}>
          <img src={cartoes[cartaoAtual].icone} alt={cartoes[cartaoAtual].tipo} />
          <span className={styles.limite}>R${cartoes[cartaoAtual].limite.toLocaleString('pt-BR')}</span>
        </div>
      </div>

      <div className={styles.navegacao}>
        <button
          onClick={handleAnterior}
          disabled={cartaoAtual === 0} 
        >
          ◂ Anterior
        </button>
        <span className={styles.indicador}>
          {cartaoAtual + 1} / {cartoes.length}
        </span>
        <button
          onClick={handleProximo}
          disabled={cartaoAtual === cartoes.length - 1} 
        >
          Próximo ▸
        </button>
      </div>
    </div>
  );
};

export default SaldoTotal;
