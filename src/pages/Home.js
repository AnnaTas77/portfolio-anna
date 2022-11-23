import React from "react";
import "../styles/home.css";
import AnnasPic from "../assets/Anna_CV_Photo_BEST_2022_lrg.jpg";
import Wave from "../assets/wave_emoji.svg";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="about-me">
        <div className="avatar">
          <img src={AnnasPic} alt="Anna's photo" />
        </div>
        <div className="wave">
          <h2>
            Hi!
            <span>
              <img src={Wave} className="wave" />
            </span>
          </h2>
        </div>
        <h2>I'm Anna Tasheva, a junior front-end developer based in London.</h2>
        <p className="prompt">
          {" "}
          Passionate about design and programming and currently working on my
          career change to a front-end developer. I have experience with
          JavaScript (ES6), React, Redux, HTML5 and CSS. Please see below some
          of my coding projects.{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;
