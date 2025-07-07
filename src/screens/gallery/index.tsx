import { useState } from "react";
import BreadcrumbBanner from "../../components/breadcrumb-banner";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GalleryPage = () => {
    const items = [
        {
            id: "1",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
        },
        {
            id: "2",
            img: "https://picsum.photos/id/1011/600/750?grayscale",
        },
        {
            id: "3",
            img: "https://picsum.photos/id/1020/600/800?grayscale",
        },
        {
            id: "4",
            img: "https://picsum.photos/id/1019/600/900?grayscale",
        },
        {
            id: "5",
            img: "https://picsum.photos/id/1014/600/750?grayscale",
        },
        {
            id: "6",
            img: "https://picsum.photos/id/1021/600/800?grayscale",
        },
        {
            id: "7",
            img: "/banner-1.jpeg",
        },
    ];

    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = items.map((item) => ({ src: item.img }));

    return (
        <div>
            <BreadcrumbBanner title="Gallery" />

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Our Gallery
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-lg sm:text-xl font-normal leading-tight text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsum consequuntur consequatur, esse quis inventore magnam in iure impedit neque? Vel iste provident nobis unde?
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {items.map((item, index) => (
                        <div key={item.id}>
                            <img
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setOpen(true);
                                }}
                                className="h-60 w-full rounded-lg object-cover cursor-pointer hover:scale-[102%] transition-all ease-in-out duration-300"
                                src={item.img}
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
