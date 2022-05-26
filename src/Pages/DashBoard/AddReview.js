import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [rating, setRating] = useState(1);
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    const reviewData = {
      userName: user.displayName,
      userEmail: user.email,
      review: data.review,
      reviewDate: date,
      reviewTime: time,
      rating: rating,
      photo: user.photoURL,
    };
    fetch("https://pure-mountain-19265.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
      body: JSON.stringify(reviewData),
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
          toast.success("Review added successfully 🙂");
        }
      });
    reset();
  };

  const handleChecked = (value) => {
    setRating(value);
  };

  return (
    <div className="max-w-[1200px] mr-auto lg:mr-10 ml-auto w-[95%] px-5 mt-20">
      <div className="max-w-[450px] mx-auto relative py-5 rounded-lg bg-slate-700">
        <h1 className="text-center text-2xl font-semibold text-warning">
          Please make a review about us
        </h1>
        <div className="text-center mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-sm"
                value={user?.displayName || ""}
                disabled
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-sm"
                value={user?.email || ""}
                disabled
              />
            </div>
            <div className="mt-4">
              <textarea
                className="textarea textarea-primary w-full max-w-sm"
                placeholder="Write review"
                {...register("review")}
                required
              ></textarea>
            </div>
            <button className="btn btn-primary mt-12">Make Review</button>
          </form>
          <div className="absolute top-[72%] left-[10%] flex items-center">
            <p className="text-lg text-warning font-semibold ">Rating:</p>
            <div className="ml-2">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  onClick={() => handleChecked(1)}
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  onClick={() => handleChecked(2)}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  onClick={() => handleChecked(3)}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  onClick={() => handleChecked(4)}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  onClick={() => handleChecked(5)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
