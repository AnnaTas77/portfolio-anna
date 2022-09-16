import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social-media'>
                <a href="mailto:hello.annatas@gmail.com" aria-label="Anna's email - Click to copy." target="_blank">
                    <div className="icon-container">
                        <FaEnvelope />
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
            <p>&copy; 2022 Anna Tasheva</p>

        </div >
    )
}

export default Footer