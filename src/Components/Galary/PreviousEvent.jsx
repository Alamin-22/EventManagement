
const PreviousEvent = () => {
    return (
        <div className="my-14">
            <h1 className="text-center my-10 text-3xl text-purple-600 font-serif font-medium">Our Previous Event</h1>
            <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto   p-5">
                <div data-aos="fade-up" data-aos-duration="3000" className=" space-y-5">
                    <img src="https://i.ibb.co/m4xtnXx/young-couple-in-a-wedding.jpg" alt="" />
                    <img src="https://i.ibb.co/Gd8sp6m/evenizer-party.jpg" alt="" />
                </div>
                <div data-aos="fade-down" data-aos-duration="3000" className="space-y-5">
                    <img src="https://i.ibb.co/L6Rc0pw/girls-birtday-party.jpg" alt="" />
                    <img src="https://i.ibb.co/bmcF03t/ultra-music-festival.jpg" alt="" />
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className="space-y-5">
                    <img src="https://i.ibb.co/7tn1ZqX/group-of-people.jpg" alt="" />
                    <img src="https://i.ibb.co/Sx3rMvs/people-partying-3.jpg" alt="" />
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className="col-span-3">
                    <img className="" src="https://i.ibb.co/kxgCF4q/weeding.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PreviousEvent;