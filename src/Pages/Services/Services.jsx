import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Services = () => {
    const services = useLoaderData();

    return (
        <div>
            <h1 className="text-5xl text-center font-bold my-10">We Provide The Best Service <br /> For Your Event</h1>
            <h1 className="text-center text-2xl text-purple-600 font-serif font-medium mb-5">Services we provide</h1>
            <div className=" md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Services;