import React from "react";
import styles from "./index.module.scss";
import ProfileIcon from "../../../asset/Profile.svg";
import Pencil from "../../../asset/pencil.svg";

const PerfilData = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_info}>
        <div className={styles.container_info_photo}>
          <img
            src={ProfileIcon}
            alt="Foto do tio patinhas"
            className={styles.container_info_photo_profile}
          />
          <div className={styles.container_info_edit}>
            <img
              src={Pencil}
              alt="icone de edição "
              className={styles.container_info_photo_edit}
            />
          </div>
        </div>
        <div className={styles.container_info_content}>
          <h2>Conta</h2>
          <div className={styles.container_info_text}>
            <div className={styles.container_info_text_div}>
              <p>Juntou-se</p>
              <p>21 Julho, 2024</p>
            </div>
            <div className={styles.container_info_text_div}>
              <p>Saldo Total</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container_edit}>
        <p>Tio Patinhas</p>
        <button>Editar Perfil</button>
      </div>
    </div>
  );
};

export default PerfilData;
