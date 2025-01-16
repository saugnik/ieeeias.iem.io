import React from 'react';
import styles from './Cwcmembers.module.css';

const CwcMembers = () => {
  return (
    <section id="cwc" className={styles.cwc}>
      <h2>CWC Members</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="./Images/sneha_di_profile.jpg" className={styles.round} alt="Chairperson Photo" />
          <li><strong>Chairperson:</strong> Sneha Das</li>
        </div>
        <div className={styles.card}>
          <img src="./Images/avi_da.jpg" className={styles.round} alt="Vice-Chairperson Photo" />
          <li><strong>Vice-Chairperson:</strong> Avi Kundu</li>
        </div>
        <div className={styles.card}>
          <img src="./Images/raja_das.jpg" className={styles.round} alt="Secretary Photo" />
          <li><strong>Secretary:</strong> Raja Das</li>
        </div>
        <div className={styles.card}>
          <div className={styles.collidedImages}>
            <img src="./Images/arkadeep.png" className={styles.round} alt="Treasurer" />
            <img src="./Images/asmit_da.jpg" className={styles.round} alt="Treasurer" />
          </div>
          <li><strong>Treasurer:</strong> Arkadeep & Asmit</li>
        </div>
        <div className={styles.card}>
          <img src="./Images/himangshu.jpg" className={styles.round} alt="Web Master Photo" />
          <li><strong>Web Master:</strong> Himangshu Singh</li>
        </div>
      </div>
    </section>
  );
};

export default CwcMembers;