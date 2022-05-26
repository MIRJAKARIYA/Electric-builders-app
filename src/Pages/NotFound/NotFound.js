import React from "react";
import { useNavigate } from "react-router-dom";
import noInfo from "../../images/not_found/notfound.jpg";

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[40%]">
        <img src={noInfo} className="h-full w-full" alt="" />
        <button onClick={()=>navigate('/')} className="btn btn-xs btn-primary mx-auto block mt-2">Back to home</button>
      </div>
    </div>
  );
};

export default NotFound;
