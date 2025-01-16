import React from 'react';
import './FacultyAdvisor.css';

const FacultyAdvisor = () => {
  return (
    <section id="faculty-advisor" className="faculty-advisor-section mx-auto my-5 p-5">
      <h2 className="text-[#2a5faa] mb-4 text-center">Faculty Advisor</h2>
      <div className="advisor-container flex flex-col items-center bg-white rounded-xl shadow-md p-5 text-center">
        {/* Image */}
        <div className="advisor-image-container w-full md:w-1/3 mb-4">
          <img 
            src="/images/faculty-advisor.jpg" 
            alt="Faculty Advisor" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Speech */}
        <div className="advisor-speech text-gray-700">
          <p>
            "It is a privilege to mentor and guide such brilliant and enthusiastic minds. 
            Our focus is not only on academic excellence but also on building character, fostering innovation, and creating impactful solutions. 
            I am proud to be part of a community that strives to make a difference and encourages a culture of learning and growth."
          </p>
          <p className="mt-3 font-bold text-gray-800">– Dr. John Doe</p>
          <p className="italic text-gray-600">Faculty Advisor, Department of Excellence</p>
        </div>
      </div>
    </section>
  );
};

export default FacultyAdvisor;
