import React from "react";
import FinancialDashboard from "../../components/organisms/FinancialDashboard";
import CarteiraOverview from "../../components/molecules/CarteiraOverview";
import MarketStats from "../../components/molecules/MarketStats";
import styles from "./index.module.scss";

const Dashboard = () => {
  return <div>
    <FinancialDashboard />
    <div className={styles.container}>
    <CarteiraOverview />
    <MarketStats />
    </div>
  </div>;
};

export default Dashboard;
