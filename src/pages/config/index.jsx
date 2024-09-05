import React, { useState } from "react";
import styles from "./index.module.scss";
import AccountSection from "../../components/organisms/AccountSection";
import NotificationSettings from "../../components/organisms/NotificationSettings";
import TwoFactorAuth from "../../components/organisms/TwoFactorAuth";
import SessionManagement from "../../components/organisms/SessionManagement";
import PrivacySettings from "../../components/organisms/PrivacySettings";
import HistoryAcess from "../../components/organisms/HistoryAcess";


const Config = () => {
  const [activeSection, setActiveSection] = useState('account');

  const renderSection = () => {
    switch (activeSection) {
      case 'account':
        return (
          <>
            <AccountSection />
            <NotificationSettings />
          </>
        );
      case 'security':
        return (
          <>
            <TwoFactorAuth />
            <SessionManagement />
            <HistoryAcess/>
            <PrivacySettings />
          </>
        );
      case 'theme':
        return <div>Em desenvolvimento...</div>; 
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <button 
          className={`${styles.navButton} ${activeSection === 'account' ? styles.active : ''}`}
          onClick={() => setActiveSection('account')}
        >
          Conta
        </button>
        <button 
          className={`${styles.navButton} ${activeSection === 'security' ? styles.active : ''}`}
          onClick={() => setActiveSection('security')}
        >
          Segurança
        </button>
        <button 
          className={`${styles.navButton} ${activeSection === 'theme' ? styles.active : ''}`}
          onClick={() => setActiveSection('theme')}
        >
          Tema
        </button>
      </div>
      <div className={styles.content}>
        {renderSection()}
      </div>
    </div>
  );
};

export default Config;