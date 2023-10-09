import PropTypes from 'prop-types'; // ES6
const EventCard = ({ ComingEvent }) => {
    const { title, img, date } = ComingEvent;
    return (
        <div>
            <div className="card   bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="Shoes" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-lg text-pink-500">Event Date: {date}</p>
                </div>
            </div>
        </div>
    );
};
EventCard.propTypes = {
    ComingEvent: PropTypes.object.isRequired,
}
export default EventCard;