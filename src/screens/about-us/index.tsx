import AboutUs from "../../components/about-us";
import BreadcrumbBanner from "../../components/breadcrumb-banner";
import MissionVision from "../../components/mission-vision";

const AboutUsPage = () => {
    return (
        <div>
            <BreadcrumbBanner
                title="About Us"
            />
            <AboutUs />
            <div className="bg-gray-100">
                <MissionVision />
            </div>
            
        </div>
    )
};

export default AboutUsPage;

