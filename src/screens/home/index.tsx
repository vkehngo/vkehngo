import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { FaLocationDot, FaPeopleGroup } from "react-icons/fa6";
import AboutUs from "../../components/about-us";
import Causes from "../../components/causes";
import EventsSection from "../../components/events-section";
import MissionVision from "../../components/mission-vision";
import OurVideos from "../../components/our-videos";
// @ts-ignore
import aboutImage from '/banner-3.webp'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdOutlineAccessTimeFilled } from "react-icons/md";
import Swal from "sweetalert2";
import { NumberTicker } from "../../components/ui/NumberTicker";
import { BiSolidDonateHeart, BiSolidFoodMenu } from "react-icons/bi";

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
        formData.append("access_key", "dab5db9b-7451-47bf-86ad-02cc32d8303c");

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
            {/* <SwipeCarousel /> */}
            <div className="w-full relative bg-black md:flex">
                <div className="w-[100%] hidden md:block md:w-[20%] bg-[#0072CE]  h-[250px] md:h-[550px]"></div>
                <div className="w-[100%] md:w-[80%] h-[250px] md:h-[550px]">
                    <img src="/hero.webp" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative md:absolute inset-0 flex flex-col items-center justify-center bg-white w-full md:w-[35%] md:left-[5%] md:top-[5%] h-[90%] p-5 md:rounded-2xl ">
                    <p className="mb-5 text-4xl font-bold text-primary leading-tight text-center">Hope Begins with Opportunity</p>
                    <p className="mb-12 text-xl text-center">We serve the disabled and underprivileged with free education, mid-day meals, and job training — turning struggle into strength.</p>
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-8 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                        Donate Now
                    </button>
                </div>
            </div>
            <div className="fade-up"><AboutUs /></div>
            <EventsSection />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 fade-up">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Our Impact
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsum consequuntur consequatur, esse quis inventore magnam in iure impedit neque? Vel iste provident nobis unde?
                </p>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-4 grid-cols-1">
                        <div className="w-full h-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex justify-start items-center gap-3 shadow-sm shadow-secondary">
                            <BiSolidDonateHeart size={50} className="text-textPrimary" />
                            <div>
                                <h4 className="text-textPrimary text-2xl font-bold leading-9">
                                    <NumberTicker
                                        value={45}
                                        className=""
                                    />
                                    +
                                </h4>
                                <p className="text-textPrimary text-base font-normal leading-relaxed">
                                    Happy Donators
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex justify-start items-center gap-3 shadow-sm shadow-secondary">
                            <FaPeopleGroup size={50} className="text-textPrimary" />
                            <div>
                                <h4 className="text-textPrimary text-2xl font-bold leading-9">
                                    <NumberTicker
                                        value={250}
                                        className=""
                                    />
                                    +
                                </h4>
                                <p className="text-textPrimary text-base font-normal leading-relaxed">
                                    Volunteer
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex justify-start items-center gap-3 shadow-sm shadow-secondary">
                            <BiSolidFoodMenu size={50} className="text-textPrimary" />
                            <div>
                                <h4 className="text-textPrimary text-2xl font-bold leading-9">
                                    <NumberTicker
                                        value={1000}
                                        className=""
                                    />
                                    +
                                </h4>
                                <p className="text-textPrimary text-base font-normal leading-relaxed">
                                    Donated Poor
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex justify-start items-center gap-3 shadow-sm shadow-secondary">
                            <BiSolidDonateHeart size={50} className="text-textPrimary" />
                            <div>
                                <h4 className="text-textPrimary text-2xl font-bold leading-9">
                                    <NumberTicker
                                        value={500}
                                        className=""
                                    />
                                    +
                                </h4>
                                <p className="text-textPrimary text-base font-normal leading-relaxed">
                                    NGO Drives
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Change begins with us all
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    We believe that corporate partnerships are not only a way to help brands meet their CSR objectives, but also create sustainable impact for India’s children.
                </p>
            </div>
            <img src="/ngoimage.webp" alt="" className="w-full -mt-16" />
            <div className="fade-up"><Causes /></div>
            <section className="w-full relative py-14 lg:pb-20 px-5 lg:px-0 bg-black" id="about">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${aboutImage})` }}
                ></div>
                <div className="relative z-10 rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl max-w-xl lg:max-w-3xl mx-auto font-bold text-white text-center m-5">
                        Are You Like To Help People Across The World Through Social Causes ?
                    </h3>
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                        Make Your Contribution
                    </button>
                </div>
            </section>
            <div className="fade-up">
                <OurVideos />
            </div>
            <section className="w-full relative py-14 lg:pb-20 px-5 lg:px-0 bg-black" id="about">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${aboutImage})` }}
                ></div>
                <div className="relative z-10 rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl max-w-xl lg:max-w-3xl mx-auto font-bold text-white text-center m-5">
                        Become a Volunteer at Viklang Kendra & Education Hub and Be the Reason Someone Smiles Today!
                    </h3>
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                        Become a Volunteer
                    </button>
                </div>
            </section>
            <div className="bg-gray-100">
                <MissionVision />
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 fade-up">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Our Gallery
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsum consequuntur consequatur, esse quis inventore magnam in iure impedit neque? Vel iste provident nobis unde?
                </p>
                <div className="grid grid-cols-6 col-span-2   gap-2  ">
                    <div className=" overflow-hidden rounded-xl col-span-3 max-h-[18rem]">
                        <img className="h-full w-full object-cover "
                            src="/2.webp"
                            alt="" />
                    </div>
                    <div className=" overflow-hidden rounded-xl col-span-3 max-h-[18rem]">
                        <img className="h-full w-full object-cover  "
                            src="/galleryImages/7.webp"
                            alt="" />
                    </div>
                    <div className=" overflow-hidden rounded-xl col-span-2 max-h-[18rem]">
                        <img className="h-full w-full object-cover "
                            src="/galleryImages/12.webp"
                            alt="" />
                    </div>
                    <div className=" overflow-hidden rounded-xl col-span-2 max-h-[18rem]">
                        <img className="h-full w-full object-cover "
                            src="/galleryImages/14.webp"
                            alt="" />
                    </div>
                    <div className="relative overflow-hidden rounded-xl col-span-2 max-h-[18rem] cursor-pointer">
                        <div
                            className="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
                            + 23
                        </div>
                        <img className="h-full w-full object-cover "
                            src="/galleryImages/18.webp"
                            alt="" />
                    </div>
                </div>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    <img src="/brand-1.webp" alt="" className="w-full h-28 object-contain" />
                    <img src="/brand-2.webp" alt="" className="w-full h-28 object-contain" />
                    <img src="/brand-3.webp" alt="" className="w-full h-28 object-contain" />
                </div>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Get In Touch
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
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
                        <div className="flex-col justify-center items-start gap-6 flex">
                            <div className="flex justify-center items-center gap-2">
                                <div className="p-2 bg-white rounded-full text-textPrimary shadow-md">
                                    <FaLocationDot size={20} />
                                </div>
                                <p className="text-textSecondary text-base font-normal leading-relaxed">
                                    KH No.435, Gali No.2, Village Basai, Gurugram, Haryana 122001
                                </p>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <div className="p-2 bg-white rounded-full text-textPrimary shadow-md">
                                    <FaPhoneAlt size={20} />
                                </div>
                                <p className="text-textSecondary text-base font-normal leading-relaxed">
                                    +91 9873653629
                                </p>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <div className="p-2 bg-white rounded-full text-textPrimary shadow-md">
                                    <MdEmail size={20} />
                                </div>
                                <p className="text-textSecondary text-base font-normal leading-relaxed">
                                   info@viklangkendra.org
                                </p>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <div className="p-2 bg-white rounded-full text-textPrimary shadow-md">
                                    <MdOutlineAccessTimeFilled size={20} />
                                </div>
                                <p className="text-textSecondary text-base font-normal leading-relaxed">
                                    10:00 AM - 6:00 PM (Mon - Sat)
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

