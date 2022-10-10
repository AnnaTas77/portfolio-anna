import React from 'react'

const ProjectItem = ({ image, name, description, live, github }) => {
    return (
        <div className='project-container'>
            <div className='project-item'>
                <img src={image} className='project-image'></img>
            </div>
            <div className='project-card'>
                <h1>{name}</h1>
                <div className='project-description'>{description}</div>
                <div className='project-socials'>
                    <div className='live-link'>{live}</div>
                    <div className='github-code'>{github}</div>
                </div>
            </div>
        </div>

    )
}

export default ProjectItem