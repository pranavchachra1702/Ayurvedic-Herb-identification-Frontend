import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeCardDetailData from './recipeCardDetailData';
import './recipe.css'; 
import RecipeCardData from './recipeCardData';
import Footer from '../footer';

const RecipeDetail = () => {
  const { id } = useParams();
  let recipeImgSrc;
  RecipeCardData.forEach(recipeGroup => {
    const recipeImg = recipeGroup.find(recipe => recipe.id === parseInt(id));
    if (recipeImg) {
      recipeImgSrc = recipeImg.src;
    }
  });
  const recipe = RecipeCardDetailData.find(recipe => recipe.id === parseInt(id));
 
  if (!recipe) {
    return <div className="recipe-container"><div className="recipe">Recipe not found</div></div>;
  }

  return (
    <>
    <div className="recipe-container">
      <div className="recipe">
        <div className="recipe-header" style={{ '--background-image': `url(${recipeImgSrc})` }}>
          <h1 className="recipe-title">{recipe.title}</h1>
          <p className="recipe-description">{recipe.description}</p>
        </div>
        <div className="recipe-content">
          <div className="recipe-section">
            <h2 className="recipe-section-title">Ingredients:</h2>
            <ol className="recipe-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="recipe-item">{ingredient}</li>
              ))}
            </ol>
          </div>
          <div className="recipe-section">
            <h2 className="recipe-section-title">Instructions:</h2>
            <ol className="recipe-list">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="recipe-item">{instruction}</li>
              ))}
            </ol>
          </div>
          {recipe.healthBenefits && (
            <div className="recipe-section">
              <h2 className="recipe-section-title">Health Benefits:</h2>
              <ul className="recipe-list">
                {recipe.healthBenefits.map((benefit, index) => (
                  <li key={index} className="recipe-item">{benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default RecipeDetail;
