import React from 'react';
import { useParams } from 'react-router-dom';
import PoseDetailsData from './poseCardTypeDetailData';
import './poseDetail.css';
import Footer from '../footer';

const PoseDetail = () => {
  const { category, id } = useParams();
  const pose = PoseDetailsData.categories
    .find((cat) => cat.category === category)
    .poses.find((pose) => pose.id === parseInt(id));

  if (!pose) {
    return <div>Pose not found</div>;
  }

  return (
    <>
    <div className="container">
      <h2 className="heading">{pose.text}</h2>
      <img src={pose.src} alt={pose.text} className="image" />
      <h3 className="subheading">Scientific Name: {pose.scientificName}</h3>
      <h4 className="section-title">Steps:</h4>
      <ul className="list">
        {pose.steps.map((step, index) => (
          <li key={index} className="list-item">{step}</li>
        ))}
      </ul>
      <h4 className="section-title">Benefits:</h4>
      <ul className="list">
        {pose.benefits.map((benefit, index) => (
          <li key={index} className="list-item">{benefit}</li>
        ))}
      </ul>
      <h4 className="section-title">Cautions:</h4>
      <ul className="list">
        {pose.cautions.map((caution, index) => (
          <li key={index} className="list-item">{caution}</li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
}

export default PoseDetail;
