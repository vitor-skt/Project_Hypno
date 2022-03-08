import React, { memo, useState } from 'react';
import './Navbar.scss';
import Dropdown from '../Dropdown/Dropdown';
import { Link } from 'react-router-dom';

const Navbar = ({ navbarName }) => {


    const [click, setClick] = useState(false);

    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false);


    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }
        else {
            setDropdown(true);
        }
    };


    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }
        else {
            setDropdown(false);
        }
    }


    return (
        <>
            <nav className="navbar">
                <img className="NavLogo" src="/images/philosophy.png" alt="Logo" />
                <Link to='/' className="navbar-logo">
                    {navbarName}
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home <i className="fas fa-home"></i>
                        </Link>
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        <Link to='/AboutMe' className='nav-links' onClick={closeMobileMenu}>
                            Sobre mim <i className="fas fa-chevron-down"></i>
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/Contato' className='nav-links' onClick={closeMobileMenu}>
                            Contato <i className="fas fa-phone"></i>
                        </Link>

                    </li>
                </ul>
            </nav>
        </>
    )
}

export default memo(Navbar, (prev, next) => {
    return Object.is(prev.navbarName, next.navbarName);
});

