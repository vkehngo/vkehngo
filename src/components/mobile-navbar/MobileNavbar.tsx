import { Link} from 'react-router-dom';
import './mobileNav.css';
import logo from '/logo.png';

// @ts-ignore
const MobileNavbar = ({ isOpen, toggleMenu }) => {

    return (
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className='mobile-menu-container' onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-center'>
                    <img src={logo} className='logo' alt="" />
                </div>
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
            </div>
        </div>
    );
};

export default MobileNavbar;
