import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#004085] to-[#2a5faa] text-white p-5 shadow-md flex justify-between items-center sticky top-0 z-[1000]">
      <div className="logo-container">
        <img src="th (1).jpeg" alt="IEEE-IAS Logo" className="w-[100px]" />
      </div>
      <div className="header-title flex-grow text-center">
        <h1 className="text-2xl">IEEE-IAS SBC, IEM (Kolkata)</h1>
      </div>
      <div className="logo-container">
        <img src="th.jpeg" alt="IEM Logo" className="w-[100px]" />
      </div>
    </header>
  );
};

export default Header;