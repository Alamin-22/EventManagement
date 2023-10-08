import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import swal from 'sweetalert';

const Register = () => {
    const { CreateUser, UpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password")
        const name = form.get("name")

        // console.log(email, password, displayName,);

        CreateUser(email, password, name)
            .then(res => {
                UpdateProfile(name)
                    .then(() => {
                        swal("Good job!", "Registration Successful!", "success");
                        navigate("/")
                    })
                console.log(res.user);
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-semibold text-center mt-5">Register Now!!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-center">Already have an account? <Link to={"/login"} className="font-semibold text-blue-600 underline" >LogIn</Link> </p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>
    );
};

export default Register;