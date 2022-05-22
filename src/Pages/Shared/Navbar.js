import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar max-w-[1350px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/myportfolio">My Portfolio</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <h1 className="text-2xl font-bold">Electric Manufacturer</h1>
      </div>
      <div className="navbar-end hidden md:block">
        <div className="flex justify-end">
          <Link className="mr-6 text-lg" to="/home">
            Home
          </Link>
          <Link className="mr-6 text-lg" to="/blogs">
            Blogs
          </Link>
          <Link className="mr-6 text-lg" to="/myportfolio">
            My Portfolio
          </Link>
          <Link className="mr-6 text-lg" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
