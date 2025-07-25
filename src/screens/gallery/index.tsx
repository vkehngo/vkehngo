import { useState } from "react";
import BreadcrumbBanner from "../../components/breadcrumb-banner";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GalleryPage = () => {
    const items = [
        '/galleryImages/4.png',
        '/galleryImages/5.png',
        '/galleryImages/6.png',
        '/galleryImages/7.png',
        '/galleryImages/8.png',
        '/galleryImages/9.png',
        '/galleryImages/5.jpg',
        '/galleryImages/6.jpeg',
        '/galleryImages/7.jpeg',
        '/galleryImages/8.jpeg',
        '/galleryImages/9.jpeg',
        '/galleryImages/12.jpeg',
        '/galleryImages/13.jpeg',
        '/galleryImages/14.jpeg',
        '/galleryImages/15.jpeg',
        '/galleryImages/16.jpeg',
        '/galleryImages/17.jpeg',
        '/galleryImages/18.jpeg',
        '/galleryImages/21.jpeg',
        '/galleryImages/22.jpeg',
        '/galleryImages/24.jpeg',
        '/galleryImages/25.jpeg',
        '/galleryImages/26.jpeg',
        '/galleryImages/27.png',
        '/galleryImages/28.jpg',
        '/galleryImages/29.jpeg',
        '/galleryImages/30.jpeg',
        '/galleryImages/31.jpeg',
        '/galleryImages/32.jpeg',
        '/galleryImages/33.jpeg',
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
