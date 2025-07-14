import BlurText from "../ui/BlurText";

const FounderWords = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
            <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                Our President Words
            </p>
            <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et maxime perferendis sit nostrum neque!
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:mx-10 border border-dashed p-2 md:p-5 rounded-2xl">
                <img src="https://viklangkendra.org/img/0624061206252631Vijay.jpg" alt="" className="w-full md:w-[20rem] h-[20rem] object-cover border rounded-2xl" />
                <div>
                    <p className="text-textPrimary text-2xl font-bold -mb-1">Name of president</p>
                    <p className="text-textSecondary text-sm">President</p>
                    <BlurText
                        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet suscipit id natus autem consectetur odit adipisci voluptatum inventore quae non delectus magni architecto commodi, provident, quam quos assumenda! Facere beatae doloremque vel accusantium vitae incidunt aspernatur, suscipit porro delectus architecto necessitatibus perferendis non voluptatum ex consequuntur corporis exercitationem quae nostrum ducimus soluta corrupti esse aperiam obcaecati nihil? Repudiandae nulla dolore itaque aut impedit dolorum commodi amet praesentium quisquam pariatur ipsam odit doloremque reprehenderit doloribus vel ad, cupiditate sint! Repudiandae!"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="mt-4 text-lg text-textPrimary text-justify"
                    />
                </div>
            </div>
        </div>
    )
};

export default FounderWords;