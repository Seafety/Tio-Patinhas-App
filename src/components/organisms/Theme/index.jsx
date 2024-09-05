import React, { useState } from "react";
import styles from "./index.module.scss";
import Box from "../../templates/BoxSettings/index.jsx"; // Importando o componente Box

const ThemeSelection = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <Box title="Escolha do Tema">
      <div className={styles.themeOptions}>
        <div
          className={`${styles.themeOption} ${
            selectedTheme === "light" ? styles.selected : ""
          }`}
          onClick={() => handleThemeSelect("light")}
        >
          <div className={styles.themeImageLight}></div>
          <span>Claro</span>
        </div>
        <div
          className={`${styles.themeOption} ${
            selectedTheme === "dark" ? styles.selected : ""
          }`}
          onClick={() => handleThemeSelect("dark")}
        >
          <div className={styles.themeImageDark}></div>
          <span>Escuro</span>
        </div>
      </div>
    </Box>
  );
};

export default ThemeSelection;
