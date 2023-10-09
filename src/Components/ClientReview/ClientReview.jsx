import PropTypes from 'prop-types'; // 

const ClientReview = ({ clientReview }) => {
    const { name, img, feedback, postedAgo } = clientReview;

    return (
        <div data-aos="zoom-in" data-aos-duration="2000">
            <div className="w-full h-80 p-4 mb-6 bg-indigo-100 rounded-lg shadow dark:bg-gray-800 sm:inline-block">
                <div className=" items-start ">

                    <div className=" ">
                        <img className='h-14 w-14 rounded-full mx-auto' src={img} alt={name} />
                    </div>

                    <div >
                        <p className="flex  justify-center  items-baseline">
                            <span className="font-bold  text-gray-600 dark:text-gray-200">
                                {name}
                            </span>
                        </p>
                        <div className="mt-3">
                            <p className="max-w-xs mt-1 dark:text-white font-medium">
                                {feedback}
                            </p>
                        </div>
                        <span className=" text-sm  text-gray-500 dark:text-gray-300">
                            {postedAgo} Month Ago
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};
ClientReview.propTypes = {
    clientReview: PropTypes.object.isRequired,
}
export default ClientReview;





