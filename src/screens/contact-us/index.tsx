import BreadcrumbBanner from "../../components/breadcrumb-banner";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";
import { Card, CardContent } from "../../components/ui/card";
import { EmployeeList, VolunteernList } from "./data";
import Swal from "sweetalert2";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdOutlineAccessTimeFilled } from "react-icons/md";


const ContactPage = () => {
    const tabs = ["VOLUNTEERN", "CARRER"];
    const [selected, setSelected] = useState(tabs[0]);

    const [loading, setLoading] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);

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
            <BreadcrumbBanner title="Contact Us" />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Change begins with us all
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    We believe that corporate partnerships are not only a way to help brands meet their CSR objectives, but also create sustainable impact for India’s children.
                </p>
            </div>
            <img src="https://www.cry.org/wp-content/themes/cry/images/children-wide-banner.jpg" alt="" className="w-full -mt-16" />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
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
                    <p className="mb-2 text-textSecondary lg:mx-16 text-md sm:text-xl font-normal leading-tight text-center">Join Viklang Kendra & Education Hub</p>
                    <p className="text-gray-500 lg:mx-16 text-xs sm:text-lg font-normal leading-tight text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex unde autem magni quaerat beatae omnis nostrum facere soluta sequi. Natus?</p>
                    <div className="flex justify-center items-center my-5">
                        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                            {selected === 'VOLUNTEERN' ? 'become a volunteern' : "Join Team"}
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <Carousel className="px-4 mx-auto w-[78%] md:w-2xl lg:w-5xl sm:px-6 lg:px-1">
                            <CarouselContent className="-ml-1">
                                {(selected === "VOLUNTEERN" ? VolunteernList : EmployeeList).map((feature, index) => (
                                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                        <div className="p-1 group"> {/* group for hover control */}
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center py-0 bg-[#000] rounded-xl relative overflow-hidden">
                                                    {/* Image with opacity transition */}
                                                    <img
                                                        src={feature.image}
                                                        alt=""
                                                        className="w-full h-full object-cover rounded-xl opacity-95 group-hover:opacity-50 transition-opacity duration-300"
                                                    />
                                                    {/* Title only visible on hover */}
                                                    <p className="text-white font-semibold text-2xl absolute text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        {feature.title}
                                                    </p>
                                                    <div className="absolute w-full bg-black bottom-0 text-center py-[2px] md:hidden">
                                                        <p className="text-white font-medium text-md">
                                                            {feature.title}

                                                        </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
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