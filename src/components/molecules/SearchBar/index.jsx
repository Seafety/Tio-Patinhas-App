import React from "react";
import styles from "./index.module.scss";
import SearchIcon from "../../../asset/Search.svg";
const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Buscar..." className={styles.input} />
      <img src={SearchIcon} alt="search icon" className={styles.icon} />
    </div>
  );
};

export default SearchBar;
