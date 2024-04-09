import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);


        signIn(email, password)
        .then()
        .catch()
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mb-4">New in here ? Please <Link to={'/register'} className="text-blue-700 font-bold">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;