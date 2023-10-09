import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto my-10">
            <h1 className="text-center text-5xl font-serif text-purple-500 my-7">Explore Our Recent Blogs</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5">
                {
                    blogs.map((blog)=><BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;