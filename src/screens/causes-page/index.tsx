import BreadcrumbBanner from "../../components/breadcrumb-banner";

const CausesPage = () => {


    const causesData = [
        {
            title: "Education",
            des: "Education is a fundamental right, and it's crucial for the growth and development of every individual. Education molds our ideas, builds our personality, and creates a sense of responsibility towards society. Unfortunately, not everyone can afford education, which results in a significant population remaining uneducated. Providing free education to all is crucial for the welfare of society and the progress of the country. Governments and philanthropists need to take the initiative to ensure that every individual has access to education, as education is the only sustainable solution to poverty, inequality, and social injustice.",
            image: "https://goodworks.org.in/wp-content/uploads/2023/11/NGOs-working-for-education-in-India-1.webp"
        },
        {
            title: "Health",
            des: "Get a free health checkup at our clinic! Our team of experienced doctors and nurses will provide a comprehensive assessment of your overall health and well-being, including vital signs, blood pressure, body mass index, and more. We'll also offer personalized recommendations and resources to help you maintain a healthy lifestyle. Best of all, there's no cost or obligation – just book an appointment and we'll take care of the rest! Don't wait – take the first step towards a happier, healthier you today.",
            image: "https://savioursfoundation.org/wp-content/uploads/2020/03/Health.webp"
        },
        {
            title: "Environment",
            des: "We must take action to save our environment before it's too late. We need to reduce our carbon footprint by driving less, using public transportation, or carpooling. We should also conserve water by turning off the tap when we brush our teeth and taking shorter showers. It's important to properly dispose of waste by recycling and composting. We can also support sustainable businesses and reduce our energy consumption by using energy-efficient appliances and turning off lights when we leave a room. Finally, we must advocate for government policies that prioritize protecting the environment. Small actions can have a big impact on our planet’s health.",
            image: "https://www.persistentfoundation.org/wp-content/uploads/2021/07/large-image-cd-tree-plantation-july-2019.webp"
        },

    ]

    return (
        <div>
            <BreadcrumbBanner
                title="Causes"
            />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                    The causes we care about
                </p>
                <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                    While we serve in countless ways, we've focused our efforts in seven key areas to maximise our impact. These encompass some of the bharat most critical humanitarian needs and provide an opportunity for our members to transform the Bharat.
                </p>
                <div className="mt-20 space-y-20">
                    {
                        causesData.map((data, index) => {
                            return (
                                <div className="w-full border rounded-2xl p-5" key={index}>
                                    <div className="h-[180px] md:h-[200px] relative bg-black rounded-2xl -mt-16 mb-2">
                                        <img src={data.image} alt="" className="h-full w-full object-cover opacity-45 rounded-2xl" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <h1 className="text-white text-2xl md:text-4xl font-bold">{data.title}</h1>
                                        </div>
                                    </div>
                                    <p>{data.des}</p>
                                    <div className="flex justify-start items-center gap-4 mt-5">
                                        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                                            Donate
                                        </button>
                                        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-secondary py-3 px-3 text-center align-middle text-sm font-semibold uppercase text-white shadow-md shadow-secondary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                                            become a volunteern
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

export default CausesPage;
