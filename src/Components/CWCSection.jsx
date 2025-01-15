import React from 'react';
import './CWCSection.css';

const CWCSection = () => {
  const members = [
    {
      image: "sneha_di_profile pic  - Copy.jpg",
      title: "Chairperson",
      name: "Sneha Das"
    },
    {
      image: "avi da profile pic  - Copy.jpg",
      title: "Vice-Chairperson",
      name: "Avi Kundu"
    },
    {
      image: "raja das  - Copy.jpg",
      title: "Secretary",
      name: "Raja Das"
    },
    {
      images: ["arkadeep_da_profile pic.png"],
      title: "Treasurer",
      name: "Arkadeep"
    },
    {
      images: ["asmit da profile pic - Copy.jpg"],
      title: "Treasurer",
      name: "Asmit    "
    },
    {
      image: "himangshu - Copy.jpg",
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
                    src={`/images/${img}`}
                    alt={`${member.title} Photo`}
                    className="member-image"
                  />
                ))
              ) : (
                <img 
                  src={`/images/${member.image}`}
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
