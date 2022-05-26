import React from "react";
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { toast } from "react-toastify";

const AdminCreationModal = ({makeAdminModal, setMakeAdminModal, reload, setReload}) => {
    const handleMakeAdmin = () =>{
        fetch(`http://localhost:5000/profile/${makeAdminModal._id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({role:'admin'})
        })
        .then(res => res.json())
        .then(data => {
            setReload(!reload);
            setMakeAdminModal(null);
            toast.success(`${makeAdminModal.name} is made an admin`)
        })
    }
  return (
    <>
      <input type="checkbox" id="my-modal-create-admin" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want make the person <span className="text-red-700">Admin</span>?
          </h3>
          <p className="mt-4 font-semibold"><span className="text-primary font-bold">Name:</span> {makeAdminModal.name}</p>
          <p className="font-semibold"><span className="text-primary font-bold">Email:</span> {makeAdminModal.email}</p>
          <p class="pt-4 pb-2 font-semibold">
            <span className="text-red-700 font-bold">{makeAdminModal.name}</span> will have access to:
          </p>
          <div className="text-red-700 font-semibold flex items-center"><p className="text-primary"><BsArrowRightCircleFill /></p><p className="ml-1">Manage All Orders</p></div>
          <div className="text-red-700 font-semibold flex items-center"><p className="text-primary"><BsArrowRightCircleFill /></p><p className="ml-1">Manage Tools</p></div>
          <div className="text-red-700 font-semibold flex items-center"><p className="text-primary"><BsArrowRightCircleFill /></p><p className="ml-1">Add Tool</p></div>
          <div className="text-red-700 font-semibold flex items-center"><p className="text-primary"><BsArrowRightCircleFill /></p><p className="ml-1">Make Admin</p></div>
          <div class="modal-action flex">
              <button className="btn btn-primary flex-1" onClick={handleMakeAdmin}>Make Admin</button>
            <label htmlFor="my-modal-create-admin" class="btn flex-1">
                cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCreationModal;
