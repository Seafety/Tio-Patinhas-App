import React from "react";
import styles from "./index.module.scss";


const ActivityHistory = ({ transactions }) => {
  return (
    <div className={styles.historicoDeAtividade}>
      <h2 className={styles.title}>Histórico de Atividade</h2>
      <table className={styles.table}>
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
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className={styles.transaction}>
                <img
                  src={transaction.crypto.img}
                  alt={transaction.crypto.name}
                />
                {transaction.crypto.symbol} {transaction.crypto.name}
              </td>
              <td>{transaction.action}</td>
              <td
                className={
                  transaction.action === "Compra" ? styles.red : styles.green
                }
              >
                {transaction.action === "Compra" ? "-" : "+"}
                {transaction.amount.toFixed(2)}
              </td>
              <td>{transaction.status}</td>
              <td style={{ color: "gray" }}>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityHistory;
