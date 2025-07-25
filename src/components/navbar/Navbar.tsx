import './navbar.css';
import logo from '/logo.png';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import MobileNavbar from '../mobile-navbar/MobileNavbar';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }


    return (
        <>

            <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <img src={logo} className='logo-lap cursor-pointer' alt="" />
                    <ul>
                        <li>
                            <Link className='menu-item' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/about-us">About</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/events">Events</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/videos">Videos</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/contact">Contact</Link>
                        </li>
                    </ul>

                    <button className='menu-btn' onClick={toggleMenu}>{openMenu ? <IoClose size={'30px'} color='#20BBC1' /> : <IoMenu size={'30px'} color='#20BBC1' />}</button>

                </div>
            </nav>
        </>
    )
}

export default Navbar;