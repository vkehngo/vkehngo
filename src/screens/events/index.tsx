import { useLayoutEffect } from "react";
import BreadcrumbBanner from "../../components/breadcrumb-banner";
import { eventData } from "./eventsData";
import './style.css';
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const EventsPage = () => {
    const navigate = useNavigate();


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
                        toggleActions: "play none none none", // 👉 This prevents repeat on scroll up/down
                    },
                });
            });
        });


        return () => ctx.revert(); // Clean up animations on unmount
    }, []);


    const handleNavigate = (id) => {
        navigate(`/events/${id}`);
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 0);
    };


    return (
        <div>
            <BreadcrumbBanner title="Events" img="/events.webp" />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 fade-up">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Events & Drives That Inspire Change
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    Explore our on-ground activities that bring communities together and create lasting impact.
                </p>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-12">
                        {
                            eventData.map((data, index) => {
                                return (
                                    <div className="relative flex w-full flex-col group rounded-xl bg-white bg-clip-border border fade-up" key={index}>
                                        <div className="relative mx-4 mt-4 group-hover:-mt-6 group-hover:mb-6 transition-all ease-in-out duration-300 h-40 overflow-hidden rounded-xl shadow-lg">
                                            <img src={data.image} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="px-6 py-3">
                                            <h5 className="mb-1 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-textPrimary">
                                                {data.title}
                                            </h5>
                                            <p className="block text-base font-normal leading-relaxed antialiased text-textSecondary line-clamp-2-custom">
                                                {data.des}
                                            </p>
                                        </div>
                                        <div className="px-6 py-4 pt-0">
                                            <button data-ripple-light="true"
                                                type="button"
                                                onClick={() => handleNavigate(data.id)}
                                                className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};


export default EventsPage;
