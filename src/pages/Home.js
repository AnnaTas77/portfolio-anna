import React from 'react'
import '../styles/home.css'
import AnnasPic from '../assets/Anna_CV_Photo_BEST_2022_lrg.jpg'
import Wave from '../assets/wave_emoji.svg'


const Home = () => {
    return (
        <div className='home' id="home">

            <div className='about-me'>
                <div className='avatar'>
                    <img src={AnnasPic} alt="Anna's photo" />
                </div>
                <div><h2>Hi! <span><img src={Wave} className="wave" /></span></h2></div>
                <h2>I'm Anna, a web developer based in London.</h2>
                <p className='prompt'>I enjoy design and problem solving.The technologies I use include HTML5, CSS3, JavaScript, React, Redux. See below the projects I did while learning to code.</p>
            </div>

        </div>
    )
}

export default Home