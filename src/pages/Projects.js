import React from 'react'
import { MdOpenInNew } from 'react-icons/md'
import '../styles/projects.css'
import ProjectItem from '../components/ProjectItem'
import RedditGeeks from '../assets/RedditGeeks.jpg'
import OnlineStoreCart from '../assets/Anna_Store_Best.jpg'



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
                            <i class="fa-solid fa-up-right-from-square"></i>
                            <span>Live</span>
                        </a>}
                    github={
                        <a className='reddit-code' href='https://github.com/AnnaTas77/redditgeeks' aria-label='Reddit Geeks in GitHub' target='_blank'>
                            <i class="fa-solid fa-up-right-from-square"></i>
                            <span>Code</span>
                        </a>} />

                <ProjectItem
                    name='Shopping Cart'
                    image={OnlineStoreCart}
                    description='An online shopping cart created with React and Redux Toolkit.'
                    github={
                        <a className='reddit-code' href='https://github.com/AnnaTas77/online-store-project' aria-label='Shopping Cart in GitHub' target='_blank'>
                            <i class="fa-solid fa-up-right-from-square"></i>
                            <span>Code</span>
                        </a>} />

                <ProjectItem
                    name='Reddit Geeks'
                    image={RedditGeeks}
                    description='Reddit Geeks is a portfolio project for a subreddit feed app which can search through subreddits and display their articles.'
                    live={
                        <a className='reddit-live' href='https://annatas77.github.io/redditgeeks/' aria-label='Reddit Geeks Live' target='_blank'>
                            <i class="fa-solid fa-up-right-from-square"></i>
                            <span>Live</span>
                        </a>}
                    github={
                        <a className='reddit-code' href='https://github.com/AnnaTas77/redditgeeks' aria-label='Reddit Geeks in GitHub' target='_blank'>
                            <i class="fa-solid fa-up-right-from-square"></i>
                            <span>Code</span>
                        </a>} />
            </div>
        </div>
    )
}

export default Projects