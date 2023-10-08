import { RiVerifiedBadgeLine } from 'react-icons/ri';
import { FaHandshake } from 'react-icons/fa';

const WhyChoose_us = () => {
    return (
        <div className='flex flex-col md:flex-row justify-evenly gap-7 mx-12'>
            <div className="card  bg-purple-100 shadow-xl">
                <figure className="px-10 pt-7">
                    <RiVerifiedBadgeLine className='text-7xl text-purple-600' />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Best Event Planner</h2>
                    <p className='text-justify'>Our experienced and passionate event planning team is here to turn your dreams into reality. From intimate gatherings to grand soirées, we specialize in crafting unforgettable moments that leave a lasting impression. With meticulous attention to detail, creative flair, and a commitment to excellence, we take care of every aspect of your event, so you can relax and enjoy every moment. Let us bring your vision to life and make your next event an extraordinary experience!</p>
                </div>
            </div>
            <div className="card  bg-purple-100 shadow-xl">
                <figure className="px-10 pt-7">
                    <FaHandshake className='text-7xl text-purple-600' />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Highly Dedicated</h2>
                    <p className='text-justify'>Our highly dedicated event planning team is here to transform your vision into a reality that surpasses your wildest expectations. Whether you are planning an intimate gathering or a grand celebration, we specialize in crafting unforgettable moments that resonate with passion and precision. With an unwavering commitment to detail, boundless creativity, and an unrelenting pursuit of excellence, we take care of every facet of your event, allowing you to savor each moment!</p>
                </div>
            </div>
            
        </div>
    );
};

export default WhyChoose_us;