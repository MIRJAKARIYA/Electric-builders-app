import React from "react";

const SingleTool = ({ tool }) => {
  console.log(tool);
  const {
    availableQuantity,
    description,
    img,
    minimumOrderQuantity,
    price,
    toolName,
    _id,
  } = tool;
  return (
    <div className="card card-compact p-4 bg-slate-700 text-white shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
          className="w-full h-[250px] object-cover rounded-2xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toolName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning mb-[-13px]">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleTool;
