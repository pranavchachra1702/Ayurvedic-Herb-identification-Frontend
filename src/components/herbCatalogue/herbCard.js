// RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import HerbCardData from './herbCardData';
import CardItem from '../cardItem';

const HerbCard = () => {
  return (
    <>
      <div className='cards'>
        <h1>Our Ayurvedic Herbs</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            {HerbCardData.map((items, index) => (
              <ul key={index} className='cards__items'>
                {items.map(item => (
                    <CardItem
                      key={item.id}
                      src={item.src}
                      text={item.text}
                      label={item.label}
                      path ={item.path}
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

export default HerbCard;
