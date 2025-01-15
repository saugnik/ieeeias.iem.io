import React from 'react';
import './../../src/Components/PhotoSlider.css';

const PhotoSlider = () => {
  const images = [
    "event_pic_1.jpg",
    "event_pic2.jpg",
    "event_pic3.jpg",
    "event_pic4.jpg",
    "event_pic5.jpg",
    "event_pic 6.jpg",
    "event_pic7.jpg"
  ];

  return (
    <section id="photos" className="photos-section mx-auto my-5 p-5">
      <h2>Photo Slider</h2>
      <div className="slider-container relative overflow-hidden rounded-lg shadow-lg">
        <div className="slider-track flex w-full h-[400px]">
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img 
                src={`/Images/${image}`} 
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
