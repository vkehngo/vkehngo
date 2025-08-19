import { Link} from 'react-router-dom';
import './mobileNav.css';
import logo from '/logo.webp';

// @ts-ignore
const MobileNavbar = ({ isOpen, toggleMenu , setShowDonatePopupp  }) => {

    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    }

    // Handle link click - scroll to top and close mobile menu
    const handleLinkClick = () => {
        scrollToTop();
        toggleMenu(); // Close the mobile menu
    }

    return (
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className='mobile-menu-container' onClick={(e) => e.stopPropagation()}>
                <Link className='flex justify-center' to={"/"} onClick={handleLinkClick}>
                    <img src={logo} className='logo' alt="" />
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
                            onClick={() => setShowDonatePopupp(true)}
                            data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-8 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                            Donate Now
                        </button>
                </ul>
            </div>
        </div>
    );
};

export default MobileNavbar;
