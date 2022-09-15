import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social-media'>
                <FaEnvelope />
                <FaLinkedin />
                <FaGithubSquare />
            </div>
            <p>&copy; 2022 Anna Tasheva</p>

        </div>
    )
}

export default Footer