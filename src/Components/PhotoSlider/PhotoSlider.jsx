import React, { useEffect, useState } from 'react';
import styles from './PhotoSlider.module.css';

const PhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "./Images/event_pic1.jpg",
    "./Images/event_pic2.jpg",
    "./Images/event_pic3.jpg",
    "./Images/event_pic4.jpg",
    "./Images/event_pic5.jpg",
    "./Images/event_pic6.jpg",
    "./Images/event_pic7.jpg",
    "./Images/event_pic8.jpg",
    "./Images/event_pic9.jpg",
    "./Images/event_pic10.jpg",
    "./Images/event_pic11.jpg",
    "./Images/event_pic12.jpg",
    "./Images/event_pic13.jpg",
    "./Images/event_pic14.jpg",
    "./Images/event_pic15.jpg",
    "./Images/event_pic16.jpg",
    "./Images/event_pic17.jpg",
    "./Images/event_pic18.jpg",
  ];

  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 1000); // Change slide every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <section id="photos" className={styles.photos}>
      <h2>Photo Slider</h2>
      <div className={styles.slider}>
        <div
          className={styles.slides}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={styles.slideImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoSlider;