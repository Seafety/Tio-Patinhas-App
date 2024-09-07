
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import style from "./index.module.scss";

// Register the necessary chart components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);


const Graph = ({ data, color }) => {
  // Configuração dos dados para o gráfico
  const chartData = {
    labels: data.map((_, index) => index + 1),
    datasets: [
      {
        label: "Performance",
        data: data,
        fill: false,
        borderColor: color,
        tension: 0.1,
      },
    ],
  };

  // Configuração das opções do gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={style.graph}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Graph;
