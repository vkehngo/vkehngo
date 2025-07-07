import BreadcrumbBanner from "../../components/breadcrumb-banner";
import { useNavigate, useParams } from "react-router-dom";
import { eventData } from "../events/eventsData";
import { BsXDiamondFill } from "react-icons/bs";

interface EventProp {
    id: number;
    title: string;
    des: string;
    image: string;
    date?: string;
}

const EventDetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const event: EventProp | undefined = eventData.find(e => e.id === Number(id));

    if (!event) {
        return <div className="px-4 py-10 text-center text-red-500">Event not found.</div>;
    }

    return (
        <div>
            <BreadcrumbBanner title='Event Details' />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div className=" col-span-3">
                        <div className="w-full md:w-[90%] h-[300px] md:h-[400px]">
                            <img src={event.image} alt="" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <p className="bg-primary inline-block py-2 px-3 rounded-lg text-white my-4">{event.date}</p>
                        <p className="font-semibold uppercase text-lg md:text-2xl text-textPrimary">{event.title}</p>
                        <p className="font-normal text-md md:text-xl text-textSecondary">{event.des}</p>
                    </div>
                    <div className="border-t pt-3 md:border-l md:border-t-0 md:p-5">
                        <p className="font-semibold uppercase text-lg md:text-2xl text-black mb-5">More Events</p>
                        {
                            eventData.map((data, index) => {
                                return (
                                    <>
                                        <div className="flex items-center gap-2">
                                            <img
                                                src="/gif.gif" // replace with your GIF path
                                                alt="bullet"
                                                className="w-3.5 h-3.5 object-contain" // adjust size as needed
                                            />
                                            <p
                                                onClick={() => navigate(`/events/${data.id}`)}
                                                className="text-md font-normal cursor-pointer">{data.title}</p>
                                        </div>
                                        <div className="w-[90%] h-[1px] bg-black/50 ml-6 mt-1 mb-2" />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsPage;
