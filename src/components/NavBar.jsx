import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/At_neon2.png";
import "../styles/navbar.css";
import { Link } from "react-scroll";

const NavBar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const handleClick = () => setExpandNavbar(!expandNavbar);

    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                setSmall(window.pageYOffset > 200);
            });
        }
    }, []);

    return (
        <nav className={`navbar-container ${small ? "navbar-small" : ""}`} id={expandNavbar ? "open" : "close"}>
            <h1 className={`logo-initials ${small ? "logo-initials-small" : ""}`}>AT</h1>

            <div className="navbar-links">
                <ul>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="hamburger-button">
                <button onClick={handleClick}>{!expandNavbar ? <FaBars /> : <FaTimes />}</button>
            </div>

            <div className="mobile-menu" onClick={handleClick}>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
