import React from 'react'
import '../heroSection.css'
import HerbCard from '../herbCatalogue/herbCard'
import Footer from '../footer'
import backgroundImage from '../../images/img_herb_catalogue.png'

function HerbCatalogue(){
    return (
        <>
        <div className='hero-container' style={{ '--background-image': `url(${backgroundImage})` }}>
         {/*<video src={require("../videos/video1.mp4")} autoPlay loop muted></video> */}
        <h1>Herb Catalogue</h1>
        <p>Know your herbs</p>
        </div>
        <HerbCard/>
        <Footer/>
        </>
    )
}

export default HerbCatalogue