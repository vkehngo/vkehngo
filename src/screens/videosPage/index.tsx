import { useLayoutEffect } from "react";
import BreadcrumbBanner from "../../components/breadcrumb-banner";
import { videosData } from "./data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const VideosPage = () => {

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
            <BreadcrumbBanner title="Videos" img="/2.webp"/>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 fade-up">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Our Videos
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                   Explore our comprehensive video collection documenting key organizational initiatives, including educational programs, community service projects, food distribution efforts, and outreach activities. Each video captures the meaningful impact and dedication that drives our mission.
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
                            <div key={index} className={`${gridCols} ${aspectRatio} border rounded-lg fade-up`}>
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
