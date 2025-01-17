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
          <img src="./Images/Event2.jpg" alt="Event 2" />
          <li>
            <strong>Event 2:</strong>  – Date: 19th to 21st Oct
          </li>
        </div>
        <div className={styles.card}>
          <img src="./Images/event3.jpg" alt="Event 3" />
          <li>
            <strong>Event 3:</strong> – Date: 19th to 21st Oct
          </li>
        </div>
        <div className={styles.card}>
          <img src="./Images/event4.jpg" alt="Event 4" />
          <li>
            <strong>Event 3:</strong>  – Date: 19th to 21st Oct
          </li>
        </div>
        <div className={styles.card}>
          <img src="./Images/event5.jpg" alt="Event 5" />
          <li>
            <strong>Event 3:</strong>  – Date: 19th to 21st Oct
          </li>
        </div>
      </div>
    </section>
  );
};

export default Events;
