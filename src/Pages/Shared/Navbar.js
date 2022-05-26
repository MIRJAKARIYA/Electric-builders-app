import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  return (
    <div className="bg-slate-600 sticky top-0 z-20">
      <div className="navbar max-w-[1400px] mx-auto">
      <div className="navbar-start text-white">
        <div className="dropdown lg:hidden">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            {
              user && <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            }
            <li>
              <Link to="/myportfolio">My Portfolio</Link>
            </li>
            {
              user?<div>
                <p className="ml-4 text-primary font-semibold">{user.displayName}</p>
                <button className="ml-4 btn btn-xs mt-2" onClick={()=>signOut(auth)}>Logout</button>
                
                
              </div>:<li>
              <Link to="/login">Login</Link>
            </li>
            }
          </ul>
        </div>
        <h1 className="text-2xl font-bold btn btn-ghost" onClick={()=>navigate('/home')}>Electric builders</h1>
      </div>
      <div className="navbar-end hidden lg:block">
        <div className="flex justify-end">
          <Link to="/home" className='mr-6 btn btn-xs hover:bg-warning hover:text-black'>
            Home
          </Link>
          <Link className="mr-6 btn btn-xs hover:bg-warning hover:text-black" to="/blogs">
            Blogs
          </Link>
          <Link className="mr-6 btn btn-xs hover:bg-warning hover:text-black" to="/myportfolio">
            My Portfolio
          </Link>
          {
            user && <Link className="mr-6 btn btn-xs hover:bg-warning hover:text-black" to="/dashboard">
            Dashboard
          </Link>
          }
          {
            user && <p className="mr-6 text-warning font-semibold">{user?.displayName}</p>
          }
          {
            user?<button className="btn btn-xs bg-secondary" onClick={()=>signOut(auth)}>Logout</button>:<Link className="mr-6 btn btn-xs hover:bg-warning hover:text-black" to="/login">
            Login
          </Link>
          }
        </div>
      </div>
      {location.pathname.includes("dashboard") && (
        <label
          htmlFor="my-drawer-dashboard"
          className=" lg:hidden ml-auto mr-4 text-xl"
          style={{ cursor: "pointer" }}
        >
          <BsReverseLayoutSidebarInsetReverse />
        </label>
      )}
    </div>
    </div>
  );
};

export default Navbar;
