const Causes = () => {

    const cardData = [
        {
            title: "Education",
            des: "Education is a fundamental right, and it's crucial for the growth and development of every indi..",
            img: "/galleryImages/25.jpeg"
        },
        {
            title: "Employment",
            des: "Get a free health checkup at our clinic! Our team of experienced doctors and nurses will provide..",
            img: "/empImage.jpeg"
        },
        {
            title: "Food Donation",
            des: "We must take action to save our environment before it's too late. We need to reduce our..",
            img: "/galleryImages/24.jpeg"
        },
    ]


    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
            <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                The causes we care about
            </p>
            <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                While we serve in countless ways, we've focused our efforts in seven key areas to maximise our impact. These encompass some of the bharat most critical humanitarian needs and provide an opportunity for our members to transform the Bharat.
            </p>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-12">
                    {
                        cardData.map((data, index) => {
                            return (
                                <div className="relative flex w-full flex-col group rounded-xl bg-white bg-clip-border border" key={index}>
                                    <div className="relative mx-4 mt-4 group-hover:-mt-6 group-hover:mb-6 transition-all ease-in-out duration-300 h-40 overflow-hidden rounded-xl shadow-lg">
                                        <img src={data.img} alt="" className=" object-bottom"/>
                                    </div>
                                    <div className="px-6 py-3">
                                        <h5 className="mb-1 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-textPrimary">
                                            {data.title}
                                        </h5>
                                        <p className="block text-base font-normal leading-relaxed antialiased text-textSecondary">
                                            {data.des}
                                        </p>
                                    </div>
                                    <div className="px-6 py-4 pt-0">
                                        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Causes;