import React from 'react';
import Arka from "./../public/Images/arkadeep.png";
import './CWCSection.css';

const CWCSection = () => {
  const members = [
    {
      image: "sneha_di_profile.jpg",
      title: "Chairperson",
      name: "Sneha Das"
    },
    {
      image: "avi_da.jpg",
      title: "Vice-Chairperson",
      name: "Avi Kundu"
    },
    {
      image: "raja_das.jpg",
      title: "Secretary",
      name: "Raja Das"
    },
    {
      image: Arka,
      title: "Treasurer",
      name: "Arkadeep"
    },
    {
      images: ["asmit_da.jpg"],
      title: "Treasurer",
      name: "Asmit    "
    },
    {
      image: "himangshu.jpg",
      title: "Web Master",
      name: "Himangshu Singh"
    }
  ];

  return (
    <section id="cwc-members" className="cwc-section">
      <h2 className="cwc-title">CWC Members</h2>
      <div className="cwc-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <div className="member-images">
              {member.images ? (
                member.images.map((img, i) => (
                  <img 
                    key={i}
                    src={`/Images/${img}`}
                    alt={`${member.title} Photo`}
                    className="member-image"
                  />
                ))
              ) : (
                <img 
                  src={`/Images/${member.image}`}
                  alt={`${member.title} Photo`}
                  className="member-image"
                />
              )}
            </div>
            <div className="member-info">
              <strong className="member-title">{member.title}:</strong> 
              <span className="member-name">{member.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CWCSection;
