import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
const BlogCard = ({ blog }) => {
    const { id, blog_img, title, description, posted_date } = blog;
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-slate-200 bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img src={blog_img} alt="image" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        {posted_date}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {description.slice(0, 100)}
                    </p>
                    <div className='flex justify-between items-center'>
                        <Link to={`/blogs/${id}`} className='btn btn-sm btn-primary btn-outline'>learn more <AiOutlineArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
BlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
}
export default BlogCard;