import React from 'react'
import { MdOpenInNew } from 'react-icons/md'
import '../styles/projects.css'
import ProjectItem from '../components/ProjectItem'
import RedditGeeks from '../assets/RedditGeeks.jpg'



const Projects = () => {
    return (
        <div className='projects'>
            <h1 className='title'>My Personal Projects</h1>
            <div className='project-list'>
                <ProjectItem
                    name='Reddit Geeks'
                    image={RedditGeeks}
                    description='Reddit Geeks is a portfolio project for a subreddit feed app which can search through subreddits and display their articles.'
                    live={
                        <a className='reddit-live' href='https://annatas77.github.io/redditgeeks/' aria-label='Reddit Geeks Live' target='_blank'>
                            <h3>Live</h3>
                        </a>}
                    github={
                        <a className='reddit-code' href='https://github.com/AnnaTas77/redditgeeks' aria-label='Reddit Geeks in GitHub' target='_blank'>
                            <h3>Code</h3>
                        </a>} />
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    )
}

export default Projects