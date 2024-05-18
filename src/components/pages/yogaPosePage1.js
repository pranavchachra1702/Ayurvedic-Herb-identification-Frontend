import React from 'react'
import '../heroSection.css'
import Pose1Card from '../yogaPoses/pose1'
import Footer from '../footer'
import backgroundImage from '../../images/img_yoga.jpeg'

function YogaPage1(){
    return (
        <>
        <div className='hero-container' style={{ '--background-image': `url(${backgroundImage})` }}>
         {/*<video src={require("../videos/video1.mp4")} autoPlay loop muted></video> */}
        <h1>Pose1</h1>
        <p>Keep yourself healthy from within</p>
        </div>
        <Pose1Card/>
        <Footer/>
        </>
    )
}

export default YogaPage1