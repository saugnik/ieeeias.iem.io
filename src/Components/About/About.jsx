import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About IEEE-IAS SBC, IEM</h2>
      <p>
        The IEEE Industry Applications Society (IAS) aims to advance the theory and practice of electrical and electronic engineering in the development, design, manufacture, and application of electrical systems, apparatus, devices, and controls.
      </p>
      <p>
        At IEM, IEEE-IAS fosters a community for students to grow in technical knowledge, engage in impactful projects, and participate in global competitions and conferences.
      </p>
    </section>
  );
};

export default About;