import React from "react";
import styles from "./index.module.scss";
import Box from "../../templates/BoxSettings/index.jsx";
import perfil from "../../../asset/Config/perfil.svg";
import banner from "../../../asset/Config/Tio-Patinhas-banner.png";

const AccountSection = () => {
  return (
    <Box title="Conta">
      <div
        className={styles.accountDetails}
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className={styles.userInfo}>
        <img src={perfil} alt="User Avatar" className={styles.avatar} />
        <div className={styles.userName}>Tio Patinhas</div>
      </div>
      <div className={styles.accontDiv}>
        <div className={styles.accountItem1}>
          <span>Nome de Usuário</span>
        </div>
        <div className={styles.accountItem}>
          <span className={styles.accountValue}>Tio Patinhas</span>
          <button className={styles.editButton}>Editar</button>
        </div>
        <div className={styles.accountItem1}>
          <span>Email</span>
        </div>
        <div className={styles.accountItem}>
          <span className={styles.accountValue}>******@email.com</span>

          <button className={styles.editButton}>Editar</button>
        </div>
        <div className={styles.accountItem1}>
          <span>Senha</span>
        </div>
        <div className={styles.accountItem}>
          <span className={styles.accountValue}>********</span>
          <button className={styles.editButton}>Editar</button>
        </div>
      </div>
    </Box>
  );
};

export default AccountSection;
