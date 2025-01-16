import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import CwcMembers from './Components/CwcMembers/CwcMembers';
import Advisor from './Components/Advisor/Advisor';
import PhotoSlider from './Components/PhotoSlider/PhotoSlider';
import Footer from './Components/Footer/Footer';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <About />
      <Events />
      <CwcMembers />
      <Advisor />
      <PhotoSlider />
      <Footer />
    </div>
  );
};

export default App;