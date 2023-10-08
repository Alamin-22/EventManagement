import { FaHandshake } from 'react-icons/fa';
import { BiHappyBeaming } from 'react-icons/bi';
import { FaPeopleGroup } from 'react-icons/fa6';
const ProjectCompleted = () => {
    return (
        <div>
            <div className="hero  min-h-[50vh] max-w-6xl mx-auto my-10  relative rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/vv6jxP6/bg.jpg)' }}>
                <div className="hero-overlay  bg-opacity-80 rounded-xl absolute inset-0"></div>
                <div className="hero-content  text-white">
                    <div className="flex flex-col md:flex-row space-y-3 items-center justify-center mx-auto">
                        <div className='text-center mx-24'>
                            <FaHandshake className='text-7xl mx-auto text-purple-600'></FaHandshake>
                            <p className='text-3xl  font-semibold'>125<span className='text-purple-600'>+</span></p>
                            <p className='text-xl'>Projects Done!</p>
                        </div>
                        <div className='text-center mx-24'>
                            <BiHappyBeaming className='text-7xl mx-auto text-purple-600'></BiHappyBeaming>
                            <p className='text-3xl  font-semibold'>200<span className='text-purple-600'>+</span></p>
                            <p className='text-xl'>Customer Happy!</p>
                        </div>
                        <div className='text-center mx-24'>
                            <FaPeopleGroup className='text-7xl mx-auto text-purple-600'></FaPeopleGroup>
                            <p className='text-3xl  font-semibold'>80<span className='text-purple-600'>+</span></p>
                            <p className='text-xl'>Team Members!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCompleted;