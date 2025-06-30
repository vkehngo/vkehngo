import AboutUs from "../../components/about-us";
import { SwipeCarousel } from "../../components/carousel";
import Causes from "../../components/causes";
import OurVideos from "../../components/our-videos";
import aboutImage from '/banner-3.jpg'

const Home = () => {
    return (
        <div>
            <SwipeCarousel />
            <AboutUs />
            <Causes />
            <section className="w-full relative py-14 lg:pb-20 px-5 lg:px-0 bg-black" id="about">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${aboutImage})` }}
                ></div>
                <div className="relative z-10 rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl max-w-xl lg:max-w-3xl mx-auto font-bold text-white text-center">
                        Are You Like To Help People Across The World Through Social Causes ?
                    </h3>
                    <p className="text-lg md:text-lg text-white max-w-lg mx-auto text-center">
                        Call us now +91 9873653629
                    </p>
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-6 text-center align-middle font-sans text-md font-bold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                        Make Your Contribution
                    </button>
                </div>
            </section>
            <OurVideos />
        </div>
    )
};

export default Home;