import React from 'react';
import styles from './Events.module.css';

const Events = () => {
  return (
    <section id="events" className={styles.events}>
      <h2>Events</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="./Images/event.jpg" alt="Event 1" />
          <li>
            <strong>Event 1:</strong> AI: Code The Future – Date: 19th to 21st Oct
          </li>
        </div>
        <div className={styles.card}>
          <li>
            <strong>Event 2:</strong> Coming Soon – Date: Coming Soon
          </li>
        </div>
      </div>
    </section>
  );
};

export default Events;
