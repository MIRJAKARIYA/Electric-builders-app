import React from "react";
import { useNavigate } from "react-router-dom";

const SingleOrder = ({ order, setModalData }) => {
  const { quantity, product, status, img, price, purchaseDate, _id,transactionId,delivery } = order;
  const navigate = useNavigate();

  return (
    <div className="card shadow-xl bg-slate-600 text-white pt-2 px-2 w-full max-w-[370px] mx-auto md:mx-0">
      <div className="h-[250px]">
        <img src={img} className="w-full h-full rounded-xl" alt="" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl text-pink-500 font-semibold">
          {product}
          <div className="badge badge-warning ml-3">{status}</div>
        </h2>
        <p><span className="font-semibold">Purchase Date:</span> {purchaseDate}</p>
        <p><span className="font-semibold">Quantity:</span> {quantity}</p>
        <p><span className="font-semibold">Price:</span> ${price}</p>
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
          <div>
            <p className="text-center mb-1 text-xl font-semibold text-accent">payment done!!!</p>
            <p><span className="font-semibold">TransactionId:</span> <span className="bg-warning text-sm text-black px-1 rounded-md">{transactionId}</span></p>
            <p><span className="font-semibold">Delivery:</span> <span className="bg-warning text-sm text-black px-1 rounded-md">{delivery}</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleOrder;
