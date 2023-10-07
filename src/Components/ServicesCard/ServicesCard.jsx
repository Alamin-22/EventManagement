import PropTypes from "prop-types"



const ServicesCard = ({ services }) => {
    console.log(services)
    const { service_title, service_price, service_img, service_description } = services;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={service_img} alt={service_title} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service_title}</h2>
                    <p>{service_description.slice(0,180)}</p>
                    <p>Price: {service_price}$</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
ServicesCard.propTypes = {
    services: PropTypes.object.isRequired,
}
export default ServicesCard;