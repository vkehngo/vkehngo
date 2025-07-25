import { useState } from "react";
import BreadcrumbBanner from "../../components/breadcrumb-banner";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GalleryPage = () => {
    const items = [
        '/galleryImages/4.webp',
        '/galleryImages/5.webp',
        '/galleryImages/6.webp',
        '/galleryImages/7.webp',
        '/galleryImages/8.webp',
        '/galleryImages/9.webp',
        '/galleryImages/5.webp',
        '/galleryImages/6.webp',
        '/galleryImages/7.webp',
        '/galleryImages/8.webp',
        '/galleryImages/9.webp',
        '/galleryImages/12.webp',
        '/galleryImages/13.webp',
        '/galleryImages/14.webp',
        '/galleryImages/15.webp',
        '/galleryImages/16.webp',
        '/galleryImages/17.webp',
        '/galleryImages/18.webp',
        '/galleryImages/21.webp',
        '/galleryImages/22.webp',
        '/galleryImages/24.webp',
        '/galleryImages/25.webp',
        '/galleryImages/26.webp',
        '/galleryImages/27.webp',
        '/galleryImages/28.webp',
        '/galleryImages/29.webp',
        '/galleryImages/30.webp',
        '/galleryImages/31.webp',
        '/galleryImages/32.webp',
        '/galleryImages/33.webp',
    ];

    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = items.map((item) => ({ src: item }));

    return (
        <div>
            <BreadcrumbBanner title="Gallery" />

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Our Gallery
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsum consequuntur consequatur, esse quis inventore magnam in iure impedit neque? Vel iste provident nobis unde?
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {items.map((item, index) => (
                        <div key={index}>
                            <img
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setOpen(true);
                                }}
                                className="h-60 w-full rounded-lg object-cover cursor-pointer hover:scale-[102%] transition-all ease-in-out duration-300"
                                src={item}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={currentIndex}
            />

            <style>{`
                .yarl__container {
                    background-color: rgba(0, 0, 0, 0.8) !important;
                }
            `}</style>
        </div>
    );
};

export default GalleryPage;
