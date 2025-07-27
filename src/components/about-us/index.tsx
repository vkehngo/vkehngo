import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const AboutUs = () => {

    const featuresList = [
        { image: '2.webp' },
        { image: '3.webp' },
        { image: '4.webp' },
        { image: '5.webp' },
        { image: '/galleryImages/5.webp' },
        { image: '/galleryImages/6.webp' },
        { image: '/galleryImages/7.webp' },
        { image: '/galleryImages/8.webp' },
    ];

    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 ">
            <div className="shadow-md rounded-2xl p-4 border-2 border-secondary mb-4">
                <p className="mb-2 text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Viklang Kendra & Education Hub
                </p>
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-5 flex">
                        <div className="flex-col justify-start lg:items-start items-center gap-2 flex">
                            <div className="w-full flex-col justify-start lg:items-center items-center gap-2 flex">
                                <h2 className="text-textPrimary text-2xl sm:text-3xl font-bold leading-tight lg:text-center text-center my-1">
                                    Welcome to Viklang Kendra & Education Hub
                                </h2>
                                <p className="text-textSecondary text-base font-normal leading-relaxed text-justify">
                                    We are a dedicated non-profit organization working for the past two years to support special children and underprivileged youth. Our mission is to provide education, support, and opportunities to physically challenged and economically disadvantaged children.
                                    Through seminars, workshops, and educational initiatives, we aim to empower these individuals and promote social change. Our passionate team believes in collective action to build a more inclusive and just society.
                                    Explore our website to learn more, volunteer, or support our cause. Together, we can make a meaningful difference.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-10">
                <div className="flex items-center justify-center">
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                        className="px-4 mx-auto w-[78%] md:w-2xl lg:w-5xl sm:px-6 lg:px-1">
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
    )
};

export default AboutUs;