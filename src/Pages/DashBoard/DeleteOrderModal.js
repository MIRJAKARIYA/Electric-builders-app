import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const DeleteOrderModal = ({
  deleteModal,
  setDeleteModal,
  reload,
  setReload,
}) => {
  const { buyer, buyerEamil, product, quantity, _id } = deleteModal;
  const navigate = useNavigate();

  const handleCancelOrder = () => {
    fetch(`https://electric-bulders-server.vercel.app/deletOrder/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
    })
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
          setReload(!reload);
          setDeleteModal(null);
          toast.warning("Order canceled");
        }
      });
  };

  return (
    <>
      <input
        type="checkbox"
        id="my-modal-order-delete"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box text-center">
          <h3 className="font-bold text-xl text-center">
            Are you Sure you want to cancel?
          </h3>
          <p>
            <span className="text-lg font-semibold text-red-700">Tool:</span>{" "}
            {product}
          </p>
          <p>
            <span className="text-lg font-semibold text-red-700">Buyer:</span>
            {buyer}
          </p>
          <p>
            <span className="text-lg font-semibold text-red-700">
              Buyer Email:
            </span>{" "}
            {buyerEamil}
          </p>
          <p>
            <span className="text-lg font-semibold text-red-700">
              Quantity:
            </span>{" "}
            {quantity}
          </p>
          <div className="modal-action flex">
            <button
              className="btn btn-error flex-1"
              onClick={handleCancelOrder}
            >
              Cancel Order
            </button>
            <label htmlFor="my-modal-order-delete" className="btn flex-1">
              dont cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteOrderModal;
