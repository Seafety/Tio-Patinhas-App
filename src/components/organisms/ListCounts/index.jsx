import React, { useState } from "react";
import styles from "./index.module.scss";
import SearchBar from "../../molecules/SearchBar";
import FillStar from "../../../asset/StarFill.svg";
import Star from "../../../asset/Star.svg";
import Eye from "../../../asset/Eye.svg";
import EyeOff from "../../../asset/Eye-crossed.svg";
import SettingsWhite from "../../../asset/SettingsWhite.svg";

const accountsData = [
  {
    id: 1,
    name: "PatinhasBusiness",
    owner: "Tio Patinhas",
    balance: "R$ 965.000.691,00",
    isFavorite: true,
    isBalanceVisible: false,
  },
  {
    id: 2,
    name: "DuckTales",
    owner: "Pato Donald",
    balance: "R$ 691,00",
    isFavorite: false,
    isBalanceVisible: true,
  },
  {
    id: 3,
    name: "McDuck Investimentos",
    owner: "Tio Patinhas",
    balance: "R$ 3.000.000,00",
    isFavorite: true,
    isBalanceVisible: false,
  },
  {
    id: 4,
    name: "Donald Inc.",
    owner: "Pato Donald",
    balance: "R$ 100.000,00",
    isFavorite: false,
    isBalanceVisible: true,
  },
  {
    id: 5,
    name: "Huey Enterprises",
    owner: "Zezinho",
    balance: "R$ 500.000,00",
    isFavorite: false,
    isBalanceVisible: true,
  },
  {
    id: 6,
    name: "Dewey Co.",
    owner: "Huguinho",
    balance: "R$ 200.000,00",
    isFavorite: false,
    isBalanceVisible: false,
  },
  {
    id: 7,
    name: "Louie Holdings",
    owner: "Luizinho",
    balance: "R$ 50.000,00",
    isFavorite: true,
    isBalanceVisible: true,
  },
];

const ListCounts = () => {
  const [accounts, setAccounts] = useState(accountsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState("All");

  const owners = [
    "All",
    "Tio Patinhas",
    "Pato Donald",
    "Zezinho",
    "Huguinho",
    "Luizinho",
  ];

  const toggleBalanceVisibility = (id) => {
    setAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.id === id
          ? { ...account, isBalanceVisible: !account.isBalanceVisible }
          : account
      )
    );
  };

  const toggleFavorite = (id) => {
    setAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.id === id
          ? { ...account, isFavorite: !account.isFavorite }
          : account
      )
    );
  };

  const filteredAccounts = accounts.filter((account) => {
    const matchesSearchTerm =
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.owner.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesOwner =
      selectedOwner === "All" || account.owner === selectedOwner;

    return showFavorites
      ? account.isFavorite && matchesSearchTerm && matchesOwner
      : matchesSearchTerm && matchesOwner;
  });

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li>Contas</li>
          <li className={styles.active}>Empresas</li>
        </ul>
      </nav>

      <div className={styles.searchBarContainer}>
        <SearchBar
          placeholder="Busque uma carteira"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className={styles.ownerSelect}
          value={selectedOwner}
          onChange={(e) => setSelectedOwner(e.target.value)}
        >
          {owners.map((owner) => (
            <option key={owner} value={owner}>
              {owner}
            </option>
          ))}
        </select>
        <button
          className={styles.favoriteButton}
          onClick={() => setShowFavorites(!showFavorites)}
        >
          <img src={showFavorites ? FillStar : Star} alt="Favoritos" />
        </button>
      </div>

      <div className={styles.accountList}>
        {filteredAccounts.map((account) => (
          <div key={account.id} className={styles.accountCard}>
            <div className={styles.accountInfo}>
              <p className={styles.accountName}>{account.name}</p>
              <p className={styles.accountOwner}>Owner: {account.owner}</p>
            </div>
            <div className={styles.accountActions}>
              <button
                className={styles.toggleBalanceButton}
                onClick={() => toggleBalanceVisibility(account.id)}
              >
                <img
                  src={account.isBalanceVisible ? Eye : EyeOff}
                  alt="Ver Saldo"
                />
                <span>
                  {account.isBalanceVisible
                    ? account.balance
                    : "R$************"}
                </span>
              </button>
              <button
                className={styles.favoriteToggle}
                onClick={() => toggleFavorite(account.id)}
              >
                <img
                  src={account.isFavorite ? FillStar : Star}
                  alt="Favoritar"
                />
              </button>
              <img
                src={SettingsWhite}
                alt="Configurações"
                className={styles.settingsIcon}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCounts;
