import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";

const Login = () => {

    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log("state", location)


    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password")

        // login

        login(email, password)
            .then(res => {
                console.log(res.user)
                swal("Good job!", "Login Successful!", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Our user-friendly login feature allows registered users to access their accounts quickly and securely. Whether you are an event organizer looking to manage your events or an attendee eager to purchase tickets, simply enter your login credentials – username and password – to gain instant access to your account. We prioritize the security of your information, ensuring a seamless and protected login experience. If you are new to our platform, you can easily sign up to create an account and unlock a world of event management possibilities. Log in today to get started!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-center">Do not have an account? <Link to={"/register"} className="font-semibold text-blue-600 underline" >Register</Link> </p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;