import React from 'react'

const ProjectItem = ({ image, name, description, live, github }) => {
    return (
        <div className='project-item'>
            <div className='project-image' style={{ backgroundImage: `url(${image})` }}></div>
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