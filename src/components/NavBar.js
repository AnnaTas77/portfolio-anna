import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/At_teal.svg'
import '../styles/navbar.css'

const NavBar = () => {

    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location])

    return (
        <div className='navbar-container' id={expandNavbar ? 'open' : 'close'}>
            <div className='logo-image'>
                <img src={Logo} alt='Logo image' />
            </div>
            <div className="toggle-button">
                <button onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}><FaBars /></button>

            </div>
            <div className='navbar-links'>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;