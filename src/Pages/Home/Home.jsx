
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import ClientReview from "../../Components/ClientReview/ClientReview";
import LastComponent from "../../Components/DontHazitate/LastComponent";


const Home = () => {
    const AllData = useLoaderData();
    const servicesData = AllData[0].services;
    const ClientReviews = AllData[1].clientReview;
    // console.log(ClientReviews)




    return (
        <div>
            <Banner></Banner>
            {/* Our Services Section */}
            <section className="my-14">
                <h1 className="text-5xl font-semibold text-center mb-8">Our Services</h1>
                <div className=" max-w-lg  md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 ">
                    {
                        servicesData.map((services, idx) => <ServicesCard key={idx} services={services} ></ServicesCard>)
                    }
                </div>
            </section>
            {/* client Reviews */}
            <section className="md:max-w-6xl mx-auto">
                <h1 className="text-5xl font-semibold text-center">What Our Client Says</h1>
                <div className=" mx-9 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 mt-14 ">
                    {
                        ClientReviews.map((clientReview, idz) => <ClientReview key={idz} clientReview={clientReview}></ClientReview>)
                    }
                </div>
            </section>
            {/*  */}
            <section className="my-16 px-5  md:max-w-6xl mx-auto ">
                <LastComponent></LastComponent>
            </section>
        </div>
    );
};

export default Home;