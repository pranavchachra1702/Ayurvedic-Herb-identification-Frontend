import React from 'react'
import '../App.css'
import { Button } from './button'
import './heroSection.css'
import BackgroundImage from '../images/img1.jpeg'


function HeroSection() {
  return (
    <div className='hero-container' style={{ '--background-image': `url(${BackgroundImage})` }}>
        {/*<video src={require("../videos/video1.mp4")} autoPlay loop muted></video> */}
        <h1>AYURVEDIC WONDER</h1>
        <p>Heal from within</p>
        <div className='hero-btns'>
            <Button className='hero-btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='hero-btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                GO VEDIC
            </Button>
        </div>
    </div>
  )
}

export default HeroSection