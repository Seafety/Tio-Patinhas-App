import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "./index.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoLucro = () => {
  const [percentualLucro, setPercentualLucro] = useState(0);
  const [metaAlcancada, setMetaAlcancada] = useState(false);
  const [mensagemMeta, setMensagemMeta] = useState("");

  useEffect(() => {
    const lucroAleatorio = Math.floor(Math.random() * 50) + 50;
    setPercentualLucro(lucroAleatorio);

    const metaLucro = 80;
    if (lucroAleatorio >= metaLucro) {
      setMetaAlcancada(true);
      setMensagemMeta("Parabéns! Meta alcançada!");
    } else {
      setMetaAlcancada(false);
      setMensagemMeta(
        `Faltam ${metaLucro - lucroAleatorio}% para atingir a meta!`
      );
    }
  }, []);

  const data = {
    labels: ["Lucro", "Restante"],
    datasets: [
      {
        data: [percentualLucro, 100 - percentualLucro],
        backgroundColor: ["#4caf50", "#ff5252"],
        hoverBackgroundColor: ["#66bb6a", "#ff8a80"],
        borderWidth: 1,
        borderRadius: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "80%",
    plugins: {
      tooltip: { enabled: true },
      legend: { display: false },
    },
  };

  return (
    <div className={styles.graficoLucro}>
      <div style={{ maxWidth: "70%" }}>
        <Doughnut data={data} options={options} />
      </div>
      <div className={styles.lucro}>
        <p>% de lucro</p>
        <strong>{percentualLucro}%</strong>
      </div>

      <div className={styles.meta}>
        <p>
          <strong>Meta:</strong> 80% de lucro
        </p>
        <p>{mensagemMeta}</p>
        <p>
          <strong>Status:</strong>{" "}
          {metaAlcancada ? "Meta atingida!" : "Meta não atingida"}
        </p>
      </div>

      {metaAlcancada ? (
        <div className={styles.resumoMetaAlcancada}>
          <p>
            Continue assim! Você está no caminho certo para superar suas
            expectativas de crescimento.
          </p>
        </div>
      ) : (
        <div className={styles.resumoMetaPendente}>
          <p>
            Atingir a meta é possível! Revise seus investimentos e foque em
            estratégias de otimização para melhorar os resultados.
          </p>
        </div>
      )}
    </div>
  );
};

export default GraficoLucro;
