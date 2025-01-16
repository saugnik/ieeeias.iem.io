import React from 'react';
import styles from './Navbar.module.css'; // Import the correct CSS module

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#cwc">CWC Members</a></li>
        <li><a href="#photos">Photos</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;