import React from "react";
import styles from "./index.module.scss";
import Box from "../../templates/BoxSettings/index.jsx"; 

const HistoryAcess = () => {
  const sessions = [
    {
      device: "2024-06-18 15:32",
      location: "123.456.789.101",
      lastAccess: "São Paulo, BR",
    },
    {
      device: "2024-06-17 09:45",
      location: "123.456.789.102",
      lastAccess: "Rio de Janeiro, BR",
    },
  ];

  return (
    <Box title="Histórico de Acessos">
      <div className={styles.sessionList}>
        <h3 className={styles.subTitle}>Últimos Acessos:</h3>
        {sessions.map((session, index) => (
          <div key={index} className={styles.sessionItem}>
            <div>{session.device}</div>
            <div>{session.location}</div>
            <div>{session.lastAccess}</div>
            
          </div>
        ))}
      </div>
    </Box>
  );
};

export default HistoryAcess;
