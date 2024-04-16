import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";



const Login = () => {

    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    const location = useLocation();
    // console.log('Location from login page', location);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');


        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Login successfully")
                setTimeout(() => {
                    // navigate 
                    navigate(location?.state ? location.state : '/');
                }, 2000);
                
            })
            .catch(error => {
                console.log(error)
                toast.error("Invalid Email or Password");
            })
    }

    const handleSocialLogin = socialProvider => {

        socialProvider()

            .then(result => {
                console.log(result.user);
                toast.success("Login successfully")
                
                setTimeout(() => {
                    // navigate 
                    navigate(location?.state ? location.state : '/');
                }, 2000);
            })
            .catch(error => {
                console.log(error)
                toast.error("Invalid Email or Password");
            }

            )
    }


    return (
        <div className="hero min-h-screen bg-base-200 flex flex-col lg:flex-row w-full ">
            <Helmet>
                <title>Login | UrbanEdge</title>
            </Helmet>
            <div className="lg:w-1/2  p-4 lg:p-8">
                <h2 className="text-4xl font-bold mt-4 text-gray-500">Please Login</h2>
                <p className="text-gray-500 mt-3">Welcome to UrbanEdge, where accessing your real estate profile is just a login away. Experience seamless access to your property listings and personalized services with our secure login feature.</p>
            </div>

            <div className="card shrink-0  max-w-lg shadow-2xl bg-base-100 lg:w-1/2">

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
                        <button className="btn border hover:text-[#F94D1D] border-[#F94D1D] bg-[#F94D1D] text-white hover:border-[#F94D1D]">Login</button>
                    </div>
                </form>

                <div className="text-center font-bold space-y-3">
                    <h3>Login with </h3>
                    <button onClick={() => handleSocialLogin(googleLogin)} className="btn  mr-2 border text-[#F94D1D] border-[#F94D1D] hover:bg-[#F94D1D] hover:text-white"> <FaGoogle />Google</button>
                    <button onClick={() => handleSocialLogin(githubLogin)} className="btn  border text-[#F94D1D] border-[#F94D1D] hover:bg-[#F94D1D] hover:text-white">Github <FaGithub /></button>
                </div>
                <p className="text-center mb-4 mt-4">New in here ? Please <Link to={'/register'} className="text-blue-700 font-bold">Register</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;