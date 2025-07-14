import BreadcrumbBanner from "../../components/breadcrumb-banner";
import { videosData } from "./data";

const VideosPage = () => {
    return (
        <div>
            <BreadcrumbBanner title="Videos" />

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Our Videos
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsum consequuntur consequatur, esse quis inventore magnam in iure impedit neque? Vel iste provident nobis unde?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-9">
                    {
                        videosData.map((video) => {
                            return (
                                <div className="w-full aspect-video">
                                    <iframe
                                        className="w-full h-full rounded-lg"
                                        src={video.link}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default VideosPage;