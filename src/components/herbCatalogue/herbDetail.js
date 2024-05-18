import React from 'react';
import { useParams } from 'react-router-dom';
import './herbDetail.css';
import Footer from '../footer';
import HerbDetailData from './herbDetailData'; 
import HerbCardData from './herbCardData';

const HerbDetail = () => {
  const { id } = useParams();
  let herbImgSrc;
  HerbCardData.forEach(herbGroup => {
    const herbImg = herbGroup.find(herb => herb.id === parseInt(id));
    if (herbImg) {
      herbImgSrc = herbImg.src;
    }
  });

  console.log(herbImgSrc);
  const herb = HerbDetailData.find(herb => herb.id === parseInt(id)); // Assuming your data is structured with an 'id' field
  

  if (!herb) {
    return <div className="herb-container"><div className="herb">Herb not found</div></div>;
  }

  return (
    <>
      <div className="herb-container">
        <div className="herb">
          <div className="herb-header">
            <img src={herbImgSrc} alt={herb["Common Name"]} />
          </div>
          <div className="herb-content">
            <h1 className="herb-title">{herb["Common Name"]}</h1>
            <p className="herb-description">{herb.Description}</p>
            <div className="herb-section">
              <h2 className="herb-section-title">Scientific Name:</h2>
              <p>{herb["Scientific Name"]}</p>
            </div>
            <div className="herb-section">
              <h2 className="herb-section-title">Sanskrit Name:</h2>
              <p>{herb["Sanskrit Name"]}</p>
            </div>
            <div className="herb-section">
              <h2 className="herb-section-title">Family:</h2>
              <p>{herb.Family}</p>
            </div>
            <div className="herb-section">
              <h2 className="herb-section-title">Parts Used:</h2>
              <p>{herb["Parts Used"]}</p>
            </div>
            <div className="herb-section">
              <h2 className="herb-section-title">Ayurvedic Properties:</h2>
              <ul>
                {Object.entries(herb["Ayurvedic Properties"]).map(([key, value]) => (
                  <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
              </ul>
            </div>
            <div className="herb-section">
              <h2 className="herb-section-title">Habitat:</h2>
              <p className="herb-section-content">{herb.Habitat}</p>
            </div>
            <div className="herb-section">
              <h2 className="herb-section-title">Curative Powers:</h2>
              <ul>
                {herb["Curative Powers"].map((power, index) => (
                  <li key={index}>{power}</li>
                ))}
              </ul>
            </div>
            <div className="herb-section">
              <h2 className="herb-section-title">Cautionary Notes:</h2>
              <p className="herb-section-content">{herb["Cautionary Notes"]}</p>
            </div>
            <div className="herb-section">
              <h2 className="herb-section-title">Ritualistic Uses:</h2>
              <p className="herb-section-content">{herb["Ritualistic Uses"]}</p>
            </div>
            <div className="herb-section">
              <h2 className="herb-section-title">Research:</h2>
              <ul>
                {herb.Research.map((link, index) => (
                  <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">Research {index + 1}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HerbDetail;
