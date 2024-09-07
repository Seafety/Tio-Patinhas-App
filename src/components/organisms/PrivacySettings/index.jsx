import React from "react";
import styles from "./index.module.scss";
import Box from "../../templates/BoxSettings/index.jsx";

const PrivacySettings = () => {
  const privacyOptions = [
    { label: "Visibilidade do Perfil", value: "Privado" },
    { label: "Compartilhamento de Transações", value: "Privado" },
  ];

  return (
    <Box title="Configurações de Privacidade">
      <div className={styles.privacySettings}>
        {privacyOptions.map((option, index) => (
          <div key={index} className={styles.privacyItem}>
            <span>{option.label}</span>
            <select className={styles.dropdown}>
              <option value="privado">{option.value}</option>
              <option value="publico">Público</option>
            </select>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default PrivacySettings;
