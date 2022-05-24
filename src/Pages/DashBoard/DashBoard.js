import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <div className="drawer drawer-end drawer-mobile">
        <input
          id="my-drawer-dashboard"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* Page content here  */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-dashboard"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
            {/* Sidebar content here  */}
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="addareview">Add A Review</Link>
            </li>
            <li>
              <Link to="myprofile">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default DashBoard;
