import Details_of_about from "../../Components/About_Us_FirstSection/Details_of_about";

const About_Us = () => {
    return (
        <div className="my-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl text-purple-500 font-bold text-center my-12">We Are Event Planner  & Organizer Since 2015</h1>
                <Details_of_about></Details_of_about>
                <h1 className="text-2xl text-purple-500 font-bold text-center my-12">Why Choose Us</h1>
                <h1 className="text-4xl text-center">We Provide The Best Services For Your Special Event</h1>
            </div>
        </div>
    );
};

export default About_Us;