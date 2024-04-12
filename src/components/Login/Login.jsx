import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    console.log('Location from login page', location);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    // const [logSuccess, setLogSuccess] = useState("");
    // const [logError, setLogError] = useState("");

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        // clear the message 
        // setLogError('');
        // setLogSuccess('');


        signIn(email, password)
            .then(result => {
                console.log(result.user);

                // navigate 
                navigate(location?.state ? location.state : '/');
                alert("Login successfully")

            })
            .catch(error => {
                console.log(error)
                toast.error("Invalid Email or Password");
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <h2 className="text-4xl text-center font-bold mt-4 text-gray-500">Please Login</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                            
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="input input-bordered pl-8"
                            required
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-4 transform -translate-y-1/2">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mb-4">New in here ? Please <Link to={'/register'} className="text-blue-700 font-bold">Register</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;