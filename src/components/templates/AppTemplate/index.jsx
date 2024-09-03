import React from "react";
import PropTypes from "prop-types";
import SideBar from "../../organisms/SideBar";
import Header from "../../organisms/Header";
import styles from "./index.module.scss";

const AppTemplate = ({ children }) => {
  return (
    <body className={styles.grid_container}>
      <section className={styles.sidebar}>
        <SideBar />
      </section>
      <section className={styles.header}>
        <Header />
      </section>
      <section className={styles.content}> {children}</section>
    </body>
  );
};

AppTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppTemplate;
