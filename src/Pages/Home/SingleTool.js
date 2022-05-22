import React, { useState } from "react";

const SingleTool = ({ tool }) => {
  const [showMore, setShowMore] = useState(false);
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
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        className="card rounded-xl p-3 bg-slate-700 text-white shadow-xl"
      >
        <figure>
          <img
            src={img}
            alt="Shoes"
            className="w-full h-[250px] object-cover rounded-xl"
          />
        </figure>
        <div className="">
          <h2 className="card-title">{toolName}</h2>
          <p>{showMore ? description : description.slice(0, 100)}</p>
          <button onClick={() => setShowMore(!showMore)}>{showMore?'Show less':'Show more'}</button>
          <div className="card-actions justify-end">
            <button className="btn btn-warning">Place oreder</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTool;
