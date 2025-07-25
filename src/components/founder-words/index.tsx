const FounderWords = () => {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
            <p className="mb-2 text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                From a Challenging Childhood to a Life of Service
            </p>
            <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                His life challenges inspired a movement to educate and employ the underserved.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:mx-10 border border-dashed p-2 md:p-5 rounded-2xl">
                <img src="/vijay.webp" alt="" className="w-full md:w-[20rem] h-[20rem] object-cover border rounded-2xl" />
                <div>
                    <p className="text-textPrimary text-2xl md:text-4xl font-bold mb-1">Vijay Gaur</p>
                    <p className="text-textPrimary text-sm">President, Viklang Kendra & Education Hub</p>
                    <p className="mt-4 text-lg text-textPrimary text-justify">I was handicapped by birth and under difficult circumstances I managed to complete my studies and become Charted accountant then completed my LLB.  I used to help many of the people who are disabled and looking for employment and kids whose paents are not able to afford education to their child, I give them free of cost education and mid day meals. and in 2022 I have started my own NGO "VKEH" with my team members and my aim is to setup multiple free education and employment set up for disabled person and kids.</p>
                </div>
            </div>
        </div>
    )
};

export default FounderWords;