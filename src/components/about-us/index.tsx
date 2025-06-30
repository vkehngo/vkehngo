const AboutUs = () => {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
            <p className="mb-7 text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                Viklang Kendra & Education Hub
            </p>
            <div className="w-full justify-start items-center xl:gap-2 gap-10 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-5 flex">
                        <div className="flex-col justify-start lg:items-start items-center gap-2 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-2 flex">
                                <h2 className="text-textPrimary text-2xl sm:text-3xl font-bold leading-tight lg:text-start text-center my-1">
                                    Welcome to Viklang Kendra & Education Hub
                                </h2>
                                <p className="text-textSecondary text-base font-normal leading-relaxed lg:text-start text-center">
                                    We are a dedicated non-profit organization working for the past two years to support special children and underprivileged youth. Our mission is to provide education, support, and opportunities to physically challenged and economically disadvantaged children.
                                    <br />
                                    Through seminars, workshops, and educational initiatives, we aim to empower these individuals and promote social change. Our passionate team believes in collective action to build a more inclusive and just society.
                                    <br />
                                    Explore our website to learn more, volunteer, or support our cause. Together, we can make a meaningful difference.
                                    <br />
                                    <b>NGO Registration No.:</b> HR/018/2020/02466
                                    <br />
                                    <b>PAN :</b> AAHAV2342J
                                </p>
                            </div>
                        </div>

                        <div className="w-full flex-col justify-center items-start gap-6 flex">
                            <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                <div className="w-full h-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex-col justify-start items-start gap-1 inline-flex">
                                    <h4 className="text-textPrimary text-2xl font-bold leading-9">45+</h4>
                                    <p className="text-textSecondary text-base font-normal leading-relaxed">
                                        Happy Donators
                                    </p>
                                </div>
                                <div className="w-full h-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex-col justify-start items-start gap-1 inline-flex">
                                    <h4 className="text-textPrimary text-2xl font-bold leading-9">455+</h4>
                                    <p className="text-textSecondary text-base font-normal leading-relaxed">
                                        Volunteer
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                <div className="w-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex-col justify-start items-start gap-1 inline-flex">
                                    <h4 className="text-textPrimary text-2xl font-bold leading-9">220K</h4>
                                    <p className="text-textSecondary text-base font-normal leading-relaxed">
                                        Donated Poor
                                    </p>
                                </div>
                                <div className="w-full h-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex-col justify-start items-start gap-1 inline-flex">
                                    <h4 className="text-textPrimary text-2xl font-bold leading-9">32#</h4>
                                    <p className="text-textSecondary text-base font-normal leading-relaxed">
                                        Love
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/certificate.jpg"
                        className="h-full"
                        alt="" />
                </div>
            </div>
        </div>
    )
};

export default AboutUs;