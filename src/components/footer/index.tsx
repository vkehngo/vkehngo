import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    }

    // Handle link click - scroll to top and close mobile menu if open
    const handleLinkClick = () => {
        scrollToTop();
    }
    return (
        <div className="bg-secondary">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-2">
                    <div className="md:max-w-md lg:col-span-1">
                        <a
                            href="/"
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <img src="/logo.webp" alt="" className="w-20" />
                        </a>
                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-sm text-white">
                                Since 2022, our NGO uplifts poor children with free education and meals, while also offering essential support and empowerment programs for differently-abled individuals, fostering hope and equal opportunities for all.
                            </p>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-5 row-gap-8 md:grid-cols-3">
                        <div>
                            <p className="font-bold tracking-wide text-white text-lg">
                                Quick Links
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link
                                        to={"/"}
                                        onClick={handleLinkClick}
                                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"about-us"}
                                        onClick={handleLinkClick}
                                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/events"}
                                        onClick={handleLinkClick}
                                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/videos"}
                                        onClick={handleLinkClick}
                                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Videos
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/gallery"}
                                        onClick={handleLinkClick}
                                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/contact"}
                                        onClick={handleLinkClick}
                                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold tracking-wide text-white text-lg">
                                Join
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="https://forms.gle/6dwNGXmFbBVxbmy5A"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Become A Volunteer
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://forms.gle/HXg91TvVSJajqWFH7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-2 text-sm col-span-2 md:col-span-1">
                            <p className="text-base font-bold tracking-wide text-white">
                                Visit Our Ngo
                            </p>
                            <div className="flex">
                                <p className="mr-1 text-white">Phone:</p>
                                <a
                                    href="tel:+919873653629"
                                    aria-label="Our phone"
                                    title="Our phone"
                                    className="transition-colors duration-300 text-white/80"
                                >
                                    +91 9873653629
                                </a>
                            </div>
                            <div className="flex">
                                <p className="mr-1 text-white">Email:</p>
                                <a
                                    href="mailto:info@viklangkendra.org"
                                    aria-label="Our email"
                                    title="Our email"
                                    className="transition-colors duration-300 text-white/80"
                                >
                                    info@viklangkendra.org
                                </a>
                            </div>
                            <div className="">
                                <a
                                    href="https://www.google.com/maps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Our address"
                                    title="Our address"
                                    className="transition-colors duration-300 text-white/80"
                                >
                                    <span className='text-white'>Address : </span>
                                    KH No.435, Gali No.2, Village Basai, Gurugram, Haryana 122001
                                </a>
                            </div>
                            <div>
                                <p className="text-base font-bold tracking-wide text-white">
                                    Follow Us
                                </p>
                                <div className="flex items-center  gap-2">
                                    <a href="https://www.youtube.com/channel/UCwaEY6vypWr5tMeDj6XodwA" target="_blank" rel="noopener noreferrer">
                                        <FaYoutube color="white" size={20} />
                                    </a>
                                    <a href="https://www.instagram.com/vkeh.offical/" target="_blank" rel="noopener noreferrer">
                                        <AiFillInstagram color="white" size={20} />
                                    </a>
                                    <a href="https://www.facebook.com/vkeh.offical/" target="_blank" rel="noopener noreferrer">
                                        <FaFacebookSquare color="white" size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center pt-5 pb-10 border-t border-white sm:flex-row">
                    <p className="text-sm text-white">
                        © {new Date().getFullYear()} Viklang Kendra & Education Hub. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};