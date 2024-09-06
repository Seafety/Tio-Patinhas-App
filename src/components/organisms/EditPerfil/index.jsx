import React, { useState } from "react";
import styles from "./index.module.scss";
import ProfileIcon from "../../../asset/Profile.svg";
import Pencil from "../../../asset/pencil.svg";
import Eye from "../../../asset/Eye.svg";
import EyeClosed from "../../../asset/Eye-crossed.svg";

const EditPerfil = () => {
  const [viewMoney, setViewMoney] = useState(true);

  const handleViewMoney = () => {
    setViewMoney((current) => !current);
  };
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
          <h2>Tio Patinhas</h2>
          <div className={styles.container_info_text}>
            <div className={styles.container_info_text_div}>
              <p className={styles.text_black}>Juntou-se</p>
              <p className={styles.text_orange}>21 Julho, 2024</p>
            </div>
            <div className={styles.container_info_text_div}>
              <p className={styles.text_black}>Saldo Total</p>
              <div>
                <button
                  className={styles.moneyButton}
                  onClick={handleViewMoney}
                >
                  <img
                    src={viewMoney ? Eye : EyeClosed}
                    alt="Open or Close eyes"
                  />
                </button>
                <p className={styles.text_orange}>
                  {viewMoney ? "R$431251232,32" : "R$**********"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container_edit}>
        <p></p>
        <button className={styles.container_edit_button}>Editar Perfil</button>
      </div>
    </div>
  );
};

export default EditPerfil;
