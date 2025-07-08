const OurVideos = () => {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
            <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-center">
                Our Videos
            </p>
            <p className="mb-7 text-textSecondary lg:mx-16 text-sm sm:text-lg font-normal leading-tight text-center">
                Explore how we’re making a difference through real stories and moments. These videos highlight our work in education, health, and the environment — bringing change across Bharat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-9">
                <div className="w-full aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/5ZEh6ouWaR0"
                        title="Prani Mitra Awardees of the year 2020"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
                <div className="w-full aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/1cPn909lxTA"
                        title="Wetland Video Hindi"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}

export default OurVideos;