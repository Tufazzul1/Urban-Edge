import { createBrowserRouter, } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../components/Root/Root";
import AboutUs from "../components/AboutUs/AboutUs";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import EstateDetails from "../components/EstateDetails/EstateDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/commercial.json')
            },
            {
                path : '/estates/:id',
                element: <EstateDetails></EstateDetails>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path : '/register',
                element: <Register></Register>
            }
            
        ]
    },
]);

export default router;