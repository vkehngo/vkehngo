import { useLayoutEffect } from "react";
import BreadcrumbBanner from "../../components/breadcrumb-banner";
import FounderWords from "../../components/founder-words";
import MissionVision from "../../components/mission-vision";
import { Card, CardContent } from "../../components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../components/ui/carousel"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUsPage = () => {

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

    const timelineData = [
        {
            date: "2021",
            title: "Academic Foundation Laid",
            des: "Completed Master’s degree, marking the beginning of a lifelong pursuit of knowledge and self-reliance."
        },
        {
            date: "2002 – 2015",
            title: "Overcoming Challenges",
            des: "Faced and navigated personal and societal barriers while building a strong professional foundation — laying the groundwork for future service."
        },
        {
            date: "2020",
            title: "Serving the Needy Individually",
            des: "Started helping underprivileged children with free education and meals, and supported disabled individuals in securing jobs — purely through personal effort and compassion."
        },
        {
            date: "2022",
            title: "Advocate Degree & VKEH Established",
            des: "Completed LLB and founded Viklang Kendra & Education Hub (VKEH) with a mission to create structured support systems for the differently-abled and underprivileged children."
        },
        {
            date: "2023",
            title: "First CSR Funding Received",
            des: "A breakthrough year — Viklang Kendra & Education Hub received its first CSR funding, enabling the expansion of education programs and food drives."
        },
        {
            date: "2025",
            title: "Recognition & Expansion",
            des: "Hosted NGO visit by Richard from Knohow and his team — strengthening global ties and building credibility."
        },
    ]

    const featuresList = [
        { image: '/team/1.webp', title: 'Dinesh Mehta', des: 'member 1' },
        { image: '/team/3.webp', title: 'Dollar Chauduary', des: 'member 1' },
        { image: '/team/2.webp', title: 'Umesh Chand', des: 'member 1' },
        { image: '/team/5.webp', title: 'Priti', des: 'member 1' },
        { image: '/team/6.webp', title: 'Malti', des: 'member 1' },
        { image: '/team/4.webp', title: 'Himanshu', des: 'member 1' },
    ];

    return (
        <div>
            <BreadcrumbBanner
                title="About Us"
            />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 fade-up">
                <p className="mb-7 text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Viklang Kendra & Education Hub
                </p>
                <div className="w-full justify-start items-center xl:gap-2 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-5 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-2 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-2 flex">
                                    <h2 className="text-textPrimary text-2xl sm:text-3xl font-bold leading-tight lg:text-start text-center my-1">
                                        Welcome to Viklang Kendra & Education Hub
                                    </h2>
                                    <p className="text-textSecondary text-base font-normal leading-relaxed lg:text-start text-center">
                                        We are a dedicated non-profit organization working for the past two years to support special children and underprivileged youth. Our mission is to provide education, support, and opportunities to physically challenged and economically disadvantaged children.
                                        <br />
                                        Through seminars, workshops, and educational initiatives, we aim to empower these individuals and promote social change. Our passionate team believes in collective action to build a more inclusive and just society.
                                        <br />
                                        Explore our website to learn more, volunteer, or support our cause. Together, we can make a meaningful difference.
                                        <br />
                                        <br />
                                        <b>NGO Registration No.:</b> HR/018/2020/02466
                                        <br />
                                        <b>PAN :</b> AAHAV2342J
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="/certificate.webp"
                            className="h-[30rem]"
                            alt="" />
                    </div>
                </div>
            </div>
            <div className="fade-up">
                <FounderWords />
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 fade-up">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Meet Our Team - The Pillars of VKEH
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    A passionate team empowering lives through education and inclusion.
                </p>
                <div className="flex items-center justify-center">
                    <Carousel className="px-4 mx-auto w-[78%] md:w-2xl lg:w-5xl sm:px-6 lg:px-1">
                        <CarouselContent className="-ml-1">
                            {featuresList.map((feature, index) => (
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
                                                <div className="absolute w-full bg-secondary bottom-0 text-center py-[2px] md:hidden">
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
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 fade-up">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Our Journey of Grit & Giving
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    From personal struggles to building a movement — explore key milestones that shaped the vision and growth of VKEH, driven by purpose, perseverance, and people.
                </p>
                <div className="relative col-span-12 md:px-4 space-y-6 sm:col-span-9">
                    <div className="col-span-12 space-y-6 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                        {
                            timelineData.map((data, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-secondary">
                                        <h3 className="text-xl font-semibold tracking-wide text-textPrimary">{data.title}</h3>
                                        <time className="text-xs tracking-wide uppercase text-textSecondary">{data.date}</time>
                                        <p className="mt-1 text-textSecondary">{data.des}</p>
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

export default AboutUsPage;

