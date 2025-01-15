import React from 'react';
import './Navigation.css';

const Navigation = () => {
  const menuItems = ['About', 'Events', 'CWC Members', 'Photos', 'Contact'];

  return (
    <nav className="nav">
      <ul className="nav-list">
        {menuItems.map((item) => (
          <li key={item} className="nav-item">
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="nav-link"
              aria-label={`Navigate to ${item}`} // Accessibility improvement
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
