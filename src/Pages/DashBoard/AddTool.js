import { signOut } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddTool = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const toolName = data.toolName;
    const description = data.description;
    const minimumOrderQuantity = parseInt(data.minimumOrderQuantity);
    const availableQuantity = parseInt(data.availableQuantity);
    const price = parseInt(data.price);
    const img = data.toolImg;
    console.log(
      toolName,
      description,
      minimumOrderQuantity,
      availableQuantity,
      price,
      img
    );
    const toolData = {
      toolName,
      description,
      minimumOrderQuantity,
      availableQuantity,
      price,
      img,
    };
    fetch("http://localhost:5000/addTool", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
      body: JSON.stringify(toolData),
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
        if(data.acknowledged){
          toast.success("Tool added successfully");
        }
        
      });
    reset();
  };
  return (
    <>
      <h1 className="text-center text-2xl text-red-700 font-semibold mt-10">
        Add the tool you want
      </h1>
      <div className="w-[95%] mt-10 max-w-[500px] p-5 rounded-xl mx-auto shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tool Name:</span>
            </label>
            <input
              type="text"
              placeholder="Enter Tool Name"
              className="input input-bordered input-primary"
              {...register("toolName")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tool Description:</span>
            </label>
            <textarea
              type="text"
              placeholder="Enter Tool Description"
              className="textarea textarea-primary"
              {...register("description")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Minimum order quantity:</span>
            </label>
            <input
              type="number"
              placeholder="Enter Minimum Order Quantity"
              className="input input-bordered input-primary"
              {...register("minimumOrderQuantity")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity:</span>
            </label>
            <input
              type="number"
              placeholder="Enter Available Quantity"
              className="input input-bordered input-primary"
              {...register("availableQuantity")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price per unit:</span>
            </label>
            <input
              type="number"
              placeholder="Enter Per Unit Price"
              className="input input-bordered input-primary"
              {...register("price")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tool Image Link:</span>
            </label>
            <input
              type="text"
              placeholder="Enter Tool Image Link"
              className="input input-bordered input-primary"
              {...register("toolImg")}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add tool
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTool;
