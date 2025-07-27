import BreadcrumbBanner from "../../components/breadcrumb-banner";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdOutlineAccessTimeFilled } from "react-icons/md";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const ContactPage = () => {
    const tabs = ["VOLUNTEER", "CAREERS"];
    const [selected, setSelected] = useState(tabs[0]);

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
            <BreadcrumbBanner title="Contact Us" img="/empImage.webp" />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 fade-up">
                <div className="flex justify-center w-full mb-5">
                    <div className="inline-flex items-center gap-2 border rounded-lg px-2 py-2">
                        {tabs.map((tab) => (
                            <Chip
                                text={tab}
                                selected={selected === tab}
                                setSelected={setSelected}
                                key={tab}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-primary text-4xl sm:text-5xl font-semibold leading-tight text-center italic border-b-2 border-secondary sm:mx-10 pb-5 mb-5">{selected === 'VOLUNTEERN' ? 'Volunteers are our everyday heroes.' : 'Build Your Career At Viklang Kendra'}</p>
                    <p className="mb-2 text-textSecondary lg:mx-16 text-md sm:text-xl font-normal leading-tight text-center">{selected === 'VOLUNTEER' ? 'Join Viklang Kendra & Education Hub' : "Build a Fulfilling Career at Viklang Kendra"}</p>
                    <p className="text-gray-500 lg:mx-16 text-xs sm:text-lg font-normal leading-tight text-center">{selected === 'VOLUNTEER' ? "Join Viklang Kendra and contribute to bringing positive change in the lives of those who need it most. As a volunteer, you'll have the opportunity to help underprivileged children access quality education and nutritious meals. Be part of initiatives that empower disabled individuals by providing them with meaningful employment and skill-building opportunities." : "At Viklang Kendra, your work goes beyond a job—it’s a mission. We are dedicated to uplifting poor children by ensuring they receive education and proper nourishment, while also championing equal employment opportunities for disabled individuals. Joining our team means utilizing your skills to create real-world impact and empower communities in need. Be part of a passionate team committed to making lasting change. Grow your career while making a difference."}</p>
                    <div className="flex justify-center items-center my-5">
                        <a href={selected === 'VOLUNTEER' ? "https://forms.gle/6dwNGXmFbBVxbmy5A" : "https://forms.gle/HXg91TvVSJajqWFH7"} target="_blank">
                            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                            {selected === 'VOLUNTEER' ? 'become a volunteer' : "Join Team"}
                        </button>
                        </a>
                    </div>
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

export default ContactPage;

// @ts-ignore
const Chip = ({ text, selected, setSelected, }) => {
    return (
        <button
            onClick={() => setSelected(text)}
            className={`${selected
                ? "text-white"
                : "text-primary "
                } text-lg font-medium transition-colors px-2.5 py-0.5 rounded-md relative`}
        >
            <span className="relative z-10">{text}</span>
            {selected && (
                <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "spring", duration: 0.5 }}
                    className="absolute inset-0 z-0 bg-primary rounded-md"
                ></motion.span>
            )}
        </button>
    );
};