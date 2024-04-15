import { createBrowserRouter, } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../components/Root/Root";
import AboutUs from "../components/AboutUs/AboutUs";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import EstateDetails from "../components/EstateDetails/EstateDetails";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/commercial.json')
            },
            {
                path : '/estates/:id/',
                element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
                loader: ()=> fetch('/commercial.json')
            },
            {
                path: '/update',
                element : <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>

            },
            {
                path: '/about',
                element: <PrivateRoutes><AboutUs></AboutUs></PrivateRoutes>
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