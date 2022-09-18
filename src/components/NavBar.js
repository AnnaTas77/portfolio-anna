import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/At_neon2.png'
import '../styles/navbar.css'

const NavBar = () => {

    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location])

    const handleClick = () => {
        setExpandNavbar((prev) => !prev);
    }

    return (
        <div className='navbar-container' id={expandNavbar ? 'open' : 'close'}>
            <Link to="/">
                <div className='logo-image'>
                    <img src={Logo} alt='Logo image' />
                </div>
            </Link>
            <div className='navbar-links'>
                <Link to="/" className='active'>Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="toggle-button">
                <button onClick={handleClick}><FaBars /></button>

            </div>

        </div>
    )
}

export default NavBar;