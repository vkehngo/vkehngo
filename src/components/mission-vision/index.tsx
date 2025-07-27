import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Mission", "Vision"];

const MissionVision = () => {
    const [selected, setSelected] = useState(tabs[0]);

    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
            <div className="inline-flex items-center gap-2 border rounded-lg px-2 py-2 mx-auto mb-5">
                {tabs.map((tab) => (
                    <Chip
                        text={tab}
                        selected={selected === tab}
                        setSelected={setSelected}
                        key={tab}
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className=" bg-secondary rounded-2xl w-full p-5 text-center">
                    <p className="text-white text-2xl sm:text-3xl font-bold leading-tight text-center my-5">{
                        selected === 'Mission' ? "Our Mission" : "Our Vision"}</p>
                    <p className="text-white text-sm md:text-base font-normal leading-relaxed text-justify">{
                        selected === 'Mission' ? "To empower differently-abled individuals and underprivileged children by providing free, quality education, vocational training, and employment support — helping them live with dignity, independence, and purpose. We aim to build an inclusive society where every individual, regardless of physical ability or background, has equal access to growth  opportunity." : "To create a nationwide network of inclusive education and employment centers where every disabled person and underprivileged child can receive the tools, training, and guidance they need to lead empowered lives. Our vision is a barrier-free India — where ability is recognized, dreams are nurtured, and every life is valued equally."}</p>
                </div>
                <div className="w-full rounded-2xl aspect-video md:aspect-auto">
                    <img src={
                        selected === 'Mission' ? "https://nititantra.com/wp-content/uploads/2022/08/0.25794500_1645773147_istock-870402320.jpg" : "https://sc0.blr1.digitaloceanspaces.com/large/862178-63119-sktxytvhxi-1500027620.jpg"} alt="" className="object-cover w-full h-full rounded-2xl" />
                </div>
            </div>
        </div>
    )
}

// @ts-ignore
const Chip = ({ text, selected, setSelected, }) => {
    return (
        <button
            onClick={() => setSelected(text)}
            className={`${selected
                ? "text-white"
                : "text-primary "
                } text-lg font-medium transition-colors px-2.5 py-0.5 rounded-md relative`}
        >
            <span className="relative z-10">{text}</span>
            {selected && (
                <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "spring", duration: 0.5 }}
                    className="absolute inset-0 z-0 bg-primary rounded-md"
                ></motion.span>
            )}
        </button>
    );
};


export default MissionVision;