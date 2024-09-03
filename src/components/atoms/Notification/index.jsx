import React from "react";
import styles from "./index.module.scss";
import NotificationIcon from "../../../asset/Notification.svg";
const Notification = () => {
  return (
    <img src={NotificationIcon} alt="Notificação" className={styles.icon} />
  );
};

export default Notification;
