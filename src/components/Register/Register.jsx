import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../../shared/Footer";


const Register = () => {

    const { createUser, updateUserProfile, setReFetch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        console.log(name, email, photo, password);

        if (password.length < 6) {
            toast.error("Password should be atleast 6 character");
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowwercase letter");
            return
        }

        createUser(email, password)
            .then(() => {
                updateUserProfile(name, email, photo)
                    .then(() => {
                        toast.success("User Created Successfully");
                        setReFetch(Date.now())
                        setTimeout(() => {
                            // navigate 
                            navigate('/');
                        }, 2000);
                    })

            })
            .catch(error => {
                console.log(error);
                toast.error("Invalid email or password");
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 flex flex-col lg:flex-row w-full">
                <Helmet>
                    <title>Register | UrbanEdge</title>
                </Helmet>
                <div className="lg:w-1/2  p-4 lg:p-8">
                    <h2 className="text-4xl font-bold mt-4 text-gray-500">Please Register</h2>
                    <p className="text-gray-500 mt-3">
                        Join our real estate community today to gain access to personalized property alerts and expert resources, empowering you to make informed investment decisions.
                    </p>
                </div>

                <div className="card shrink-0  max-w-lg shadow-2xl bg-base-100 lg:w-1/2">
                    <form onSubmit={handleRegister} className="card-body p-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="input input-bordered"
                                required />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
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
                                className="input input-bordered"
                                required />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-4 transform -translate-y-1/2">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn border hover:text-[#F94D1D] border-[#F94D1D] bg-[#F94D1D] text-white hover:border-[#F94D1D]">Register</button>
                        </div>
                    </form>

                    <p className="text-center mb-4">Already have an account ? Please <Link to={'/login'} className="text-blue-700 font-bold">Login</Link></p>

                </div>

            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Register;