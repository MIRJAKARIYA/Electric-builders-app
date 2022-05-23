import React from "react";
import Question from "../../images/ask_us/question.jpg";

const AskUs = () => {
  return (
   <>
   <h1 className="text-center text-red-700 font-semibold text-2xl mt-10 mb-5">Ask us anything about our website</h1>
     <div className="grid grid-cols-2 w-[95%] max-w-[1200px] mx-auto">
      <div className="h-[400px] w-full pr-5" data-aos="zoom-in">
        <img
          src={Question}
          className="h-full w-full object-cover rounded-xl"
          alt=""
        />
      </div>
      <div className="h-[400px] items-center w-full flex justify-center" data-aos="zoom-in">
        <form>
          <div className="flex gap-2">
            <div className="flex-1">
              <span className="text-sm">Your Name:</span>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div className="flex-1">
              <span className="text-sm">Your Email:</span>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <span className="text-sm">Phone Number:</span>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div className="flex-1">
              <span className="text-sm">Your Role:</span>
              <select class="select select-primary w-full max-w-xs" required>
                <option>
                  Front End Developer
                </option>
                <option>Back End Developer</option>
                <option>Full Stack Developer</option>
                <option>Product Manager</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <div>
            <p className="text-sm">Your Query</p>
            <textarea class="textarea textarea-primary w-full" placeholder="Bio"></textarea>
          </div>
          <button type="submit" className="btn btn-primary block ml-auto mt-2">Submit query</button>
        </form>
      </div>
    </div>
   </>
  );
};

export default AskUs;
