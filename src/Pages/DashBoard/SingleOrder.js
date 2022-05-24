import React from "react";
import { useNavigate } from "react-router-dom";

const SingleOrder = ({ order }) => {
  const { quantity, product, status, img, price, purchaseDate, _id } = order;
  const navigate = useNavigate();
  return (
    <div class="card shadow-xl bg-slate-600 text-white pt-2 px-2">
      <div className="h-[250px]">
        <img src={img} className="w-full h-full rounded-xl" alt="" />
      </div>
      <div class="p-4">
        <h2 class="text-2xl">
          {product}
          <div class="badge badge-warning ml-3">{status}</div>
        </h2>
        <p>Purchase Date: {purchaseDate}</p>
        <p>Quantity: {quantity}</p>
        <p>Price: {price}</p>
        {
            status === 'unpaid'?<div className="flex justify-center mt-4">
            <button className="btn btn-accent px-7" onClick={()=>navigate(`/payment/${_id}`)}>Pay Order</button>
            <button className="btn btn-warning ml-2">Cancel Order</button>
        </div>:''
        }
      </div>
    </div>
  );
};

export default SingleOrder;
