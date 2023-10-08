import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import swal from 'sweetalert';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Register = () => {
    const { CreateUser, UpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);



    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password")
        const name = form.get("name")
        console.log(password)
        // password validation
        if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/.test(password)) {
            return swal("Error!", `Password should be At least 8 characters, including at least one uppercase letter and at least one special character`, "error");

        }

        // create user
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
                const message = error.message
                swal("Error!", `${message.slice(10, 50)}`, "error");
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
                            <div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password" placeholder="password" className="input input-bordered w-full" required />
                                <span className="absolute right-10 top-80 cursor-pointer" onClick={() => { setShowPassword(!showPassword) }} >
                                    {
                                        showPassword ? <AiFillEye className="text-2xl " /> : <AiFillEyeInvisible className="text-2xl " />
                                    }
                                </span>
                            </div>
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