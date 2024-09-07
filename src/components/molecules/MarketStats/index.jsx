import React from 'react';
import styles from './index.module.scss';

const marketData = [
  { name: 'BTC', fullName: 'Bitcoin', price: 'R$360995.99', change: 2.54 },
  { name: 'BNB', fullName: 'BNB', price: 'R$3292.00', change: 2.304 },
  { name: 'ETH', fullName: 'Ethereum', price: 'R$19093.15', change: -1.32 },
  { name: 'LTC', fullName: 'Litecoin', price: 'R$416.82', change: 1.40 },
  { name: 'CAKE', fullName: 'Pancake', price: 'R$13.36', change: 3.69 },
  { name: 'DOGE', fullName: 'Doge', price: 'R$0.70', change: 0.34 },
];

const MarketStats = () => (
  <div className={styles.tendenciaDoMercado}>
    <h2>Tendência do Mercado</h2>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Último Preço</th>
          <th>Variação 24h</th>
        </tr>
      </thead>
      <tbody>
        {marketData.map((item) => (
          <tr key={item.name}>
            <td>
              <strong>{item.name}</strong> <span>{item.fullName}</span>
            </td>
            <td className={styles.price}>{item.price}</td>
            <td
              className={
                item.change >= 0 ? styles.positive : styles.negative
              }
            >
              {item.change >= 0 ? '▴ + ' : '▾ -'} {Math.abs(item.change).toFixed(3)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MarketStats;
