import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from '../assets/At_neon2.png'
import '../styles/navbar.css'

const NavBar = () => {

    const [expandNavbar, setExpandNavbar] = useState(false);

    const handleClick = () => setExpandNavbar(!expandNavbar);

    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                setSmall(window.pageYOffset > 200)
            });
        }
    }, []);

    return (
        <div className={`navbar-container ${small ? "navbar-small" : ""}`} id={expandNavbar ? 'open' : 'close'}>

            <h1 className={`logo-initials ${small ? "logo-initials-small" : ""}`}>AT</h1>

            <div className='navbar-links'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>

            {/* Hamburger */}
            <div className="toggle-button">
                <button onClick={handleClick}><FaBars /></button>
            </div>

        </div >
    )
}

export default NavBar;