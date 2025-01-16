import React from 'react';
import './Cwcmembers.module.css';

const CwcMembers = () => {
  return (
    <section id="cwc">
      <h2>CWC Members</h2>
      <div className="cards">
        <div className="card">
          <img src="./Images/sneha_di_profile.jpg" className="round" alt="Chairperson Photo" />
          <li><strong>Chairperson:</strong> Sneha Das</li>
        </div>
        <div className="card">
          <img src="./Images/avi_da.jpg" className="round" alt="Vice-Chairperson Photo" />
          <li><strong>Vice-Chairperson:</strong> Avi Kundu</li>
        </div>
        <div className="card">
          <img src="./Images/raja_das.jpg" className="round" alt="Secretary Photo" />
          <li><strong>Secretary:</strong> Raja Das</li>
        </div>
        <div className="card">
          <img src="./Images/arkadeep.png" className="round" alt="Treasurer" />
          <img src="./Images/asmit_da.jpg" className="round" alt="Treasurer" />
          <li><strong>Treasurer:</strong> Arkadeep & Asmit</li>
        </div>
        <div className="card">
          <img src="./Images/himangshu.jpg" className="round" alt="Web Master Photo" />
          <li><strong>Web Master:</strong> Himangshu Singh</li>
        </div>
      </div>
    </section>
  );
};

export default CwcMembers;