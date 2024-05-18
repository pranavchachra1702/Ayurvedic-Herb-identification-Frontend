import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardItem from '../cardItem';
import '../card.css';
import PoseCardData from './poseCardData';

const PoseCard = () => {
  return (
    <>
      <div className='cards'>
        <h1>Heal your body</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            {PoseCardData.map((items, index) => (
              <ul key={index} className='cards__items'>
                {items.map((item) => (
                  <CardItem
                    key={item.category} 
                    src={item.src}
                    text={item.text}
                    path={`/yoga-poses/${item.category}`} 
                  />
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PoseCard;
