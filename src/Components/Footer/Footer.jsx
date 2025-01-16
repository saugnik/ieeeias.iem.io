import React from 'react';
import './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 IEEE-IAS IEM (Kolkata). All rights reserved.</p>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us through the following contact details:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:ieeeias.iem@gmail.com">ieeeias.iem@gmail.com</a></li>
          <li><strong>Phone:</strong> +91 12345 67890</li>
          <li><strong>Follow Us on Social Media:</strong></li>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61565743400321&mibextid=ZbWKwL" target="_blank">Facebook</a></li>
            <li><a href="https://www.instagram.com/ieeeiasiemsbc/profilecard/?igsh=MTAyemZkejJmaXViZA==" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/ieeeiasiem/" target="_blank">LinkedIn</a></li>
          </ul>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;