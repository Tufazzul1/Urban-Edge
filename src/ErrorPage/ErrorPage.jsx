import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";


const ErrorPage = () => {
    return (
        
        <div className="container mx-auto ">
            <Navbar></Navbar>
            <h3 className="text-3xl text-center font-bold mt-10">Oops..</h3>
            <div className="flex items-center justify-center">
                <img className="w-1/3 " src="https://i.ibb.co/yq0ycjR/Image-4.png" alt="" />
            </div>
            <div className="text-center">
            <Link to={'/'} className="btn border text-[#F94D1D] border-[#F94D1D] hover:bg-[#F94D1D] hover:text-white">Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;