import { Link } from "react-router-dom";

const Glimpses = () => {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10 fade-up">
            <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                Glimpses of Hope in Action
            </p>
            <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                Browse through moments captured during our events, educational sessions, food drives, and community outreach — each frame telling a story of impact and compassion.
            </p>
            <div className="grid grid-cols-6 col-span-2   gap-2  ">
                <div className=" overflow-hidden rounded-xl col-span-3 max-h-[18rem]">
                    <img className="h-full w-full object-cover "
                        src="/2.webp"
                        alt="" />
                </div>
                <div className=" overflow-hidden rounded-xl col-span-3 max-h-[18rem]">
                    <img className="h-full w-full object-cover  "
                        src="/galleryImages/7.webp"
                        alt="" />
                </div>
                <div className=" overflow-hidden rounded-xl col-span-2 max-h-[18rem]">
                    <img className="h-full w-full object-cover "
                        src="/galleryImages/12.webp"
                        alt="" />
                </div>
                <div className=" overflow-hidden rounded-xl col-span-2 max-h-[18rem]">
                    <img className="h-full w-full object-cover "
                        src="/galleryImages/14.webp"
                        alt="" />
                </div>
                <Link to={"gallery"} onClick={
                    () => window.scrollTo({
                        top: 0,
                    })
                } className="relative overflow-hidden rounded-xl col-span-2 max-h-[18rem] cursor-pointer">
                    <div
                        className="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
                        + 23
                    </div>
                    <img className="h-full w-full object-cover "
                        src="/galleryImages/18.webp"
                        alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Glimpses;