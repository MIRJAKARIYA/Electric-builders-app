import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateToolModal = ({
  updateModal,
  setUpdateModal,
  reload,
  setReload,
}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const updateData = {
      availableQuantity: parseInt(data.availableQuantity),
      minimumOrderQuantity: parseInt(data.minimumOrderQuantity),
      price: parseInt(data.price),
    };

    fetch(
      `https://electric-bulders-server.vercel.app/updateTool/${updateModal}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
        },
        body: JSON.stringify(updateData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setReload(!reload);
          setUpdateModal(null);
          toast.success("Tool updated successfully");
        }
      });
  };
  return (
    <>
      <input
        type="checkbox"
        id="my-modal-tool-update"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                update
              </button>
            </div>
          </form>
          <label htmlFor="my-modal-tool-update" className="btn w-full mt-3">
            cancel
          </label>
        </div>
      </div>
    </>
  );
};

export default UpdateToolModal;
