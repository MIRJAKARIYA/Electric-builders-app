import React from "react";
import { useNavigate } from "react-router-dom";

const SingleOrder = ({ order, setModalData }) => {
  const { quantity, product, status, img, price, purchaseDate, _id } = order;
  const navigate = useNavigate();

  return (
    <div className="card shadow-xl bg-slate-600 text-white pt-2 px-2 w-full max-w-[370px] mx-auto md:mx-0">
      <div className="h-[250px]">
        <img src={img} className="w-full h-full rounded-xl" alt="" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl">
          {product}
          <div className="badge badge-warning ml-3">{status}</div>
        </h2>
        <p>Purchase Date: {purchaseDate}</p>
        <p>Quantity: {quantity}</p>
        <p>Price: {price}</p>
        {status === "unpaid" ? (
          <div className="flex justify-center mt-4 gap-4">
            <button
              className="btn btn-warning flex-1"
              onClick={() => navigate(`/payment/${_id}`)}
            >
              Pay Order
            </button>
            <label
              htmlFor="my-modal-cancel"
              className="btn btn-error flex-1"
              onClick={() => setModalData(_id)}
            >
              Cancel Order
            </label>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SingleOrder;
