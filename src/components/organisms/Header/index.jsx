import React from "react";
import styles from "./index.module.scss";
import Notification from "../../atoms/Notification";
import Perfil from "../../molecules/Perfil";
import SearchBar from "../../molecules/SearchBar";

const Header = () => {
  return (
    <section className={styles.headerContainer}>
      <SearchBar placeholder="Busque..." />
      <div className={styles.perfilContent}>
        <Notification />
        <Perfil />
      </div>
    </section>
  );
};

export default Header;
