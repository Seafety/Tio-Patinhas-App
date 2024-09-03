import React from "react";
import FinancialDashboard from "../../components/organisms/FinancialDashboard";
import CarteiraOverview from "../../components/molecules/CarteiraOverview";
import MarketStats from "../../components/molecules/MarketStats";
import styles from "./index.module.scss";
import Wallet from "../../components/molecules/Wallet";
import FastBuy from "../../components/molecules/FastBuy";
import ActivityHistory from "../../components/molecules/ActivityHistory";

const Dashboard = () => {
  return <div className={styles.dashboard}>
    <FinancialDashboard />
    <div className={styles.container}>
    <CarteiraOverview />
    <MarketStats />
    </div>
    <div className={styles.container2}>
      <Wallet />
      <FastBuy />
      <ActivityHistory />
    </div>
  </div>;
};

export default Dashboard;
