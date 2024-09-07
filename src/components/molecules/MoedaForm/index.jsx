import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import btcIcon from "../../../asset/btcIcon.svg";
import ethIcon from "../../../asset/ethIcon.svg";
import dogeIcon from "../../../asset/dogeIcon.svg";
import cakeIcon from "../../../asset/cakeIcon.svg";
import tether from "../../../asset/tether.svg";
import litecoin from "../../../asset/litecoin.svg";
import coin from "../../../asset/coin.svg";

const moedas = [
  { name: "Selecione a moeda", symbol: "Crypto", img: coin, preco: 0 },
  { name: "Tether", symbol: "USDT", img: tether, preco: 5.7 },
  { name: "Litecoin", symbol: "LTC", img: litecoin, preco: 367.35 },
  { name: "Bitcoin", symbol: "BTC", img: btcIcon, preco: 312492 }, // Valor correto
  { name: "Ethereum", symbol: "ETH", img: ethIcon, preco: 13.203 },
  { name: "Doge", symbol: "DOGE", img: dogeIcon, preco: 0.55 },
  { name: "Pancake", symbol: "CAKE", img: cakeIcon, preco: 9.8 },
];

const MoedaForm = ({ tipo, onAction }) => {
  const [moedaSelecionada, setMoedaSelecionada] = useState(moedas[0]);
  const [quantidade, setQuantidade] = useState("");
  const [precoCalculado, setPrecoCalculado] = useState("0,00");

  useEffect(() => {
    const valorNumerico = parseFloat(quantidade.replace(",", ".")) || 0;
    if (moedaSelecionada.preco) {
      const calculo = moedaSelecionada.preco * valorNumerico;
      setPrecoCalculado(
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(calculo)
      );
    } else {
      setPrecoCalculado("R$ 0,00");
    }
  }, [moedaSelecionada, quantidade]);

  const handleMoedaChange = (e) => {
    const selectedMoeda = moedas.find((m) => m.symbol === e.target.value);
    setMoedaSelecionada(selectedMoeda);
  };

  const handleQuantidadeChange = (e) => {
    setQuantidade(e.target.value);
  };

  const handleAction = () => {
    const valorNumerico = parseFloat(quantidade.replace(",", ".")) || 0;
    if (valorNumerico > 0 && moedaSelecionada.preco > 0) {
      onAction(
        moedaSelecionada,
        valorNumerico,
        parseFloat(
          precoCalculado.replace("R$", "").replace(".", "").replace(",", ".")
        )
      );
    } else {
      alert(
        "Por favor, selecione uma moeda válida e insira uma quantidade maior que zero."
      );
    }
  };

  return (
    <div className={styles.moedaForm}>
      <div className={styles.header}>
        <span>{tipo} Moeda</span>
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.moedaSelect}>
          <img
            src={moedaSelecionada.img}
            alt={moedaSelecionada.name}
            className={styles.moedaIcon}
          />
          <select value={moedaSelecionada.symbol} onChange={handleMoedaChange}>
            {moedas.map((moeda) => (
              <option key={moeda.symbol} value={moeda.symbol}>
                {moeda.name} ({moeda.symbol})
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inputContainer}>
          <input
            id="quantidade"
            placeholder=" "
            type="text"
            value={quantidade}
            onChange={handleQuantidadeChange}
            min="0"
          />
          <label htmlFor="quantidade">Qtd</label>
        </div>
      </div>
      <div className={styles.inputPreco}>
        <label className={styles.labelPreco}>Preço</label>
        <span className={styles.preco}>{precoCalculado}</span>
      </div>
      <button
        className={
          tipo === "Comprar" ? styles.comprarButton : styles.venderButton
        }
        onClick={handleAction}
      >
        {tipo}
      </button>
    </div>
  );
};

export default MoedaForm;
