import React from 'react';
import './PhotoSlider.css';

const PhotoSlider = () => {
  const images = [
    "event pic1.jpg",
    "event pic2.jpg",
    "event pic3.jpg",
    "event pic4.jpg",
    "event pic5.jpg",
    "event pic 6.jpg",
    "event pic 7.jpg"
  ];

  

  return (
    <section id="photos" className="photos-section mx-auto my-5 p-5">
      <h2>Photo Slider</h2>
      <div className="slider-container relative overflow-hidden rounded-lg shadow-lg">
        <div className="slider-track flex w-full h-[400px]">
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img 
                src={`/images/${image}`} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoSlider;
