import React, { useState, useEffect } from 'react';
import './Header.css';
import { useTheme } from '../../common/ThemeContext';
import styles from '../Hero/HeroStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';

function Header() {
    const { theme, toggleTheme } = useTheme();
    const sunIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="24"
            height="24"
        >
            <path d="M12 4V2m0 20v-2m10-8h-2M4 12H2m16.95-6.95l-1.41-1.41M6.34 17.66l-1.41 1.41M17.66 17.66l1.41 1.41M6.34 6.34l-1.41-1.41M12 18a6 6 0 100-12 6 6 0 000 12z" />
        </svg>
    );

    const moonIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="24"
            height="24"
        >
            <path d="M12 2a9 9 0 008.94 10.68A7 7 0 0112 22a7 7 0 010-14 7 7 0 018.94 4.68A9 9 0 0012 2z" />
        </svg>
    );

    const themeIcon = theme === 'light' ? sunIcon : moonIcon;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking outside or on a menu item
    useEffect(() => {
        const handleOutsideClick = (event) => {
            const menuToggle = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('.nav-menu');

            if (
                isMenuOpen &&
                menuToggle &&
                navMenu &&
                !menuToggle.contains(event.target) &&
                !navMenu.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isMenuOpen]);

    // Close menu when a nav link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="site-header">
            <div className="header-container">
                <div className="logo">
                    <span>Anita Kanwar</span>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                    </ul>

                    {/* Social icons for mobile view */}

                </nav>

                <div className="header-buttons">

                    <div>
                        <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                            {themeIcon}
                        </div>

                    </div>
                    <button
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;