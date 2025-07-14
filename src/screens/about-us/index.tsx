import AboutUs from "../../components/about-us";
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

const AboutUsPage = () => {

    const timelineData = [
        {
            date: "Dec 2020",
            title: "Donec porta enim vel",
            des: "Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus."
        },
        {
            date: "Jun 2019",
            title: "Aliquam sit amet nunc ut",
            des: "Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales."
        },
        {
            date: "Jan 2016",
            title: "Pellentesque habitant morbi",
            des: "Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim."
        },
    ]

    const featuresList = [
        { image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg', title: 'Name - 1', des: 'member 1' },
        { image: 'https://cdn.pixabay.com/photo/2014/01/29/06/32/anatomy-254120_640.jpg', title: 'Name - 2', des: 'member 2' },
        { image: 'https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?semt=ais_hybrid&w=740', title: 'Name - 3', des: 'member 3' },
        { image: 'https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg', title: 'Name - 4', des: 'member 4' },
        { image: 'https://public-media.interaction-design.org/images/courses/hds/course_72--square_thumbnail.jpg?tr=fo-auto2', title: 'Name - 5', des: 'member 5' },
    ];

    return (
        <div>
            <BreadcrumbBanner
                title="About Us"
            />
            <AboutUs />
            <div className="bg-gray-100">
                <MissionVision />
            </div>
            <FounderWords />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Team Members
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed itaque tempore ut rem animi inventore voluptas incidunt exercitationem dolores.
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
                                                    {feature.title} <br />
                                                    {feature.des}
                                                </p>
                                                <div className="absolute w-full bg-black bottom-0 text-center py-[2px] md:hidden">
                                                    <p className="text-white font-medium text-md">
                                                        {feature.title} <br />
                                                        {feature.des}

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
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Timeline
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed itaque tempore ut rem animi inventore voluptas incidunt exercitationem dolores.
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

