import React from 'react'
import NewTabIcon from '../assets/new-window-white.svg'


const ProjectItem = ({ image, name, description, live, github }) => {

    const openUrl = (url) => {
        return window.open(url, '_blank');
    }

    return (
        <div className='project-container'>
            <div className='project-item'>
                <img src={image} className='project-image'></img>

                <h1 className='name'>{name}</h1>
                <div className='project-description'>
                    {description}
                    <div className='project-socials'>
                        {
                            live ? <button className='live-link' onClick={() => openUrl(live)}>
                                <a href={live} aria-label='Live' target='_blank'>
                                    <img src={NewTabIcon} />
                                    <span>Live</span>
                                </a>
                            </button> : ''
                        }
                        <button className='github-code' onClick={() => openUrl(github)}>
                            <a href={github} aria-label='Code' target='_blank'>
                                <img src={NewTabIcon} />
                                <span>Code</span>
                            </a>
                        </button>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default ProjectItem