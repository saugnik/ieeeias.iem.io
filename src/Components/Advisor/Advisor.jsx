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
          <p>[The Institute of Electrical and Electronics Engineers (IEEE)-Industry Application society (IAS) Student Branch Chapter (SBC)(IEEE-IAS SBC, Code: IA14301D) started its journey in 2024 and is currently coordinated under the active leadership of Prof. Dr. Sourav Das, department of Electrical Engineering, IEM Kolkata. Our chapter envisions a future where electrical engineering students from IEM Kolkata are at the forefront of technological innovation, making significant contributions to our society. We aspire to create a platform that nurtures creativity, critical thinking, and a lifelong passion for learning. Our mission is to empower students with the knowledge, skills, and opportunities to excel in their academic and professional pursuits. We aim to bridge the gap between academia and industry by fostering collaborations and providing practical exposure to real-world challenges.]</p>
        </div>
      </div>
    </section>
  );
};

export default Advisor;