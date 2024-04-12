import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()

    // const [regSuccess, setRegSuccess] = useState("");
    // const [regError, setRegError] = useState("");


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
        else if(!/[A-Z]/.test(password)){
            toast.error("Password must contain at least one uppercase letter");
            return;
        }
        else if(!/[a-z]/.test(password)){
            toast.error("Password must contain at least one lowwercase letter");
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                alert("User created successfully")
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                toast.error("Invalid email or password");
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 mt-4">

            <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 ">
                <h2 className="text-4xl text-center font-bold mt-4 text-gray-500">Please Register</h2>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mb-4">Already have an account ? Please <Link to={'/login'} className="text-blue-700 font-bold">Login</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;