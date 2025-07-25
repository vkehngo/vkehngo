const OurVideos = () => {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-9">
                <div className="w-full aspect-video">
                    <p className="text-primary text-4xl sm:text-5xl font-bold leading-tight text-start mb-5 border-s-[6px] border-secondary ps-2">
                        President's Message
                    </p>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ut quae. Illum similique id ipsa qui quam excepturi ut aliquam. Voluptate quam nihil reprehenderit deserunt consequuntur repellat ea, non laboriosam dolores ipsum id, modi eaque laborum totam laudantium porro odit. Quasi odio autem temporibus debitis distinctio, et aliquid id dignissimos.</p>
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