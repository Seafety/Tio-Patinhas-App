import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

const FavoriteIcon = ({ isFavorite, toggleFavorite }) => {
  return (
    <FontAwesomeIcon
      icon={faStar}
      className={`${styles.starIcon} ${isFavorite ? styles.active : ""}`}
      onClick={toggleFavorite}
    />
  );
};

export default FavoriteIcon;
