import React, { useState } from "react";
import styles from "./index.module.scss";
import Plus from "../../../asset/MetodoPagamento/Plus.svg";
import Aproximacao from "../../../asset/MetodoPagamento/Aproximacao.svg";
import Ship from "../../../asset/MetodoPagamento/Ship.svg";
import Visa from "../../../asset/MetodoPagamento/Visa.svg";

const MetodoPagamento = () => {
  const mockCards = [
    {
      id: 1,
      number: "4324 1235 5321",
      validity: "07/29",
      type: "Visa",
      lastDigits: "346",
      color: "linear-gradient(135deg, #ef4524 0%, #ff7d00 100%)",
    },
    {
      id: 2,
      number: "5544 6657 8890",
      validity: "05/27",
      type: "MasterCard",
      lastDigits: "887",
      color: "linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)",
    },
    {
      id: 3,
      number: "8765 4321 1234",
      validity: "11/30",
      type: "Amex",
      lastDigits: "991",
      color: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.Titles}>
        <h3>Método de Pagamento</h3>
        <img src={Plus} alt="Adicionar Método" />
      </div>
      <div className={styles.carousel}>
        {mockCards.map((card, index) => {
          const isActive = index === currentIndex;
          const classNames = isActive
            ? `${styles.Card} ${styles.active}`
            : `${styles.Card}`;
          return (
            <div
              key={card.id}
              className={classNames}
              style={{ background: card.color }}
              onClick={() => handleCardClick(index)}
            >
              <div>
                <img src={Visa} alt="Logo do Cartão" className={styles.Logo} />
                <div className={styles.Data}>
                  <p>{card.lastDigits}</p>
                  <h4>{card.number}</h4>
                  <p>Validade {card.validity}</p>
                </div>
              </div>
              <div>
                <img
                  src={Aproximacao}
                  alt="Ícone Aproximação"
                  className={styles.Aproximacao}
                />
                <img src={Ship} alt="Ícone de Chip" className={styles.Ship} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MetodoPagamento;
