import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import EventsSection from './Components/EventSection';
import CWCSection from './Components/CWCSection';
import PhotoSlider from './Components/PhotoSlider';
import Footer from './Components/Footer';
import FacultyAdvisor from './Components/Faculty_advisor';

function App() {
  return (
    <div className="min-h-screen font-poppins m-0 p-0 bg-[#f5f5f5] bg-[url('https://www.w3schools.com/w3images/forestbridge.jpg')]">
      <Header />
      <Navigation />
      <main className="container mx-auto px-4">
        {/* About Section */}
        <section id="about" className="mx-auto my-5 p-5 max-w-[1000px] bg-white rounded-xl shadow-md">
          <h2 className="text-[#2a5faa] mb-4">About IEEE-IAS SBC, IEM</h2>
          <p className="leading-relaxed text-gray-700">
            The IEEE Industry Applications Society (IAS) aims to advance the theory and practice of electrical and electronic engineering in the development, design, manufacture, and application of electrical systems, apparatus, devices, and controls.
          </p>
          <p className="leading-relaxed text-gray-700 mt-4">
            At IEM, IEEE-IAS fosters a community for students to grow in technical knowledge, engage in impactful projects, and participate in global competitions and conferences.
          </p>
        </section>

        {/* Other Sections */}
        <EventsSection />
        <CWCSection />
        <PhotoSlider />

        {/* Faculty Advisor Section */}
        <FacultyAdvisor />
      </main>
      <Footer />
    </div>
  );
}

export default App;
