import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DuckMarket from "../../../asset/duckmarket.jpg";
import DashBoardIcon from "../../../asset/SideBar/Dashboard.svg";
import MarketIcon from "../../../asset/SideBar/Market.svg";
import TransactionsIcon from "../../../asset/SideBar/Transactions.svg";
import PerfilIcon from "../../../asset/SideBar/Perfil.svg";
import ConfigIcon from "../../../asset/SideBar/Config.svg";
import HelpIcon from "../../../asset/SideBar/Help.svg";
import ExitIcon from "../../../asset/SideBar/Exit.svg";
import Arrow from "../../../asset/SideBar/Arrow.svg";
import styles from "./index.module.scss";

const SideBar = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    if (path === "/" || path === "/dashboard") {
      setActiveNav("Dashboard");
    } else if (path.includes("/market")) {
      setActiveNav("Market");
    } else if (path.includes("/transactions")) {
      setActiveNav("Transactions");
    } else if (path === "/profile") {
      setActiveNav("Profile");
    } else if (path === "/config") {
      setActiveNav("Config");
    }
  }, [location]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
       <Link to="/">
        <img
          src={DuckMarket}
          alt="DuckMarket Logo"
          className={styles.logoImage}
        /></Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={activeNav === "Dashboard" ? styles.active : ""}>
            <Link to="/">
              <img
                src={DashBoardIcon}
                alt="DashBoardIcon"
                className={styles.navImage}
              />
              Dashboard
            </Link>
          </li>
          <li className={activeNav === "Market" ? styles.active : ""}>
            <Link to="/market">
              <img
                src={MarketIcon}
                alt="MarketIcon"
                className={styles.navImage}
              />
              Mercado
            </Link>
          </li>
          <li className={activeNav === "Transactions" ? styles.active : ""}>
            <Link to="/transactions">
              <img
                src={TransactionsIcon}
                alt="TransactionsIcon"
                className={styles.navImage}
              />
              Transações
            </Link>
          </li>
          <li className={activeNav === "Profile" ? styles.active : ""}>
            <Link to="/profile">
              <img
                src={PerfilIcon}
                alt="PerfilIcon"
                className={styles.navImage}
              />
              Perfil
            </Link>
          </li>
          <li className={activeNav === "Config" ? styles.active : ""}>
            <Link to="/config">
              <img
                src={ConfigIcon}
                alt="ConfigIcon"
                className={styles.navImage}
              />
              Configurações
            </Link>
          </li>
          <hr className={styles.separator} />
          <li>
            <a href="">
              <img src={HelpIcon} alt="HelpIcon" className={styles.navImage} />
              Ajuda
            </a>
          </li>
          <li>
            <a href="">
              <img src={ExitIcon} alt="ExitIcon" className={styles.navImage} />
              Sair
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={styles.subnav}>
          <li>
            <a>
              Suporte
              <img src={Arrow} alt="Arrow" className={styles.logoImage} />
            </a>
          </li>
          <li>
            <a>
              Documentação
              <img src={Arrow} alt="Arrow" className={styles.logoImage} />
            </a>
          </li>
          <li>
            <a>
              Contato
              <img src={Arrow} alt="Arrow" className={styles.logoImage} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
