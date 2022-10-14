import React from 'react'
import '../styles/projects.css'
import ProjectItem from '../components/ProjectItem'
import RedditGeeks from '../assets/RedditScreenshot7.jpg'
import WeatherApp from '../assets/WeatherApp_merged7.jpg'
import OnlineStoreCart from '../assets/Anna_Store_Best.jpg'



const Projects = () => {

    return (
        <div className='projects' id="projects">
            <h1 className='title'>Personal Projects</h1>
            <div className='project-list'>

                <ProjectItem
                    name='Reddit Geeks'
                    image={RedditGeeks}
                    description='Reddit Geeks is a portfolio project for a subreddit feed app which can search through subreddits and display their articles.'
                    live='https://annatas77.github.io/redditgeeks/'
                    github='https://github.com/AnnaTas77/redditgeeks'
                />

                <ProjectItem
                    name='Weather App'
                    image={WeatherApp}
                    description='A simple weather app created with JavaScript, CSS and HTML. The app returns current weather data from the Open Weather Map API via Fetch API.'
                    live='https://annatas-weather-app.netlify.app/'
                    github='https://github.com/AnnaTas77/weather-app'
                />

                <ProjectItem
                    name='Shopping Cart'
                    image={OnlineStoreCart}
                    description='An online shopping cart created with React and Redux Toolkit.'
                    github='https://github.com/AnnaTas77/online-store-project'
                />
            </div>
        </div>
    )
}

export default Projects