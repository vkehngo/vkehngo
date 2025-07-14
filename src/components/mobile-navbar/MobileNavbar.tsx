import { Link, useLocation, useNavigate } from 'react-router-dom';
import './mobileNav.css';
import logo from '/logo.png';

// @ts-ignore
const MobileNavbar = ({ isOpen, toggleMenu }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // @ts-ignore
    const handleScroll = (event, id) => {
        event.preventDefault();

        if (location.pathname !== '/') {
            navigate('/');
        }

        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                const offset = window.innerHeight * 0.1; // 10% of viewport height
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else if (id === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 100);

        toggleMenu(); // Close menu after click
    };

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
                            <Link className='menu-item' to="/causes">Causes</Link>
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
