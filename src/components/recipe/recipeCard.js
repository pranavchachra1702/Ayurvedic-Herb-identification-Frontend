// RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCardData from './recipeCardData';
import CardItem from '../cardItem';

const RecipeCard = () => {
  return (
    <>
      <div className='cards'>
        <h1>Nourish your soul</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            {RecipeCardData.map((items, index) => (
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

export default RecipeCard;
