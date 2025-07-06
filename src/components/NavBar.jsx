import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../provider/AuthProvider";
import 'animate.css';
const NavBar = () => {
  const navigate = useNavigate();
  const { user,logOut,setUser } = useContext(Authcontext);
  // const { displayName, email } = user;
  const handleLogOut = ()=>{
    setUser({});
    logOut();

  }
  const links = (
    <>
      <li>
        <Link to="/" className=" ">
          Home
        </Link>
      </li>
      
      <li>
        <Link to="/about" className=" ">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/about" className=" ">
          About
        </Link>
      </li>
    </>
  );

  return (
    <div className="font-source-serif font-bold">
      <div className="navbar bg-[#F8F6F0]  ">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#F8F6F0] rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            
            {
              user ?"": (
                <>
                <li >
              <Link to="auth/login" className=" ">
                Login
              </Link>
            </li>
            <li >
              <Link to="auth/register" className=" ">
                Register
              </Link>
            </li>
                </>
            )
            }
            {links}
          </ul>
        </div>
        <div className="navbar-start">
          <a className="font-Marko text-xl animate__animated animate__heartBeat animate__infinite">EcoBossy</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex gap-2 ">
          {user ? (
            <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#F8F6F0] rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Update</a>
              </li>
              <li>
                <Link to="/" onClick={handleLogOut}>Logout</Link>
              </li>
            </ul>
          </div>
          ) : (
             <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li >
              <Link to="auth/login" className=" ">
                Login
              </Link>
            </li>
            <li >
              <Link to="auth/register" className=" ">
                Register
              </Link>
            </li>
            </ul>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
