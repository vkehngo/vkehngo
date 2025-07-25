import { FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import { useWindowSize } from "../../lib/useWindowSize";

const EventsSection = () => {
    const [open, setOpen] = useState(items[0].id);

    return (
        <div className="bg-gray-100">
            <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    Events
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    While we serve in countless ways, we've focused our efforts in seven key areas to maximise our impact. These encompass some of the bharat most critical humanitarian needs and provide an opportunity for our members to transform the Bharat.
                </p>
                <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
                    {items.map((item) => {
                        return (
                            <Panel
                                key={item.id}
                                open={open}
                                setOpen={setOpen}
                                id={item.id}
                                Icon={item.Icon}
                                title={item.title}
                                imgSrc={item.imgSrc}
                                description={item.description}
                            />
                        );
                    })}
                </div>
                <div className="flex justify-center items-center gap-4 mt-5">
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                        Donate
                    </button>
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                        become a volunteer
                    </button>
                </div>
            </section>
        </div>
    );
};

interface PanelProps {
    open: number;
    setOpen: Dispatch<SetStateAction<number>>;
    id: number;
    Icon: IconType;
    title: string;
    imgSrc: string;
    description: string;
}

const Panel = ({
    open,
    setOpen,
    id,
    Icon,
    title,
    imgSrc,
    description,
}: PanelProps) => {
    const { width } = useWindowSize();
    const isOpen = open === id;

    return (
        <>
            <button
                className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
                onClick={() => setOpen(id)}
            >
                <span
                    style={{
                        writingMode: "vertical-lr",
                    }}
                    className="hidden lg:block text-xl font-light rotate-180"
                >
                    {title}
                </span>
                <span className="block lg:hidden text-xl font-light">{title}</span>
                <div className="w-6 lg:w-full aspect-square bg-primary text-white grid place-items-center">
                    <Icon />
                </div>
                <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={`panel-${id}`}
                        variants={width && width > 1024 ? panelVariants : panelVariantsSm}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        className="w-full h-full overflow-hidden relative bg-black flex items-end"
                    >
                        <motion.div
                            variants={descriptionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
                        >
                            <p>{description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default EventsSection;

const panelVariants = {
    open: {
        width: "100%",
        height: "100%",
    },
    closed: {
        width: "0%",
        height: "100%",
    },
};

const panelVariantsSm = {
    open: {
        width: "100%",
        height: "200px",
    },
    closed: {
        width: "100%",
        height: "0px",
    },
};

const descriptionVariants = {
    open: {
        opacity: 1,
        y: "0%",
        transition: {
            delay: 0.125,
        },
    },
    closed: { opacity: 0, y: "100%" },
};

const items = [
    {
        id: 1,
        title: "Ramayan Path – A Spiritual Gathering",
        Icon: FiDollarSign,
        imgSrc:
            "/eventsImages/ramayanpath.png",
        description:
            "A peaceful Ramayan Path was organized to connect our community with timeless spiritual values...",
    },
    {
        id: 2,
        title: "Colors of Hope – Drawing Competition",
        Icon: FiPlay,
        imgSrc:
            "/eventsImages/1.png",
        description:
            "A vibrant drawing competition was hosted by Viklang Kendra & Education Hub to ignite the spark...",
    },
    {
        id: 3,
        title: "Kheer Drive – Spreading Sweetness & Smiles",
        Icon: FiBell,
        imgSrc:
            "/eventsImages/2.png",
        description:
            "A special Kheer distribution drive was held to spread sweetness, warmth, and joy among the community...",
    },
];