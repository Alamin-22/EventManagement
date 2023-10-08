import { RiBookmark3Line } from 'react-icons/ri';
const Details_of_about = () => {
    return (
        <div className='bg-purple-50 p-3 rounded-lg'>
            <div className="mx-10  grid grid-cols-1 md:grid-cols-2">
                <section className=" dark:bg-gray-900">
                    <div className=" flex items-center w-full px-6 py-4 rounded-lg md:mx-5 md:w-96  dark:bg-gray-800">
                        <div className='block justify-center items-center text-center'>
                            <RiBookmark3Line className='text-5xl text-purple-600 mx-auto'></RiBookmark3Line>
                            <p className='text-3xl font-bold'>6<span className='text-purple-600'>+</span></p>
                            <p className='font-semibold'>Years Of Experiences</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Best Quality Services</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">100% Satisfaction Guarantee</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Highly Professional Team</span>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <p className='text-justify '>Established in 2015, we are a seasoned team of event planners and organizers who bring creativity, expertise, and meticulous attention to detail to every occasion. With years of experience under our belt, we have successfully orchestrated a wide range of events, from weddings and corporate gatherings to social soirées and charity fundraisers. Our passion lies in turning your visions into unforgettable moments, crafting seamless experiences that leave a lasting impression. Trust us to handle the intricacies of planning, so you can focus on enjoying the event of your dreams.</p>
                </div>
            </div>
        </div>
    );
};

export default Details_of_about;