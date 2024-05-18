import React from 'react'
import '../heroSection.css'
import PoseCard from '../yogaPoses/poseCard'
import Footer from '../footer'
import backgroundImage from '../../images/img_yoga.jpeg'

function YogaPage(){
    return (
        <>
        <div className='hero-container' style={{ '--background-image': `url(${backgroundImage})` }}>
         {/*<video src={require("../videos/video1.mp4")} autoPlay loop muted></video> */}
        <h1>Vedic Yoga</h1>
        <p>Learn about the concepts of Vedic Yoga</p>
        </div>
        <PoseCard/>
        <Footer/>
        </>
    )
}

export default YogaPage