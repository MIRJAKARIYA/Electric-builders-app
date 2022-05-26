import { signOut } from "firebase/auth";
import React, { useRef, useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const OrderCancelModal = ({ modalData, setModalData, setReload, reload }) => {
  const [isDisable, setIsDisable] = useState(true);
  const cancelRef = useRef();
  const navigate = useNavigate();
  const handleDisable = (e) => {
    const isCancel = e.target.value;
    if (isCancel === "CANCEL") {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };

  const handleCancel = () => {
    fetch(
      `https://pure-mountain-19265.herokuapp.com/purchasedSingle/${modalData}`,
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
          toast.success(`Order canceled successfully`);
          setReload(!reload);
          setModalData("");
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="my-modal-cancel" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="text-9xl flex justify-center text-red-700">
            <AiFillWarning></AiFillWarning>
          </div>
          <p className="text-center text-red-700 text-xl font-semibold">
            Are you sure you want to cancel the order?
          </p>
          <p className="py-4 text-center font-semibold">
            Write "CANCEL" in the box to proceed
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
              YES CANCEL
            </button>
            <label htmlFor="my-modal-cancel" className="btn btn-primary flex-1">
              Don't cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCancelModal;
