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
            <h2>I'm Anna Tasheva, a Junior Software Developer based in London.</h2>
            <p className="prompt one">
                Having previously worked in administrative roles, where I gained valuable experience as a team
                member and developed strong problem-solving skills under pressure, I now feel confident and prepared
                for a career change into the dynamic software development industry.
            </p>
            <p className="prompt two">
                During the lockdowns in 2020, I seized the opportunity to learn a new skill and embarked on a
                self-learning journey with JavaScript, learning through books, online resources, and by enrolling in
                online courses. However, I soon realized that I needed a more structured and immersive approach to
                make significant progress in the software development industry. This led me to enroll in the
                Northcoders Software Developer Skills Bootcamp, and since then, I have found my true passion in
                coding. Coding has become my creative outlet, igniting my curiosity and driving me to continuously
                learn new skills.
            </p>

            <p className="prompt three">
                I am currently looking for a Junior Software Developer role in a friendly environment where I can
                advance and expand my skill set through targeted mentorship and challenging projects.
            </p>
        </div>
    </div>
    );
};

export default Home;
