import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate()

  const handlePlaceOrder = (id) =>{
    navigate(`/purchase/${id}`)
  }

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
          <p>{showMore ? description : description.slice(0, 90)+'...'}</p>
          <button className="block text-sm ml-auto text-yellow-500" onClick={() => setShowMore(!showMore)}>{showMore?'Show less':'Show more'}</button>

          <p><span className="text-orange-600 font-semibold">Minimum oreder quantity:</span> {minimumOrderQuantity}</p>
          <p><span className="text-orange-600 font-semibold">Available quantity:</span> {availableQuantity}</p>
          <p><span className="text-orange-600 font-semibold">Price/unit:</span> ${price}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handlePlaceOrder(_id)} className="btn btn-warning">Place oreder</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTool;
