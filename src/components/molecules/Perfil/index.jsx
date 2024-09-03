import React from "react";
import styles from "./index.module.scss";
import ProfileIcon from "../../../asset/Profile.svg";
import DotsIcon from "../../../asset/Dots.svg";
const Perfil = () => {
  return (
    <section className={styles.profileContainer}>
      <img
        src={ProfileIcon}
        alt="Icone do usuário"
        className={styles.profileIcon}
      />
      <div className={styles.profileInfo}>
        <h3>Tio Patinhas</h3>
        <p>Level 10</p>
      </div>
      <img src={DotsIcon} alt="dots" className={styles.dotsIcon} />
    </section>
  );
};

export default Perfil;
