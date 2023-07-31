import React from "react";
import "../styles/projects.css";
import ProjectItem from "../components/ProjectItem";
import RedditGeeks from "../assets/RedditScreenshot7.jpg";
import WeatherApp from "../assets/WeatherApp_merged7.jpg";
import NcNews from "../assets/NcNews.png";
import Meteorites from "../assets/Meteorite Landings Viewer.png";

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h1 className="title">Personal Projects</h1>
            <div className="project-list">
                <ProjectItem
                    name="NC News"
                    image={NcNews}
                    description="NC News is a full-stack project with a custom backend News API, mimicking Reddit's functionalities. The frontend serves as a user interface, enabling access to various API endpoints for seamless interaction with news content."
                    live="https://nc-news-anna.netlify.app/"
                    github={[
                        { label: "Frontend Code", url: "https://github.com/AnnaTas77/nc-news-frontend-project" },
                        { label: "Backend Code", url: "https://github.com/AnnaTas77/nc-news-backend-project" },
                    ]}
                />

                <ProjectItem
                    name="Meteorite Landings Interactive Map"
                    image={Meteorites}
                    description="This project features an interactive map of meteorite landings, sourcing data from NASA's Meteorite Landings API. Users can conveniently sort the table of all known landings by name, year of discovery, and mass in grams by clicking the column headings."
                    github={["https://github.com/AnnaTas77/fe-react-data-visualisation"]}
                />

                <ProjectItem
                    name="Reddit Geeks"
                    image={RedditGeeks}
                    description="Reddit Geeks is a portfolio project for a subreddit feed app which can search through subreddits and display their articles."
                    live="https://annatas77.github.io/redditgeeks/"
                    github={["https://github.com/AnnaTas77/redditgeeks"]}
                />

                <ProjectItem
                    name="Weather App"
                    image={WeatherApp}
                    description="A simple weather app created with JavaScript, CSS and HTML. The app returns current weather data from the Open Weather Map API via Fetch API."
                    live="https://annatas-weather-app.netlify.app/"
                    github={["https://github.com/AnnaTas77/weather-app"]}
                />
            </div>
        </div>
    );
};

export default Projects;
