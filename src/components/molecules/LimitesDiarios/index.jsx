import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "./index.module.scss";
import Award from "../../../asset/Award.svg";
import goal from "../../../asset/goal.svg";

Chart.register(ArcElement, Tooltip, Legend);

const LimitesDiarios = () => {
  const [limite, setLimite] = useState(28000);
  const [isEditing, setIsEditing] = useState(false);

  const currentMonthYear = new Date().toLocaleString("pt-BR", {
    month: "short",
    year: "numeric",
  });

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(value);
  };

  const handleLimiteChange = (e) => {
    const onlyNumbers = e.target.value.replace(/[^\d]/g, "");
    setLimite(Number(onlyNumbers));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const data = {
    labels: ["Alcançado", "Restante"],
    datasets: [
      {
        data: [12, 8],
        backgroundColor: ["#FF9900", "#EAEAEA"],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        cutout: "90%",
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
    rotation: -90,
    circumference: 180,
  };

  return (
    <div className={styles.limitesDiarios}>
      <h2>Limites Diários</h2>
      <div className={styles.limiteValor}>
        {isEditing ? (
          <input
            type="text"
            value={limite.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            onChange={handleLimiteChange}
            className={styles.limiteInput}
          />
        ) : (
          <span className={styles.valor}>{formatCurrency(limite)}</span>
        )}
        <button onClick={toggleEdit} className={styles.editButton}>
          <img
            src="https://img.icons8.com/material-outlined/24/000000/pencil--v1.png"
            alt="Edit"
          />
        </button>
        <span className={styles.data}>{currentMonthYear}</span>
      </div>
      <div className={styles.chartMeta}>
        <div className={styles.metaInfo}>
          <div className={styles.metaText}>
            <span className={styles.valorMeta}>
              <img src={Award} alt="Award" /> Lucro Máximo Diário
            </span>
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              R$12.500,00
            </span>
          </div>
          <div className={styles.metaText}>
            <span className={styles.valorMeta}>
              <img src={goal} alt="Goal" /> Meta de Lucro
            </span>
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              R$9.000,00
            </span>
          </div>
        </div>
        <div className={styles.gaugeChart}>
          <div className={styles.chart}>
            <Doughnut data={data} options={options} />
            <div className={styles.gaugeValues}>
              <span>$0</span>
              <span>$20k</span>
            </div>
          </div>
          <div className={styles.gaugeLabel}>
            <span>12K</span>
            <span>Meta x Conquista</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitesDiarios;
