import React from "react";
import styles from "./index.module.scss";
import Box from "../../templates/BoxSettings/index.jsx"; 

const SessionManagement = () => {
  const sessions = [
    {
      device: "Laptop - Chrome",
      location: "São Paulo, BR",
      lastAccess: "2024-06-18 15:32",
    },
    {
      device: "Mobile - Safari",
      location: "Rio de Janeiro, BR",
      lastAccess: "2024-06-17 09:45",
    },
  ];

  return (
    <Box title="Gerenciamento de Sessões">
      <div className={styles.sessionList}>
        <h3 className={styles.subTitle}>Sessões Ativas:</h3>
        {sessions.map((session, index) => (
          <div key={index} className={styles.sessionItem}>
            <div>{session.device}</div>
            <div>{session.location}</div>
            <div>{session.lastAccess}</div>
            <button className={styles.endButton}>Encerrar</button>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default SessionManagement;
