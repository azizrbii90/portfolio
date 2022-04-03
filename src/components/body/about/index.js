import React from 'react'
import './about.css'
import coding from '../../../assets/coding.png'
import SocialContact from '../../common/social-contact/index'

const About = () => {
  return (
    <div className="about">
        <div className="about-top">
            <div className="about-info">
                Hello There 👋, I am a
                <br /> <span className="info-name">full stack developer.</span> 
                <br /> I love experimenting with web.
            </div>
            <div className="about-photo">
                <img src={coding} className="picture" />
            </div>
        </div>
        <div className="about-bottom">
            <SocialContact />
        </div>
    </div>
  )
}

export default About
