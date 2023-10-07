import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const idInt = parseFloat(id);


    const selectedCard = services?.find(card => card.id === idInt);

    const { bg, service_title, service_price, service_img, service_description } = selectedCard;

    const bg_color = {
        backgroundColor: bg,
    }

    return (
        <div>
            <div style={bg_color} className="card max-w-4xl mx-auto my-5 card-compact bg-base-100 shadow-xl">
                <figure className="h-[60vh]">
                    <img src={service_img} alt={service_title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service_title}</h2>
                    <p>{service_description}</p>
                    <div className="card-actions justify-end">
                        <p className="font-medium text-lg">Price:{service_price}$</p>
                        <Link to={"/"} className="btn btn-secondary">Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;