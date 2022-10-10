import React from 'react'
import '../styles/projects.css'
import ProjectItem from '../components/ProjectItem'
import RedditGeeks from '../assets/RedditScreenshot7.jpg'
import WeatherApp from '../assets/WeatherApp_merged7.jpg'
import OnlineStoreCart from '../assets/Anna_Store_Best.jpg'
import NewTabIcon from '../assets/new-window-white.svg'





const Projects = () => {
    return (
        <div className='projects' id="projects">
            <h1 className='title'>Personal Projects</h1>
            <div className='project-list'>

                <ProjectItem
                    name='Reddit Geeks'
                    image={RedditGeeks}
                    description='Reddit Geeks is a portfolio project for a subreddit feed app which can search through subreddits and display their articles.'
                    live={
                        <a className='reddit-live' href='https://annatas77.github.io/redditgeeks/' aria-label='Reddit Geeks Live' target='_blank'>
                            <img src={NewTabIcon} />
                            <span>Live</span>
                        </a>}
                    github={
                        <a className='reddit-code' href='https://github.com/AnnaTas77/redditgeeks' aria-label='Reddit Geeks in GitHub' target='_blank'>
                            <img src={NewTabIcon} />
                            <span>Code</span>
                        </a>} />

                <ProjectItem
                    name='Weather App'
                    image={WeatherApp}
                    description='A simple weather app created with JavaScript, CSS and HTML. The app returns current weather data from the Open Weather Map API via Fetch API.'
                    live={
                        <a className='reddit-live' href='https://annatas-weather-app.netlify.app/' aria-label='Weather App Live' target='_blank'>
                            <img src={NewTabIcon} />
                            <span>Live</span>
                        </a>}
                    github={
                        <a className='reddit-code' href='https://github.com/AnnaTas77/redditgeeks' aria-label='Weather App in GitHub' target='_blank'>
                            <img src={NewTabIcon} />
                            <span>Code</span>
                        </a>} />

                <ProjectItem
                    name='Shopping Cart'
                    image={OnlineStoreCart}
                    description='An online shopping cart created with React and Redux Toolkit.'
                    github={
                        <a className='reddit-code' href='https://github.com/AnnaTas77/online-store-project' aria-label='Shopping Cart in GitHub' target='_blank'>
                            <img src={NewTabIcon} />
                            <span>Code</span>
                        </a>} />
            </div>
        </div>
    )
}

export default Projects