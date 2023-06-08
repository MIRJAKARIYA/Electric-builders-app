import { signOut } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfileUpdateModal = ({
  profile,
  setReload,
  reload,
  setModalData,
  person,
}) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const imgHostKey = "d17e11b10bbea4a4a98c282f92b32b5b";

  const onSubmit = (data) => {
    const formData = new FormData();
    const address = data.address;
    const phone = data.phone;
    const linkedIn = data.linkedIn;
    const education = data.education;
    const profilePicture = data.profileThumb[0];

    formData.append("image", profilePicture);


    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        fetch(`https://electric-bulders-server.vercel.app/profile/${profile}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
          },
          body: JSON.stringify({
            address: address,
            phone: phone,
            linkedIn: linkedIn,
            education: education,
            profilePicture: result.data.url,
          }),
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
              setModalData(null);
              toast.success("Profile has been updated successfully.");
            }
          });
      });
  };
  return (
    <>
      <input type="checkbox" id="my-modal-profile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h1 className="text-center text-xl mb-2 font-semibold text-red-700">
            Update your profile
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address:</span>
              </label>
              <input
                type="text"
                placeholder="Your address"
                className="input input-bordered"
                {...register("address")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn profile link:</span>
              </label>
              <input
                type="text"
                placeholder="Your linkedIn profile link"
                className="input input-bordered"
                {...register("linkedIn")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone number:</span>
              </label>
              <input
                type="number"
                placeholder="Your phone number"
                className="input input-bordered"
                {...register("phone")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Education:</span>
              </label>
              <input
                type="text"
                placeholder="Your education"
                className="input input-bordered"
                {...register("education")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profie picture:</span>
              </label>
              <input
                type="file"
                placeholder="Your education"
                className="input input-bordered"
                {...register("profileThumb")}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Update profile
              </button>
            </div>
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal-profile" className="btn btn- w-full">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfileUpdateModal;
