import React from 'react';
import './PhotoSlider.module.css';

const PhotoSlider = () => {
  return (
    <section id="photos">
      <h2>Photo Slider</h2>
      <div className="slider">
        <div className="slides">
          <img src="./Images/event_pic1.jpg" alt="Image 1" />
          <img src="./Images/event_pic2.jpg" alt="Image 2" />
          <img src="./Images/event pic3.jpg" alt="Image 3" />
          <img src="./Images/event_pic4.jpg" alt="Image 4" />
          <img src="./Images/event_pic5.jpg" alt="Image 5" />
          <img src="./Images/event_pic6.jpg" alt="Image 6" />
          <img src="./Images/event_pic7.jpg" alt="Image 7" />
        </div>
      </div>
    </section>
  );
};

export default PhotoSlider;