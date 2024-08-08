import React, { useEffect, useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) { // Adjust this value to the desired scroll position
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <img src='/images/carex-logo-removebg-preview.png' alt='' />
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About Us</a></li>
                    <li><a href='/'>Industries</a></li>
                    <li><a href='/'>Services</a></li>
                    <li><a href='/free-quote'>Free Quote</a></li>
                    <li><a href='/blogs'>Blog</a></li>
                    <li><a href='/contact-us'>Contact Us</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
