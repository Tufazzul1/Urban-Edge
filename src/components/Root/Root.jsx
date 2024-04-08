import {Outlet} from "react-router-dom"
import Navbar from "../../shared/Navbar";

const Root = () => {
    return (
        <div className="container mx-auto font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;