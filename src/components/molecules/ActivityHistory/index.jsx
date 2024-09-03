import React from 'react';
import styles from './index.module.scss';

const ActivityHistory = () => {
  return (
    <div className={styles.historicoDeAtividade}>
      <h2>Histórico de Atividade</h2>
      <table>
        <thead>
          <tr>
            <th>Transações</th>
            <th>Ação</th>
            <th>Total (R$)</th>
            <th>Status</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ETH Ethereum</td>
            <td>Venda</td>
            <td className={styles.green}>+2.154,00</td>
            <td>OK</td>
            <td>21 jun, 2024</td>
          </tr>
          <tr>
            <td>CAKE Pancake</td>
            <td>Compra</td>
            <td className={styles.red}>-1.567,00</td>
            <td>Pendente</td>
            <td>15 jun, 2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ActivityHistory;
