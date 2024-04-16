import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user)

    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsOpen(false);
    };

    const links = <>
        <li className="hover:text-white hover:bg-[#F94D1D] hover:rounded-lg"><NavLink to="/">Home</NavLink></li>
        <li className="hover:text-white hover:bg-[#F94D1D] hover:rounded-lg"><NavLink to="/Team">Team</NavLink></li>
        <li className="hover:text-white hover:bg-[#F94D1D] hover:rounded-lg"><NavLink to="/update">Update Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl lg:text-3xl font-bold text-[#F94D1D]">UrbanEdge</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">


                {
                    user ?
                    <div className="dropdown dropdown-end" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                        />
                      </div>
                    </div>
                    {isOpen && (
                      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-3 shadow bg-base-100 w-60">
                        <li>Name : {user?.displayName || "Name not found"}</li>
                        <li>Email : {user?.email || "Email not found"}</li>
                      </ul>
                    )}
                  </div>
                        :
                        <NavLink to={'/register'} className="btn border text-[#F94D1D] border-[#F94D1D] hover:bg-[#F94D1D] hover:text-white">Register</NavLink>
                }

                {
                    user ?
                        <button onClick={handleSignOut} className="btn border text-[#F94D1D] border-[#F94D1D] hover:bg-[#F94D1D] hover:text-white">Log Out</button>
                        :
                        <NavLink to={'/login'} className="btn border text-[#F94D1D] border-[#F94D1D] hover:bg-[#F94D1D] hover:text-white">Login</NavLink>
                }
            </div>


        </div>


    );
};

export default Navbar;