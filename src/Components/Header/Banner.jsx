import { Link } from "react-router-dom";

const Banner = () => {
    return (
      <div>
        <div className="hero min-h-[70vh]  relative" style={{ backgroundImage: 'url(https://i.ibb.co/3svdZtX/party.jpg)' }}>
          <div className="hero-overlay bg-opacity-50 absolute inset-0"></div>
          <div className="hero-content text-center text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="mb-5 text-5xl font-bold">Let's Celebrate Your <br />Festival Party With Us</h1>
              <p className="mb-5">Welcome to the world of unforgettable celebrations! At The Planing Paradise, we specialize in curating extraordinary events that leave lasting memories. Whether you're envisioning a dreamy wedding, a joyful birthday bash, a vibrant festival extravaganza, or any special occasion, we're here to turn your vision into reality.</p>
              <Link to={"/about_us"} className="btn  btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  