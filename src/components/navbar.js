import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSeedling } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import { Button } from './button';
import './navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        AYUR <FontAwesomeIcon icon={faSeedling} onClick={closeMobileMenu}/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/herb-identifier' className='nav-links' onClick={closeMobileMenu}>
                                Herb Indentifier
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/vedic-recipies' className='nav-links' onClick={closeMobileMenu}>
                                Vedic Recipies
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/dosha-quiz' className='nav-links' onClick={closeMobileMenu}>
                                Dosha Quiz
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
