import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

const ToggleSwitch = ({ checked, onToggle }) => {
  return (
    <FontAwesomeIcon
      icon={checked ? faToggleOn : faToggleOff}
      className={`${styles.toggle} ${checked ? styles.checked : ""}`}
      onClick={onToggle}
    />
  );
};

export default ToggleSwitch;
