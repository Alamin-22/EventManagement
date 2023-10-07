import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className=" flex flex-col h-screen items-center justify-center ">
            <h1 className="text-7xl text-center  text-red-400">Oops Routes Not Found</h1>
            <Link to={"/"} className="btn btn-secondary mt-5">Back To Home</Link>
        </div>
    );
};

export default Error;