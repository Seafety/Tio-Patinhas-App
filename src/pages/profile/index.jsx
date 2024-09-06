import React from "react";
import styles from "./index.module.scss";
import EditPerfil from "../../components/organisms/EditPerfil";
import MetodoPagamento from "../../components/organisms/MetodoPagamento";
import Metamask from "../../components/organisms/Matemask";
const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1>Perfil de Investidor</h1>
      </div>
      <div className={styles.container_left_up}>
        <EditPerfil />
      </div>
      <div className={styles.container_left_low}>{/* <EditPerfil /> */}</div>
      <div className={styles.container_right_up}>
        <MetodoPagamento />
      </div>
      <div className={styles.container_right_low}>
        <Metamask />
      </div>
    </div>
  );
};

export default Profile;
