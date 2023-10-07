import PropTypes from "prop-types"
import { Link } from "react-router-dom";



const ServicesCard = ({ services }) => {
    // console.log(services)
    const {id ,service_title, service_price, service_img, service_description } = services;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={service_img} alt={service_title} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl font-bold text-slate-800">{service_title}</h2>
                    <p className=" font-medium text-gray-700">{service_description.slice(0, 180)}...</p>
                    <p className="text-lg font-medium">Price: {service_price}$</p>
                    <div className="card-actions w-full">
                        <Link to={`/service/${id}`} className="btn btn-outline btn-primary w-full">Details</Link>
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




// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// const ServicesCard = ({ services }) => {
//   const { id, service_title, service_price, service_img, service_description } = services;

//   return (
//     <div>
//       <div className="card bg-base-100 shadow-xl">
//         <figure className="px-10 pt-10">
//           <img src={service_img} alt={service_title} className="rounded-xl" />
//         </figure>
//         <div className="card-body items-center text-center">
//           <h2 className="text-2xl font-bold text-slate-800">{service_title}</h2>
//           <p className="font-medium text-gray-700">{service_description.slice(0, 180)}...</p>
//           <p className="text-lg font-medium">Price: {service_price}$</p>
//           <div className="card-actions w-full">
//             <Link to={`/service/${id}`} className="btn btn-outline btn-primary w-full">Details</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ServicesCard.propTypes = {
//   services: PropTypes.object.isRequired,
// };

// export default ServicesCard;
