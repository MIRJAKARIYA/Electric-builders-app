import { signOut } from "firebase/auth";
import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AdminCreationModal = ({
  makeAdminModal,
  setMakeAdminModal,
  reload,
  setReload,
}) => {
  const navigate = useNavigate();

  const handleMakeAdmin = () => {
    fetch(
      `https://pure-mountain-19265.herokuapp.com/profile/${makeAdminModal._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
        },
        body: JSON.stringify({ role: "admin" }),
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("aACCESS_TOKEN");
          navigate("/home");
        }
        return res.json();
      })
      .then((data) => {
        if (data.acknowledged) {
          setReload(!reload);
          setMakeAdminModal(null);
          toast.success(`${makeAdminModal.name} is made an admin`);
        }
      });
  };
  return (
    <>
      <input
        type="checkbox"
        id="my-modal-create-admin"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want make the person{" "}
            <span className="text-red-700">Admin</span>?
          </h3>
          <p className="font-semibold">
            <span className="text-primary font-bold">Email:</span>{" "}
            {makeAdminModal.email}
          </p>
          <p className="pt-4 pb-2 font-semibold">
            <span className="text-red-700 font-bold">
              {makeAdminModal.email}
            </span>{" "}
            will have access to:
          </p>
          <div className="text-red-700 font-semibold flex items-center">
            <p className="text-primary">
              <BsArrowRightCircleFill />
            </p>
            <p className="ml-1">Manage All Orders</p>
          </div>
          <div className="text-red-700 font-semibold flex items-center">
            <p className="text-primary">
              <BsArrowRightCircleFill />
            </p>
            <p className="ml-1">Manage Tools</p>
          </div>
          <div className="text-red-700 font-semibold flex items-center">
            <p className="text-primary">
              <BsArrowRightCircleFill />
            </p>
            <p className="ml-1">Add Tool</p>
          </div>
          <div className="text-red-700 font-semibold flex items-center">
            <p className="text-primary">
              <BsArrowRightCircleFill />
            </p>
            <p className="ml-1">Make Admin</p>
          </div>
          <div className="modal-action flex">
            <button
              className="btn btn-primary flex-1"
              onClick={handleMakeAdmin}
            >
              Make Admin
            </button>
            <label htmlFor="my-modal-create-admin" className="btn flex-1">
              cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCreationModal;
