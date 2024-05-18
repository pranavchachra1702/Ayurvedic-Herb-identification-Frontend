import React from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../cardItem';
import '../card.css';
import PoseCardData from './poseCardData';
import Footer from '../footer';

const PoseCategory = () => {
  const { category } = useParams(); 

  let categoryData = null;
  let categoryText = null;
  for (let categoryGroup of PoseCardData) {
    for (let cat of categoryGroup) {
      if (cat.category === category) {
        categoryData = cat.poses; 
        categoryText = cat.text;
        break;
      }
    }
    if (categoryData) break;
  }

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <h1>{categoryText}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {categoryData.map((poseGroup, groupIndex) => (
            <ul key={groupIndex} className='cards__items'>
              {poseGroup.map((pose) => (
                <CardItem
                  key={pose.id}
                  src={pose.src}
                  text={pose.text}
                  path={pose.path}
                />
              ))}
            </ul>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PoseCategory;
