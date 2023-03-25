import React from 'react';
import './About.css';
import profileIcon from './../../images/profile.png';
import linkIcon from './../../images/linkIcon.png';
const About = () => {
    return (
        <div className='aboutContainer'>
            <div className='about'>
                <div className="imgContainer">
                    <img src={profileIcon} alt="" />
                    <h1>Created By Jarv1s</h1>
                </div>
                <div className="links">
                    <div>
                        <img src={linkIcon} alt="" />
                       <h1> <a href="https://github.com/Jarv1sGH">Github Profile</a></h1>
                    </div>
                    <div>
                        <img src={linkIcon} alt="" />
                        
                       <h1> <a href="https://github.com/Jarv1sGH/CricInator">Github Repo</a></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;