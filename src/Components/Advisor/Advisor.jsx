import React from 'react';
import './Advisor.module.css'

const Advisor = () => {
  return (
    <section id="advisor">
      <h2>Advisor</h2>
      <div className="cards">
        <div className="card">
          <img src="./Images/Sourav_sir.jpg" className="round" alt="Advisor Photo" />
          <li><strong>Advisor:</strong> Dr. Prof Sourav Das</li>
          <p>[A brief description of the advisor's background, role, and contributions to the club.]</p>
        </div>
      </div>
    </section>
  );
};

export default Advisor;