import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <>
      <div className="drawer drawer-end drawer-mobile">
        <input
          id="my-drawer-dashboard"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-dashboard"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
            
            {
              admin ? <>
                <li>
              <Link to="manageorders">Manage All Orders</Link>
            </li>
            <li>
              <Link to="managetools">Manage Tools</Link>
            </li>
            <li>
              <Link to="addtool">Add Tool</Link>
            </li>
            <li>
              <Link to="makeadmin">Make Admin</Link>
            </li>
              </>:<>
              <li>
              <Link to="myorders">My Orders</Link>
            </li>
            <li>
              <Link to="addareview">Add A Review</Link>
            </li>
              </>
            }
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default DashBoard;
