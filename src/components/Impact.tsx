import { BiSolidDonateHeart, BiSolidFoodMenu } from "react-icons/bi";
import { NumberTicker } from "./ui/NumberTicker";
import { FaPeopleGroup } from "react-icons/fa6";

const Impact = () => {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
            <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                Every Effort, Every Life Touched
            </p>
            <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                From free education to employment support and food drives, our work has reached hundreds of lives. Discover how your support helps us drive meaningful change.
            </p>
            <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-4 grid-cols-1">
                    <div className="w-full h-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex justify-start items-center gap-3 shadow-sm shadow-secondary">
                        <BiSolidDonateHeart size={50} className="text-textPrimary" />
                        <div>
                            <h4 className="text-textPrimary text-2xl font-bold leading-9">
                                <NumberTicker
                                    value={45}
                                    className=""
                                />
                                +
                            </h4>
                            <p className="text-textPrimary text-base font-normal leading-relaxed">
                                Happy Donators
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex justify-start items-center gap-3 shadow-sm shadow-secondary">
                        <FaPeopleGroup size={50} className="text-textPrimary" />
                        <div>
                            <h4 className="text-textPrimary text-2xl font-bold leading-9">
                                <NumberTicker
                                    value={250}
                                    className=""
                                />
                                +
                            </h4>
                            <p className="text-textPrimary text-base font-normal leading-relaxed">
                                Volunteer
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex justify-start items-center gap-3 shadow-sm shadow-secondary">
                        <BiSolidFoodMenu size={50} className="text-textPrimary" />
                        <div>
                            <h4 className="text-textPrimary text-2xl font-bold leading-9">
                                <NumberTicker
                                    value={1000}
                                    className=""
                                />
                                +
                            </h4>
                            <p className="text-textPrimary text-base font-normal leading-relaxed">
                                Donated Poor
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex justify-start items-center gap-3 shadow-sm shadow-secondary">
                        <BiSolidDonateHeart size={50} className="text-textPrimary" />
                        <div>
                            <h4 className="text-textPrimary text-2xl font-bold leading-9">
                                <NumberTicker
                                    value={500}
                                    className=""
                                />
                                +
                            </h4>
                            <p className="text-textPrimary text-base font-normal leading-relaxed">
                                NGO Drives
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Impact;