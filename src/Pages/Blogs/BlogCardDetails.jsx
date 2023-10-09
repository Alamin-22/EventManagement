import { Link, useLoaderData, useParams } from "react-router-dom";

const BlogCardDetails = () => {

    const Blogs = useLoaderData();
    const { id } = useParams();
    const idInt = parseFloat(id);
    console.log(Blogs, idInt)


    const selectedBlog = Blogs?.find(card => card.id === idInt);
    const { blog_img, title, description, posted_date } = selectedBlog;

    return (
        <div>
            <div className="card max-w-4xl mx-auto my-5 card-compact bg-base-100 shadow-xl">
                <figure className="h-[60vh]">
                    <img src={blog_img} alt="img" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <p className="font-medium text-lg text-pink-500">Posted date: {posted_date}</p>
                        <Link to={"/blogs"} className="btn btn-secondary">Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCardDetails;