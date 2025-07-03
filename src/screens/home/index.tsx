import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { FaLocationDot } from "react-icons/fa6";
import AboutUs from "../../components/about-us";
import { SwipeCarousel } from "../../components/carousel";
import Causes from "../../components/causes";
import EventsSection from "../../components/events-section";
import MissionVision from "../../components/mission-vision";
import OurVideos from "../../components/our-videos";
import aboutImage from '/banner-3.jpg'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdOutlineAccessTimeFilled } from "react-icons/md";
import Swal from "sweetalert2";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".fade-up").forEach(el => {
                gsap.from(el, {
                    y: 150,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none", // 👈 This prevents repeat on scroll up/down
                    },
                });
            });
        });

        return () => ctx.revert(); // Clean up animations on unmount
    }, []);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "da7845ae-6a4f-4e3a-ac34-307c304da850");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            }).then((res) => res.json());

            if (res.success) {
                formRef.current?.reset();
                Swal.fire({
                    title: "Thanks",
                    text: "We will contact you soon",
                    icon: "success",
                    background: '#000',
                    color: '#fff',
                    didOpen: () => {
                        const popup = Swal.getPopup();
                        if (popup) popup.style.border = '1px solid #fff';
                    }
                });
            }
        } catch (error) {
            console.error("Form submission error:", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <SwipeCarousel />
            <div className="fade-up"><AboutUs /></div>
            <div className="fade-up"><Causes /></div>
            <section className="w-full relative py-14 lg:pb-20 px-5 lg:px-0 bg-black" id="about">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${aboutImage})` }}
                ></div>
                <div className="relative z-10 rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl max-w-xl lg:max-w-3xl mx-auto font-bold text-white text-center">
                        Are You Like To Help People Across The World Through Social Causes ?
                    </h3>
                    <p className="text-lg md:text-lg text-white max-w-lg mx-auto text-center">
                        Call us now +91 9873653629
                    </p>
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-6 text-center align-middle font-sans text-md font-bold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                        Make Your Contribution
                    </button>
                </div>
            </section>
            <div className="fade-up">
                <OurVideos />
            </div>
            <section className="relative z-10 overflow-hidden bg-primary py-16 px-8">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="text-center lg:text-left ">
                                <div className="mb-10 lg:mb-0 ">
                                    <h1
                                        className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white ">
                                        Introduction</h1>
                                    <p
                                        className="w-full text-lg sm:text-xl font-normal leading-tight text-white">
                                        While we serve in countless ways, we’ve focused our efforts in seven key areas to maximise our impact. These encompass some of the bharat most critical humanitarian needs and provide an opportunity for our members to transform the bharat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="text-center lg:text-right"><a
                                className="inline-flex items-center justify-center select-none rounded-lg bg-secondary py-3 px-6 text-center align-middle font-sans text-md font-bold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
                                href="#">become a volunteern</a>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="absolute top-0 right-0 -z-10">
                    <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6910)"></path><defs><linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span className="absolute top-0 right-0 -z-10"><svg width="324" height="250" viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6911)"></path><defs><linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span className="absolute top-4 left-4 -z-10"><svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="40.9984" cy="1.49626" r="1.49626" transform="rotate(90 40.9984 1.49626)" fill="white"></circle><circle cx="27.8304" cy="1.49626" r="1.49626" transform="rotate(90 27.8304 1.49626)" fill="white"></circle><circle cx="14.6644" cy="1.49626" r="1.49626" transform="rotate(90 14.6644 1.49626)" fill="white"></circle><circle cx="1.49642" cy="1.49626" r="1.49626" transform="rotate(90 1.49642 1.49626)" fill="white"></circle><circle cx="40.9984" cy="14.6642" r="1.49626" transform="rotate(90 40.9984 14.6642)" fill="white"></circle><circle cx="27.8304" cy="14.6642" r="1.49626" transform="rotate(90 27.8304 14.6642)" fill="white"></circle><circle cx="14.6644" cy="14.6642" r="1.49626" transform="rotate(90 14.6644 14.6642)" fill="white"></circle><circle cx="1.49642" cy="14.6642" r="1.49626" transform="rotate(90 1.49642 14.6642)" fill="white"></circle><circle cx="40.9984" cy="27.8302" r="1.49626" transform="rotate(90 40.9984 27.8302)" fill="white"></circle><circle cx="27.8304" cy="27.8302" r="1.49626" transform="rotate(90 27.8304 27.8302)" fill="white"></circle><circle cx="14.6644" cy="27.8302" r="1.49626" transform="rotate(90 14.6644 27.8302)" fill="white"></circle><circle cx="1.49642" cy="27.8302" r="1.49626" transform="rotate(90 1.49642 27.8302)" fill="white"></circle><circle cx="40.9984" cy="40.9982" r="1.49626" transform="rotate(90 40.9984 40.9982)" fill="white"></circle><circle cx="27.8304" cy="40.9963" r="1.49626" transform="rotate(90 27.8304 40.9963)" fill="white"></circle><circle cx="14.6644" cy="40.9982" r="1.49626" transform="rotate(90 14.6644 40.9982)" fill="white"></circle><circle cx="1.49642" cy="40.9963" r="1.49626" transform="rotate(90 1.49642 40.9963)" fill="white"></circle><circle cx="40.9984" cy="54.1642" r="1.49626" transform="rotate(90 40.9984 54.1642)" fill="white"></circle><circle cx="27.8304" cy="54.1642" r="1.49626" transform="rotate(90 27.8304 54.1642)" fill="white"></circle><circle cx="14.6644" cy="54.1642" r="1.49626" transform="rotate(90 14.6644 54.1642)" fill="white"></circle><circle cx="1.49642" cy="54.1642" r="1.49626" transform="rotate(90 1.49642 54.1642)" fill="white"></circle></g>
                    </svg>
                </span>
            </section>
            <div className="bg-gray-100">
                <MissionVision />
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 fade-up">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Our Gallery
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-lg sm:text-xl font-normal leading-tight text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsum consequuntur consequatur, esse quis inventore magnam in iure impedit neque? Vel iste provident nobis unde?
                </p>
                <div className="grid grid-cols-6 col-span-2   gap-2  ">
                    <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                        <img className="h-full w-full object-cover "
                            src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                            alt="" />
                    </div>
                    <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                        <img className="h-full w-full object-cover  "
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
                            alt="" />
                    </div>
                    <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                        <img className="h-full w-full object-cover "
                            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="" />
                    </div>
                    <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                        <img className="h-full w-full object-cover "
                            src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="" />
                    </div>
                    <div className="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem] cursor-pointer">
                        <div
                            className="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
                            + 23
                        </div>
                        <img className="h-full w-full object-cover "
                            src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                            alt="" />
                    </div>
                </div>
            </div>
            <EventsSection />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    <img src="/brand-1.jpg" alt="" className="w-full h-28 object-contain" />
                    <img src="/brand-2.png" alt="" className="w-full h-28 object-contain" />
                    <img src="/brand-3.jpg" alt="" className="w-full h-28 object-contain" />
                </div>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Get In Touch
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-lg sm:text-xl font-normal leading-tight text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsum consequuntur consequatur, esse quis inventore magnam in iure impedit neque? Vel iste provident nobis unde?
                </p>
                <div className="w-full justify-start items-start xl:gap-12 gap-5 grid lg:grid-cols-2 grid-cols-1">
                    <form id="contactForm" onSubmit={onSubmit} ref={formRef} className="border p-4 rounded-lg border-primary lg:order-1 order-2">
                        <div className="mb-6 space-y-5">
                            {/* Personal Details */}
                            <div>
                                <input
                                    type="text"
                                    required
                                    name="name"
                                    placeholder="Name"
                                    className="w-full bg-transparent border border-gray-400 rounded-md py-2 pl-2 pr-4 text-textPrimary"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    required
                                    name="phone"
                                    inputMode="numeric"
                                    pattern="[0-9]{10}"
                                    placeholder="Enter your 10 digit no."
                                    className="w-full bg-transparent border border-gray-400 rounded-md py-2 pl-2 pr-4 text-primary"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    required
                                    name="email"
                                    placeholder="Your email address"
                                    className="w-full bg-transparent border border-gray-400 rounded-md py-2 pl-2 pr-4 text-primary"
                                />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                <textarea
                                    id="textarea"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Write your message..."
                                    className="mb-2 w-full bg-transparent rounded-md border border-gray-400 py-2 pl-2 pr-4 text-primary sm:mb-0"
                                ></textarea>
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                disabled={loading}
                                type="submit"
                                className={`w-full ${loading ? 'bg-black/35' : 'bg-black'} text-white px-6 py-3 font-xl rounded-md`}>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                    <div className="w-full lg:order-2 order-1 flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="flex-col justify-center gap-6 flex">
                            <div className="flex justify-center items-center gap-2">
                                <div className="p-2 bg-white rounded-full text-textPrimary shadow-md">
                                    <FaLocationDot size={20} />
                                </div>
                                <p className="text-textSecondary text-base font-normal leading-relaxed">
                                    1234 Street Name, City, State, 12345
                                </p>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <div className="p-2 bg-white rounded-full text-textPrimary shadow-md">
                                    <FaPhoneAlt size={20} />
                                </div>
                                <p className="text-textSecondary text-base font-normal leading-relaxed">
                                    1234 Street Name, City, State, 12345
                                </p>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <div className="p-2 bg-white rounded-full text-textPrimary shadow-md">
                                    <MdEmail size={20} />
                                </div>
                                <p className="text-textSecondary text-base font-normal leading-relaxed">
                                    1234 Street Name, City, State, 12345
                                </p>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <div className="p-2 bg-white rounded-full text-textPrimary shadow-md">
                                    <MdOutlineAccessTimeFilled size={20} />
                                </div>
                                <p className="text-textSecondary text-base font-normal leading-relaxed">
                                    1234 Street Name, City, State, 12345
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;

