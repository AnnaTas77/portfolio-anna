import React from 'react'
import { FaEnvelopeSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import '../styles/contact.css'


const Contact = () => {
    return (
        <div className='contact' id="contact">
            <h2 className='connect'>Let's connect!</h2>
            <div className='social-media'>
                <a href="mailto:hello.annatas@gmail.com" aria-label="Anna's email - Click to copy." target="_blank">
                    <div className="icon-container">
                        <FaEnvelopeSquare />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/anna-tasheva-48074085/" aria-label="Anna's LinkedIn profile." target="_blank">
                    <div className="icon-container">
                        <FaLinkedin />
                    </div>
                </a>
                <a href="https://github.com/AnnaTas77" aria-label="Anna's GitHub profile." target="_blank">
                    <div className="icon-container">
                        <FaGithubSquare />
                    </div>
                </a>
            </div>
        </div >
    )
}

export default Contact