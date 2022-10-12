import React from 'react'
import NewTabIcon from '../assets/new-window-white.svg'


const ProjectItem = ({ image, name, description, live, github }) => {
    return (
        <div className='project-container'>
            <div className='project-item'>
                <img src={image} className='project-image'></img>

                <h1 className='name'>{name}</h1>
                <div className='project-description'>
                    {description}
                    <div className='project-socials'>
                        <button className='live-link'>
                            <a href={live} aria-label='Live' target='_blank'>
                                <img src={NewTabIcon} />
                                <span>Live</span>
                            </a>
                        </button>
                        <button className='github-code'>
                            <a href={github} aria-label='Code' target='_blank'>
                                <img src={NewTabIcon} />
                                <span>Code</span>
                            </a>
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ProjectItem