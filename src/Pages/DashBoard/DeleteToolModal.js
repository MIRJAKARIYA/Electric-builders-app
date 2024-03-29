import { signOut } from "firebase/auth";
import React, { useRef, useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const DeleteToolModal = ({
  reload,
  setReload,
  deleteModal,
  setDeleteModal,
}) => {
  const navigate = useNavigate();

  const [isDisable, setIsDisable] = useState(true);
  const cancelRef = useRef();

  const handleDisable = (e) => {
    const isCancel = e.target.value;
    if (isCancel === "DELETE") {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };

  const handleCancel = () => {
    fetch(
      `https://electric-bulders-server.vercel.app/deleteTool/${deleteModal}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("ACCESS_TOKEN");
          navigate("/home");
        }
        return res.json();
      })
      .then((data) => {
        if (data.acknowledged) {
          toast.warning(`Tool has been deleted`);
          setReload(!reload);
          setDeleteModal("");
        }
      });
  };

  return (
    <>
      <input
        type="checkbox"
        id="my-modal-tool-delete"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="text-9xl flex justify-center text-red-700">
            <AiFillWarning></AiFillWarning>
          </div>
          <p className="text-center text-red-700 text-xl font-semibold">
            Are you sure you want to delete the tool?
          </p>
          <p className="py-4 text-center font-semibold">
            Write "DELETE" in the box to proceed
          </p>
          <input
            type="text"
            ref={cancelRef}
            className="border-2 pl-2 border-black block mx-auto mb-4 h-10 text-lg"
            onChange={handleDisable}
          />
          <div className="flex w-[70%] mx-auto">
            <button
              onClick={handleCancel}
              className="btn flex-1 mr-4 bg-red-700 hover:bg-red-800 duration-300 border-0"
              disabled={isDisable ? true : false}
            >
              YES delete
            </button>
            <label
              htmlFor="my-modal-tool-delete"
              className="btn btn-primary flex-1"
            >
              Don't delete
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteToolModal;
