import React from 'react';
import styles from './Advisor.module.css'; // Import the CSS module

const Advisor = () => {
  return (
    <section id="advisor" className={styles.advisor}>
      <h2>IEEE-IAS SBC, IEM (Kolkata)</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.round}>
            <img src="./Images/Sourav_sir.jpg" alt="Advisor Photo" />
          </div>
          <li><strong>Web Master:</strong> Himangshu Singh</li>
          <li><strong>Advisor:</strong> Dr. Prof Sourav Das</li>
          <p>[A brief description of the advisor’s background, role, and contributions to the club.]</p>
        </div>
      </div>
    </section>
  );
};

export default Advisor;