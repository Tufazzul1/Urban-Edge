
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../../shared/Footer";


const UpdateProfile = () => {
    const { user, updateUserProfile, setReFetch } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        photo: ""
    });

    const handleProfileUpdate = e => {
        e.preventDefault();
        const { name, email, photo } = formData;

        updateUserProfile(name, email, photo)
            .then(() => {
                toast.success("User profile updated successfully");
                setReFetch(Date.now())
              
            })
            .catch(error => {
                console.log(error);
                toast.error("Failed to update profile");
            });

    }


    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    return (
        <div>
            <Helmet>
                <title>Update Profile | UrbanEdge</title>
            </Helmet>
            <div className="flex flex-col justify-center items-center lg:flex-row mt-6 gap-6">
                <div className="lg:w-1/2  p-4 lg:p-8">
                    <h2 className="text-3xl font-bold mt-4 text-gray-500">Your Profile Information</h2>
                    <p className="text-gray-500 mt-3"><span className="font-bold">Name:</span> {user.displayName}</p>
                    <p className="text-gray-500 mt-3"><span className="font-bold">Email:</span> {user.email}</p>
                    <p className="text-gray-500 mt-3"><span className="font-bold">Profile Image :</span><img className="w-[300px] h-[250px] rounded-xl" src={user.photoURL} alt="" /></p>
                </div>

                <div className="card shrink-0 max-w-lg shadow-2xl bg-base-100 lg:w-1/2 mb-10">
                    <div>
                        <h3 className="text-3xl font-semibold text-center pt-6 text-gray-500">Update Your Profile</h3>
                    </div>
                    <form onSubmit={handleProfileUpdate} className="card-body p-4 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
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
                                value={formData.photo}
                                onChange={handleInputChange}
                                placeholder="Photo URL"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn border hover:text-[#F94D1D] border-[#F94D1D] bg-[#F94D1D] text-white hover:border-[#F94D1D]">Update Profile</button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;
