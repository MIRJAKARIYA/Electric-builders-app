import React from "react";
import defaultImg from "../../images/user_default/userDefault.png";

const SingleReview = ({ rev }) => {
  const { photo, rating, review, reviewDate, reviewTime, userName } = rev;
  let userRating = "";
  for (let i = 0; i < rating; i++) {
    userRating = userRating + "⭐";
  }
  return (
    <div className="p- bg-slate-600 text-white rounded-xl">
      <div className="flex justify-between p-4">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={photo ? photo : defaultImg} alt="" />
            </div>
          </div>
          <div className="ml-3">
            <p className="">{userName}</p>
            <p className="text-xs">{reviewTime}</p>
          </div>
          <div></div>
        </div>
        <div>
          <p className="text-xs mt-2">{reviewDate}</p>
        </div>
      </div>

      <div className="pl-4 pr-3 pb-4 text-sm">
        <p>{review}</p>
        <p className="mt-1">
          <span className="text- font-semibold">Rating:</span>{" "}
          <span className="text-xs">{userRating}</span>
        </p>
      </div>
    </div>
  );
};

export default SingleReview;
