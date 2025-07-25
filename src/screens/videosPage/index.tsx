import BreadcrumbBanner from "../../components/breadcrumb-banner";
import { videosData } from "./data";

const VideosPage = () => {
    // @ts-ignore
    const renderVideo = (video) => {
        switch (video.type) {
            case 'youtube':
                return (
                    <iframe
                        className="w-full h-full rounded-lg"
                        src={video.link}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                );
            
            case 'instagram':
                return (
                    <iframe
                        className="w-full h-full rounded-lg"
                        src={video.link}
                        title={video.title}
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency
                        allowFullScreen
                    />
                );
            
            default:
                return (
                    <div className="w-full h-full rounded-lg bg-gray-200 flex items-center justify-center">
                        <p className="text-gray-500">Video type not supported</p>
                    </div>
                );
        }
    };

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
                
                {/* 12-column grid system */}
                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    {videosData.map((video, index) => {
                        // YouTube videos take 12 cols on mobile, 6 cols on tablet+
                        // Instagram videos take 12 cols on mobile, 3 cols on tablet+
                        const gridCols = video.type === 'instagram' 
                            ? 'col-span-12 sm:col-span-6 md:col-span-3' 
                            : 'col-span-12 md:col-span-6';
                        
                        const aspectRatio = video.type === 'instagram' 
                            ? 'aspect-[9/16]' 
                            : 'aspect-video';

                        return (
                            <div key={index} className={`${gridCols} ${aspectRatio} border rounded-lg`}>
                                {renderVideo(video)}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default VideosPage;
