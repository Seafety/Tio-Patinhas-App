import React, { useState } from "react";
import FinancialDashboard from "../../components/organisms/FinancialDashboard";
import CarteiraOverview from "../../components/molecules/CarteiraOverview";
import MarketStats from "../../components/molecules/MarketStats";
import styles from "./index.module.scss";
import Wallet from "../../components/molecules/Wallet";
import FastBuy from "../../components/molecules/FastBuy";
import ActivityHistory from "../../components/molecules/ActivityHistory";
import ethIcon from "../../asset/ethIcon.svg";
import cakeIcon from "../../asset/cakeIcon.svg";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      crypto: { name: "Ethereum", symbol: "ETH", img: ethIcon },
      action: "Venda",
      amount: 2154.0,
      status: "OK",
      date: "21 jun, 2024",
    },
    {
      id: 2,
      crypto: { name: "Pancake", symbol: "CAKE", img: cakeIcon },
      action: "Compra",
      amount: 1567.0,
      status: "Pendente",
      date: "15 jun, 2024",
    },
  ]);

  const [walletTotal, setWalletTotal] = useState(106065.0);

  const handleNewTransaction = (crypto, amount) => {
    const parsedAmount = parseFloat(amount.replace("R$", "").replace(",", "."));

    if (parsedAmount > walletTotal) {
      window.alert("Saldo insuficiente para realizar a compra.");
      return;
    }

    const newTransaction = {
      id: transactions.length + 1,
      crypto,
      action: "Compra",
      amount: parsedAmount,
      status: "OK",
      date: new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setTransactions([newTransaction, ...transactions]);
    setWalletTotal((prevTotal) => prevTotal - parsedAmount);
    window.alert("Compra realizada com sucesso!");
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.financialDashboard}>
        <FinancialDashboard walletTotal={walletTotal} />
      </div>
      <div className={styles.container}>
        <CarteiraOverview />
        <MarketStats />
      </div>
      <div className={styles.container2}>
        <Wallet />
        <FastBuy onBuy={handleNewTransaction} />
        <ActivityHistory transactions={transactions} />
      </div>
    </div>
  );
};

export default Dashboard;
