import AboutUs from "../../components/about-us";
import BreadcrumbBanner from "../../components/breadcrumb-banner";
import MissionVision from "../../components/mission-vision";

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

    return (
        <div>
            <BreadcrumbBanner
                title="About Us"
            />
            <AboutUs />
            <div className="bg-gray-100">
                <MissionVision />
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Time
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

