import React, { useState } from "react";
import styles from "./index.module.scss";
import Box from "../../templates/BoxSettings/index.jsx";
import ToggleSwitch from "../../atoms/ToggleSwitch/index.jsx";

const NotificationSettings = () => {
  const notifications = [
    "Notificação de Transação Concluída",
    "Notificação de Oportunidade de Investimento",
    "Notificação de Login Suspeito",
    "Notificação de Expiração de Documentos",
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(notifications.length).fill(false)
  );

  const toggleCheckbox = (index) => {
    const updatedCheckedState = checkedState.map((item, i) =>
      i === index ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <Box title="Notificações">
      <div className={styles.notificationList}>
        {notifications.map((notification, index) => (
          <div key={index} className={styles.notificationItem}>
            <span>{notification}</span>

            <ToggleSwitch
              checked={checkedState[index]}
              onToggle={() => toggleCheckbox(index)}
            />
          </div>
        ))}
      </div>
    </Box>
  );
};

export default NotificationSettings;
