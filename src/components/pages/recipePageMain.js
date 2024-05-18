import React from 'react'
import '../heroSection.css'
import RecipeCard from '../recipe/recipeCard'
import Footer from '../footer'
import backgroundImage from '../../images/img_recipepage.jpg'

function RecipePageMain(){
    return (
        <>
        <div className='hero-container' style={{ '--background-image': `url(${backgroundImage})` }}>
         {/*<video src={require("../videos/video1.mp4")} autoPlay loop muted></video> */}
        <h1>Vedic Recipes</h1>
        <p>Grow Healthy</p>
        </div>
        <RecipeCard/>
        <Footer/>
        </>
    )
}

export default RecipePageMain