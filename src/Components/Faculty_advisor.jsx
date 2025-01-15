import React from 'react';
import './Faculty_Advisor.css';
import SouravSirImage from './../../src/public/Images/sourav_sir.jpg';

const FacultyAdvisor = () => {
  return (
    <section id="faculty-advisor" className="faculty-advisor-section mx-auto my-5 p-5">
      <h2 className="text-[#2a5faa] mb-4 text-center font-semibold text-2xl">Faculty Advisor</h2>
      <div className="advisor-container flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-5 text-center md:text-left">
        
        {/* Image */}
        <div className="advisor-image-container w-full md:w-1/3 mb-4 md:mb-0 md:mr-5">
          <img 
            src={SouravSirImage} 
            alt="Dr. Sourav Das - Faculty Advisor" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Speech */}
        <div className="advisor-speech text-gray-700 flex-grow">
          <p>
            "It is a privilege to mentor and guide such brilliant and enthusiastic minds. 
            Our focus is not only on academic excellence but also on building character, fostering innovation, and creating impactful solutions. 
            I am proud to be part of a community that strives to make a difference and encourages a culture of learning and growth."
          </p>
          <p className="mt-3 font-bold text-gray-800">– Dr. Sourav Das</p>
          <p className="italic text-gray-600">Faculty Advisor, Department of Electrical Engineering</p>
        </div>
      </div>
    </section>
  );
};

export default FacultyAdvisor;
