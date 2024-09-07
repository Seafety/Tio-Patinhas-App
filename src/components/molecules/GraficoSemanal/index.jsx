import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./index.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const gerarNumeroAleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const GraficoSemanal = () => {
  const data = {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    datasets: [
      {
        label: "Entradas",
        data: Array.from({ length: 7 }, () =>
          gerarNumeroAleatorio(2000, 250000)
        ),
        backgroundColor: "rgba(0, 185, 41, 1)",
        borderColor: "rgba(0, 185, 41, 1)",
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: "Saídas",
        data: Array.from({ length: 7 }, () =>
          gerarNumeroAleatorio(2000, 250000)
        ),
        backgroundColor: "#E8E8E8",
        borderColor: "#E8E8E8",
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Comparação Semanal" },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `R$ ${value.toLocaleString("pt-BR")}`;
          },
        },
      },
    },
    barPercentage: 0.5,
    categoryPercentage: 0.6,
  };

  return (
    <div className={styles.graficoSemanal}>
      <h2>Estatisticas</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraficoSemanal;
