import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-4">

            <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 ">
                <h2 className="text-4xl text-center font-bold mt-4 text-gray-500">Please Register</h2>
                <form className="card-body p-4">
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
        </div>
    );
};

export default Register;