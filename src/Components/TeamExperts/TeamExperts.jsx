import PropTypes from 'prop-types'; // ES6
import { CiFacebook } from 'react-icons/ci';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
const TeamExperts = ({ member }) => {
    // console.log(member);
    const { img, title, name } = member;
    return (
        <div>
            <div className="relative flex w-96 flex-col rounded-xl bg-purple-50 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img src={img} alt={name} />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                    </h4>
                    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        {title}
                    </p>
                </div>
                <div className="flex justify-center gap-7 p-6 pt-2">
                    <a href="https://www.facebook.com/" className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased">
                        <CiFacebook className='text-purple-600 text-2xl' />
                    </a>
                    <a href="https://twitter.com/" className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased">
                        <AiFillTwitterCircle className='text-purple-600 text-2xl' />
                    </a>
                    <a href="https://www.instagram.com/" className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased" >
                        <BsInstagram className='text-purple-600 text-2xl' />
                    </a>
                </div>
            </div>
        </div>
    );
};
TeamExperts.propTypes = {
    member: PropTypes.object.isRequired,
}

export default TeamExperts;