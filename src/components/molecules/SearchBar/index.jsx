import React from "react";
import styles from "./index.module.scss";
import SearchIcon from "../../../asset/Search.svg";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ placeholder, value, onChange }) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder={placeholder} // Usando o placeholder dinâmico
        value={value} // Ligando o valor ao estado recebido
        onChange={onChange} // Atualizando o valor conforme o usuário digita
        className={styles.input}
      />
      <img src={SearchIcon} alt="search icon" className={styles.icon} />
    </div>
  );
};

export default SearchBar;
