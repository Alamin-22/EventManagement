import { Link, useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";

const UpComingEvents = () => {
    const Events = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-serif text-center text-purple-500 my-10">Our Up Coming Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-5 gap-5">
                {Events.map((ComingEvent) => <EventCard key={ComingEvent.id} ComingEvent={ComingEvent} ></EventCard>)}
            </div>
            <div className="text-center my-5 ">
                <Link to={"/services"} className='btn btn-primary'>Explore Our Services</Link>
            </div>
        </div>
    );
};

export default UpComingEvents;