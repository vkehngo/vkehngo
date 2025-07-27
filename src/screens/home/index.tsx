import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { FaLocationDot } from "react-icons/fa6";
import AboutUs from "../../components/about-us";
import MissionVision from "../../components/mission-vision";
import OurVideos from "../../components/our-videos";
import aboutImage from '/banner-3.webp'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdOutlineAccessTimeFilled } from "react-icons/md";
import Swal from "sweetalert2";
import { FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import type { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import { useWindowSize } from "../../lib/useWindowSize";
import Impact from "../../components/Impact";
import Glimpses from "../../components/Glimpses";
import { cardData } from "./Causes";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [open, setOpen] = useState(items[0].id);
    const [showDonatePopup, setShowDonatePopup] = useState(false);
    const [selectedCause, setSelectedCause] = useState<number | null>(null);

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
                    <button
                        onClick={() => setShowDonatePopup(true)}
                        data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-8 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                        Donate Now
                    </button>
                </div>
            </div>
            <div className="fade-up"><AboutUs /></div>
            <div className="bg-gray-100">
                <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                    <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                        Events & Drives That Inspire Change
                    </p>
                    <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                        Explore our on-ground activities that bring communities together and create lasting impact.
                    </p>
                    <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
                        {items.map((item) => (
                            <Panel
                                key={item.id}
                                open={open}
                                setOpen={setOpen}
                                id={item.id}
                                Icon={item.Icon}
                                title={item.title}
                                imgSrc={item.imgSrc}
                                description={item.description}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-4 mt-5">
                        <button
                            onClick={() => setShowDonatePopup(true)}
                            type="button"
                            className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                            Donate
                        </button>
                        <a href="https://forms.gle/6dwNGXmFbBVxbmy5A" target="_blank">
                            <button
                            type="button"
                            className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                            become a volunteer
                        </button>
                        </a>
                    </div>
                </section>

                {/* Donation Popup */}
                <AnimatePresence>
                    {showDonatePopup && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[99999]"
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative mx-5"
                            >
                                <button
                                    onClick={() => setShowDonatePopup(false)}
                                    className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
                                >
                                    ✕
                                </button>
                                <h2 className="text-2xl font-bold text-center text-primary mb-4">Support Our Cause</h2>
                                <p className="text-gray-600 text-center mb-4">Scan the QR code below to donate and make an impact.</p>
                                <div className="flex justify-center mb-2">
                                    <img src="/QR.svg" alt="Donation QR Code" className="w-48 h-48 rounded-lg border" />
                                </div>
                                <p className="text-xl font-bold text-center text-primary">Viklang Kendra & Education Hub</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="fade-up"><Impact /></div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 fade-up">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Change begins with us all
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    We believe that corporate partnerships are not only a way to help brands meet their CSR objectives, but also create sustainable impact for India’s children.
                </p>
            </div>
            <img src="/ngoimage.webp" alt="" className="w-full -mt-16 fade-up" />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 fade-up">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    The causes we care about
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    While we serve in countless ways, we've focused our efforts in seven key areas to maximise our impact. These encompass some of the bharat most critical humanitarian needs and provide an opportunity for our members to transform the Bharat.
                </p>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-12">
                        {
                            cardData.map((data, index) => {
                                return (
                                    <div className="relative flex w-full flex-col group rounded-xl bg-white bg-clip-border border" key={index}>
                                        <div className="relative mx-4 mt-4 group-hover:-mt-6 group-hover:mb-6 transition-all ease-in-out duration-300 h-40 overflow-hidden rounded-xl shadow-lg">
                                            <img src={data.img} alt="" className=" object-bottom" />
                                        </div>
                                        <div className="px-6 py-3">
                                            <h5 className="mb-1 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-textPrimary">
                                                {data.title}
                                            </h5>
                                            <p className="block text-base font-normal leading-relaxed antialiased text-textSecondary">
                                                {data.des}
                                            </p>
                                        </div>
                                        <div className="px-6 py-4 pt-0">
                                            <button
                                                onClick={() => setSelectedCause(index)}
                                                data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
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
            <AnimatePresence>
                {selectedCause !== null && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[99999] p-4">
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-6 relative h-[80%] md:h-[90%] overflow-y-auto">
                            <button onClick={() => setSelectedCause(null)} className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl">✕</button>
                            <h2 className="text-2xl font-bold text-primary mb-4">{cardData[selectedCause].title}</h2>
                            <img src={cardData[selectedCause].img} alt="" className="rounded-lg mb-4 max-h-64 object-cover w-full" />
                            <p className="text-textPrimary leading-relaxed text-justify text-sm">{cardData[selectedCause].longDes || "Detailed information about this cause will be displayed here."}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <section className="w-full relative py-14 lg:pb-20 px-5 lg:px-0 bg-black fade-up" id="about">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${aboutImage})` }}
                ></div>
                <div className="relative z-10 rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl max-w-xl lg:max-w-3xl mx-auto font-bold text-white text-center m-5">
                        Are You Like To Help People Across The World Through Social Causes ?
                    </h3>
                    <button  onClick={() => setShowDonatePopup(true)} data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                        Make Your Contribution
                    </button>
                </div>
            </section>
            <div className="fade-up"><OurVideos /></div>
            <section className="fade-up w-full relative py-14 lg:pb-20 px-5 lg:px-0 bg-black fade-up" id="about">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${aboutImage})` }}
                ></div>
                <div className="relative z-10 rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl max-w-xl lg:max-w-3xl mx-auto font-bold text-white text-center m-5">
                        Become a Volunteer at Viklang Kendra & Education Hub and Be the Reason Someone Smiles Today!
                    </h3>
                    <a href="https://forms.gle/6dwNGXmFbBVxbmy5A" target="_blank">
                        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                        Become a Volunteer
                    </button>
                    </a>
                </div>
            </section>
            <div className="bg-gray-100 fade-up"><MissionVision /></div>
            <div className="fade-up">
                <Glimpses />
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 fade-up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <img src="/brand-2.webp" alt="" className="w-full h-28 object-contain" />
                    <img src="/brand-3.webp" alt="" className="w-full h-28 object-contain" />
                </div>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 fade-up">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Let’s Build Change Together
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    Interested in volunteering, donating, or learning more about our work? Reach out — we’d love to connect with you.
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

interface PanelProps {
    open: number;
    setOpen: Dispatch<SetStateAction<number>>;
    id: number;
    Icon: IconType;
    title: string;
    imgSrc: string;
    description: string;
}

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }: PanelProps) => {
    const { width } = useWindowSize();
    const isOpen = open === id;

    return (
        <>
            <button
                className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
                onClick={() => setOpen(id)}
            >
                <span
                    style={{ writingMode: "vertical-lr" }}
                    className="hidden lg:block text-xl font-light rotate-180"
                >
                    {title}
                </span>
                <span className="block lg:hidden text-xl font-light">{title}</span>
                <div className="w-6 lg:w-full aspect-square bg-primary text-white grid place-items-center">
                    <Icon />
                </div>
                <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={`panel-${id}`}
                        variants={width && width > 1024 ? panelVariants : panelVariantsSm}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        className="w-full h-full overflow-hidden relative bg-black flex items-end "
                    >
                        <motion.div
                            variants={descriptionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
                        >
                            <p>{description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const panelVariants = {
    open: { width: "100%", height: "100%" },
    closed: { width: "0%", height: "100%" },
};

const panelVariantsSm = {
    open: { width: "100%", height: "200px" },
    closed: { width: "100%", height: "0px" },
};

const descriptionVariants = {
    open: { opacity: 1, y: "0%", transition: { delay: 0.125 } },
    closed: { opacity: 0, y: "100%" },
};

const items = [
    {
        id: 1,
        title: "Ramayan Path – A Spiritual Gathering",
        Icon: FiDollarSign,
        imgSrc: "/eventsImages/ramayanpath.webp",
        description: "A peaceful Ramayan Path was organized to connect our community with timeless spiritual values...",
    },
    {
        id: 2,
        title: "Colors of Hope – Drawing Competition",
        Icon: FiPlay,
        imgSrc: "/eventsImages/1.webp",
        description: "A vibrant drawing competition was hosted by Viklang Kendra & Education Hub to ignite the spark...",
    },
    {
        id: 3,
        title: "Kheer Drive – Spreading Sweetness & Smiles",
        Icon: FiBell,
        imgSrc: "/eventsImages/2.webp",
        description: "A special Kheer distribution drive was held to spread sweetness, warmth, and joy among the community...",
    },
];
