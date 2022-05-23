import React from "react";
import { Link, Outlet } from "react-router-dom";


const DashBoard = () => {
  return (
    <>
      <div class="drawer drawer-end drawer-mobile">
        <input id="my-drawer-dashboard" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* Page content here  */}
            <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* Sidebar content here  */}
            <li>
              <Link to='myorders'>My Orders</Link>
            </li>
            <li>
              <Link to='addareview'>Add A Review</Link>
            </li>
            <li>
              <Link to='myprofile'>My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default DashBoard;
