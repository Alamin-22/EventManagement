import Details_of_about from "../../Components/About_Us_FirstSection/Details_of_about";
import FAQ from "../../Components/FAQ/FAQ";
import TeamExperts from "../../Components/TeamExperts/TeamExperts";
import WhyChoose_us from "../../Components/WhyChoseUs/WhyChoose_us";
import { Link, useLoaderData } from 'react-router-dom';
const About_Us = () => {
    const team = useLoaderData();

    return (
        <div className="my-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl text-purple-500 font-bold text-center my-12">We Are Event Planner  & Organizer Since 2015</h1>
                <div>
                    <Details_of_about></Details_of_about>
                </div>
                <h1 className="text-2xl text-purple-500 font-bold text-center my-12">Why Choose Us</h1>
                <h1 className="text-4xl text-center">We Provide The Best Services For Your Special Event</h1>
                <p className="text-center my-4 mx-5 font-medium">Experience excellence like never before with our top-tier services for your special event. From meticulous planning to flawless execution, we are dedicated to making your occasion truly memorable. Trust us to deliver the best, because your event deserves nothing less.</p>
                <div className="max-w-4xl mx-auto">
                    <WhyChoose_us></WhyChoose_us>
                    <div  className="text-center mt-5 ">
                        <Link to={"/services"} className='btn btn-primary'>Check Our Services</Link>
                    </div>
                </div>
                
                <h1 data-aos="zoom-in" data-aos-duration="1500" className="text-2xl text-purple-500 font-bold text-center my-12">Meet Our Expert Team</h1>
                <div className="px-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto text-center gap-7">
                        {
                            team.map(member => <TeamExperts key={member.id} member={member}></TeamExperts>)
                        }
                    </div>
                </div>
                {/* FAQ */}
                <FAQ></FAQ>

            </div>
        </div>
    );
};

export default About_Us;