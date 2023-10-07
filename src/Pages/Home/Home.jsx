
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";

const Home = () => {
    const ServicesData = useLoaderData();


    return (
        <div>
            <Banner></Banner>
            {/* Our Services Section */}
            <section className="my-14">
                <h1 className="text-5xl font-semibold text-center mb-24">Our Services</h1>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 ">
                    {
                        ServicesData.map((services, idx) => <ServicesCard key={idx} services={services} ></ServicesCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;