import PropTypes from "prop-types"
import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { id, service_title, service_price, service_img, service_description } = card;
    // console.log(card)

    return (
        <div>
            <div className="card   bg-base-200 shadow-xl">
                <figure>
                    <img src={service_img} alt={service_title} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl font-bold text-slate-800">{service_title}</h2>
                    <p className=" font-medium text-gray-700 text-justify">{service_description.slice(0, 160)}....Click Details for more</p>
                    <p className="text-lg font-medium">Price: {service_price}$</p>
                    <div className="card-actions w-full">
                        <Link to={`/service/${id}`} className="btn btn-outline btn-primary w-full">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object.isRequired,
}
export default Card;