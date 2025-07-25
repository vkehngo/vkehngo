// @ts-ignore
import banner from '/breadcumImage.png';

interface BreadcrumbBannerProps {
    title: string;
}

const BreadcrumbBanner: React.FC<BreadcrumbBannerProps> = ({ title }) => {
    return (
        <div className="w-full h-[200px] md:h-[300px] relative bg-black">
            <img src={banner} alt="" className="h-full w-full object-cover opacity-65" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
                <h1 className="text-white text-4xl font-bold">{title}</h1>
            </div>
        </div>
    )
};

export default BreadcrumbBanner;