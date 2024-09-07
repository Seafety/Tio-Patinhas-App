import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./index.module.scss";
import arrowUp from "../../../asset/arrowUp.svg";
import arrowDown from "../../../asset/arrowDown.svg";

const CarteiraOverview = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Overview",
        data: [
          3000, 4550, 6000, 4000, 7000, 9000, 7000, 5000, 4060, 5000, 8000,
          9000,
        ],
        fill: false,
        backgroundColor: "#fff",
        borderColor: "#fff",
        pointBackgroundColor: "#1e90ff",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#fff" },
      },
      y: {
        grid: { color: "rgba(255,255,255,0.2)" },
        ticks: { color: "#fff" },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className={styles.carteiraOverview}>
      <h2>Carteira Overview</h2>
      <Line style={{ maxHeight: "300px" }} data={data} options={options} />
      <div className={styles.stats}>
        <div className={styles.income}>
          <span className={styles.icon}>
            <img src={arrowUp}></img>
          </span>
          <div className={styles.valueTotal}>
            <span className={styles.amount}>
              <p style={{ fontSize: "15px", color: "#00C287" }}>$</p>1892.25
            </span>
            <span className={styles.label}>Entradas</span>
          </div>
        </div>
        <div className={styles.expense}>
          <span className={styles.icon}>
            <img src={arrowDown}></img>
          </span>
          <div className={styles.valueTotal}>
            <span className={styles.amount}>
              <p style={{ fontSize: "15px", color: "#E72D04" }}>$</p>387.47
            </span>
            <span className={styles.label}>Gastos</span>
          </div>
        </div>
        <button className={styles.periodButton}>Mensal</button>
      </div>
    </div>
  );
};

export default CarteiraOverview;
