import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="./Images/th.jpeg" alt="IEEE-IAS Logo" className={styles.logo} />
      </div>
      <div className={styles.headerTitle}>
        <h1>IEEE-IAS SBC, IEM (Kolkata)</h1>
      </div>
      <div className={styles.logoContainer}>
        <img src="./Images/th (1).jpeg" alt="IEM Logo" className={styles.logo} />
      </div>
    </header>
  );
};

export default Header;