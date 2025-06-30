import image from '../../assets/image.jpg'

const HeroSection = () => {
    return (
        <div className="bg-white">
            <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-1">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold leading-tight text-textPrimary sm:text-5xl sm:leading-tight lg:leading-16 lg:text-[55px]">
                                Trusted Dental & Facial Aesthetic Solutions in Gurgaon
                            </h1>
                            <p className="mt-2 text-lg text-textSecondary sm:mt-4 font-inter">At <b className='text-primary'>32 Dant Chikitsa</b>, we specialize in delivering top-tier dental care and advanced aesthetic treatments. Led by Dr. [Name] and Dr. [Name], our Gurgaon-based clinic offers a modern, patient-centric approach to oral wellness and facial aesthetics, ensuring personalized care and exceptional results.</p>
                            <div className="relative">
                                <div className="inline-flex px-6 py-3 mt-5 text-lg font-bold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-hoverColor">Book Appointment</div>
                            </div>
                        </div>
                        <div>
                            <img className="w-full h-[20rem] md:h-[35rem] bg-red-500 object-cover rounded-2xl" src={image} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default HeroSection;