import React, { useState } from "react";
import style from "./index.module.scss";
import eye from "../../../asset/eye.svg";
import eyeslash from "../../../asset/eyeslash.svg";

const ProfitLossCard = ({ currencySymbol, value, profit, loss, neutral }) => {
  const [isValueVisible, setIsValueVisible] = useState(true);

  const toggleValueVisibility = () => {
    setIsValueVisible(!isValueVisible);
  };

  return (
    <div className={style.card}>
      <div style={{ fontSize: "1.5rem" }}>
        <span>{currencySymbol}</span>
      </div>
      <div className={style.header}>
        <span className={style.value}>{isValueVisible ? value : "••••"}</span>
        <img
          src={isValueVisible ? eyeslash : eye}
          alt={isValueVisible ? "Hide value" : "Show value"}
          className={style.icon}
          onClick={toggleValueVisibility}
        />
      </div>
      <div className={style.footer}>
        <div className={style.section}>
          <span className={style.label}>Lucro</span>
          <span className={style.profit}>{profit}</span>
        </div>
        <div className={style.section}>
          <span className={style.label}>Perda</span>
          <span className={style.loss}>{loss}</span>
        </div>
        <div className={style.section}>
          <span className={style.label}>Neutro</span>
          <span className={style.neutral}>{neutral}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfitLossCard;
