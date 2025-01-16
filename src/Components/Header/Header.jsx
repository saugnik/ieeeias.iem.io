import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="./images/th.jpeg" alt="IEEE-IAS Logo" />
      </div>
      <div className={styles.headerTitle}>
        <h1>IEEE-IAS SBC, IEM (Kolkata)</h1>
      </div>
      <div className={styles.logoContainer}>
        <img src="./images/th (1).jpeg" alt="IEM Logo" />
      </div>
    </header>
  );
};

export default Header;