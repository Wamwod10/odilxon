import React from 'react'
import "./about.scss"

const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <div className="about__box">
                <div className="about__first-box">
                    <div className="about-div">
                        <p className="about__txt">Yoshi</p>
                        <p className="about__text">24</p>
                    </div>
                    <div className="about-div">
                        <p className="about__txt">Bo'yi</p>
                        <p className="about__text">174</p>
                    </div>
                    <div className="about-div">
                        <p className="about__txt">Vazni</p>
                        <p className="about__text">70,3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About