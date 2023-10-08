import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
    const NavLinks = <>

        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about_us"}>About Us</NavLink></li>
        <li><NavLink to={"/services"}>Services</NavLink></li>
        <li><NavLink to={"/contact_us"}>Contact Us</NavLink></li>
    </>
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(()=>{
                
            })
            .catch()
    }


    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <p className=" text-sm md:text-2xl font-bold">The <span className="text-purple-400">P</span>laning <span className="text-purple-400">Paradise</span></p>
                </div>
                {/* <img className="lg:hidden" src="https://i.ibb.co/Km7S4fg/event.png" alt="" /> */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button onClick={handleLogout} className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn   btn-primary">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;