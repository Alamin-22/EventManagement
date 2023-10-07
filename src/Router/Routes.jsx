import { createBrowserRouter } from "react-router-dom";
import LayOut from "../MainLayout/LayOut";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import About_Us from "../Pages/AbouUs/About_Us";
import Services from "../Pages/Services/Services";
import Contact_us from "../Pages/Contact_Us/Contact_us";
import Error from "../Pages/ErrorPage/Error";
import Details from "../Components/ServicesCard/Details";



const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>(fetch("/allData.json")),
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
                element:<Services></Services>,
                loader:()=>(fetch("/services.json")),
            },
            {
                path:"/contact_us",
                element:<Contact_us></Contact_us>
            },
            {
                path:"/service/:id",
                element:<Details></Details>,
                loader:()=>(fetch("/services.json")),
            }
            
        ]
    },
]);

export default router;
