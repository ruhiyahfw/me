import React, {useState} from 'react'
import {Link} from "react-router-dom"
import './Navbar.css';
import {FaBars} from 'react-icons/fa';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar">
            <h1 className='navbar-logo'>Me</h1>
            <ul className={isMobile ? "nav-links-mobile" : 'nav-links'} onClick={() => setIsMobile(false)}>
                <Link to='/' className='link'><li>Home</li></Link>
                <Link to='/dev' className='link'><li>Dev</li></Link>
                <Link to='/projects' className='link'><li>Projects</li></Link>
                <Link to='/contact' className='link'><li>Contact</li></Link>
            </ul>
            <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}><FaBars /></button>
        </nav>
    )
}

export default Navbar