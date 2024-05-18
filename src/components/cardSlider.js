// CardSlider.js
import React, { useState } from 'react';
import './cardSlider.css';
import { Link } from 'react-router-dom';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Adjust the number based on total slides
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Adjust the number based on total slides
  };

  return (
    <div className="card-slider">
      <div className="card-slider-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        <div className="card-slider-item">
          <div className="information-section">
            <h2>How It Works</h2>
            <ol>
              <li>Capture a Clear Image:
                <ul>
                  <li>Ensure the herb leaf is clearly visible and centered.</li>
                  <li>Use good lighting and avoid cluttered backgrounds.</li>
                </ul>
              </li>
              <li>Upload Your Image:
                <ul>
                  <li>Click the upload button below and select an image from your device.</li>
                </ul>
              </li>
              <li>Get Instant Results:
                <ul>
                  <li>Our model will identify the herb and provide a summary of its uses and benefits.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
        <div className="card-slider-item">
          <div className="information-section">
            <h2>Why Use Our Tool?</h2>
            <ul>
              <li>Accurate Identification: Leveraging the power of advanced machine learning.</li>
              <li>Comprehensive Information: Summaries and detailed pages for each herb.</li>
              <li>User-Friendly: Simple upload process and instant results.</li>
            </ul>
          </div>
        </div>
        <div className="card-slider-item">
          <div className="information-section">
            <h2>Explore More</h2>
            <ul>
              <li><Link to="/herb-catalogue">Herb Catalogue</Link>: Discover detailed information about various Ayurvedic herbs.</li>
              <li><Link to="/yoga-poses">Vedic Yoga</Link>: Learn about yoga practices that align with Ayurvedic principles.</li>
              <li><Link to="/vedic-recipies">Vedic Recipes</Link>: Find recipes that incorporate Ayurvedic herbs for health and wellness.</li>
              <li><Link to="/dosha-quiz">Dosha Quiz</Link>: Take the quiz to find out your Ayurvedic dosha.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="slider-nav prev" onClick={handlePrev}>‹</div>
      <div className="slider-nav next" onClick={handleNext}>›</div>
    </div>
  );
};

export default CardSlider;
