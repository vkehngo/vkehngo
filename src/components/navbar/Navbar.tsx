import './navbar.css';
import logo from '/logo.webp';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import MobileNavbar from '../mobile-navbar/MobileNavbar';
import { Link } from 'react-router-dom';

// @ts-ignore
const Navbar = ({ setShowDonatePopupp }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    // Function to scroll to top
    // @ts-ignore
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    }

    // Handle link click - scroll to top and close mobile menu if open
    const handleLinkClick = () => {
        scrollToTop();
        setOpenMenu(false); // Close mobile menu if it's open
    }

    return (
        <>
            <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} setShowDonatePopupp={setShowDonatePopupp}/>

            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <Link to={"/"} onClick={handleLinkClick}>
                        <img src={logo} className='logo-lap cursor-pointer' alt="" />
                    </Link>
                    <ul>
                        <li>
                            <Link className='menu-item' to="/" onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/about-us" onClick={handleLinkClick}>About</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/events" onClick={handleLinkClick}>Events</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/videos" onClick={handleLinkClick}>Videos</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/gallery" onClick={handleLinkClick}>Gallery</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/contact" onClick={handleLinkClick}>Contact</Link>
                        </li>
                        <button
                            onClick={() => setShowDonatePopupp(true)}  // Fixed: Changed from setShowDonatePopup to setShowDonatePopupp
                            data-ripple-light="true" 
                            type="button" 
                            className="select-none rounded-lg bg-secondary py-3 px-8 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer md:ms-5">
                            Donate Now
                        </button>
                    </ul>

                    <button className='menu-btn' onClick={toggleMenu}>
                        {openMenu ? <IoClose size={'30px'} color='#0072CE' /> : <IoMenu size={'30px'} color='#0072CE' />}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;