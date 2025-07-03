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
                <div className=" bg-cyan-700 rounded-2xl w-full p-5 text-center">
                    <p className="text-white text-2xl sm:text-3xl font-bold leading-tight text-center mb-1">{
                        selected === 'Mission' ? "Our Mission" : "Our Vision"}</p>
                    <p className="text-white text-sm md:text-base font-normal leading-relaxed text-center">{
                        selected === 'Mission' ? "The mission of a non-governmental organization (NGO) is to address a specific social or environmental issue. NGOs work to promote positive societal change through various means, such as advocacy, direct service provision, research, and education. The primary goal of an NGO is to improve the well-being of individuals and communities, often in marginalized or under-resourced areas." : " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, minus. Quam necessitatibus natus corporis ad? Quis aperiam debitis autem asperiores minus repellendus, ea, nisi labore ad ullam rem error animi. Ut deleniti esse rerum perferendis voluptatum incidunt tenetur cupiditate ratione, quis nihil fuga laudantium voluptatibus."}</p>
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