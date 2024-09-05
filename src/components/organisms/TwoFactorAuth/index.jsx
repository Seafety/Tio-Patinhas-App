import React from "react";
import styles from "./index.module.scss";
import Box from "../../templates/BoxSettings/index.jsx"; 

const TwoFactorAuth = () => {
  return (
    <Box title="Autenticação de Dois Fatores (2FA)">
      <div className={styles.twoFactorAuth}>
        <div className={styles.option}>
          <span>Habilitar 2FA</span>
          <input type="checkbox" className={styles.toggle} />
        </div>
        <button className={styles.backupButton}>Gerar Códigos de Backup</button>
      </div>
    </Box>
  );
};

export default TwoFactorAuth;
