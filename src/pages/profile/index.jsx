import React from "react";
import styles from "./index.module.scss";
import PerfilData from "../../components/organisms/PerfilData";
const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1>Perfil de Investidor</h1>
      </div>
      <div className={styles.container_left_up}>
        <PerfilData />
      </div>
      <div className={styles.container_left_low}>
        <PerfilData />
      </div>
      <div className={styles.container_right_up}>
        <PerfilData />
      </div>
      <div className={styles.container_right_low}>
        <PerfilData />
      </div>
    </div>
  );
};

export default Profile;
