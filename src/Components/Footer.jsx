import React from 'react';
import "./footer.css"

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61565743400321&mibextid=ZbWKwL"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ieeeiasiemsbc/profilecard/?igsh=MTAyemZkejJmaXViZA=="
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/ieeeiasiem/"
    }
  ];

  return (
    <footer className="bg-[#004085] text-white text-center py-5 mt-10">
      <p className="m-0">&copy; 2024 IEEE-IAS IEM (Kolkata). All rights reserved.</p>
      
      <section id="contact" className="mt-5">
        <h2 className="text-2xl mb-4">Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us through the following contact details:</p>
        
        <div className="mt-4">
          <p className="mb-2">
            <strong>Email: </strong>
            <a href="mailto:ieeeias.iem@gmail.com" className="text-white hover:text-gray-200">
              ieeeias.iem@gmail.com
            </a>
          </p>
          
          <div className="mt-4">
            <strong className="block mb-2">Follow Us on Social Media:</strong>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;