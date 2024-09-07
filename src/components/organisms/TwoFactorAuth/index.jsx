import React, { useState } from "react";
import styles from "./index.module.scss";
import Box from "../../templates/BoxSettings/index.jsx";
import ToggleSwitch from "../../atoms/ToggleSwitch/index.jsx";

const TwoFactorAuth = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Box title="Autenticação de Dois Fatores (2FA)">
      <div className={styles.twoFactorAuth}>
        <div className={styles.option} onClick={handleToggle}>
          <span>Habilitar 2FA</span>
          <ToggleSwitch checked={isChecked} onToggle={handleToggle} />
        </div>
        <button className={styles.backupButton}>Gerar Códigos de Backup</button>
      </div>
    </Box>
  );
};

export default TwoFactorAuth;
