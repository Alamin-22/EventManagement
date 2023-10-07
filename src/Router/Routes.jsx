import { createBrowserRouter } from "react-router-dom";
import LayOut from "../MainLayout/LayOut";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import About_Us from "../Pages/AbouUs/About_Us";
import Services from "../Pages/Services/Services";
import Contact_us from "../Pages/Contact_Us/Contact_us";
import Error from "../Pages/ErrorPage/Error";



const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>(fetch("/services.json"))
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path:"/about_us",
                element:<About_Us></About_Us>
            },
            {
                path:"/services",
                element:<Services></Services>
            },
            {
                path:"/contact_us",
                element:<Contact_us></Contact_us>
            },
        ]
    },
]);

export default router;
