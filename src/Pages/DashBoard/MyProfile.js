import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdOutlineSystemUpdateAlt, MdEmail } from "react-icons/md";
import { BsTelephoneXFill, BsLinkedin } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

import auth from "../../firebase.init";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [person, setPerson] = useState({});
  const [updateField, setUpdateField] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/user?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setPerson(data));
    }
  }, [user, reload]);

  useEffect(() => {
    if (updateField) {
      fetch(`http://localhost:5000/profile/${person._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateField),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Info added successfully");
          setUpdateField(null);
          setReload(!reload);
        });
    }
  }, [updateField, person,reload]);

  const handleLinkedIn = (e) => {
    e.preventDefault();
    setUpdateField({ linkedIn: e.target.linkedIn.value });
  };
  const handleAddress = (e) => {
    e.preventDefault();
    setUpdateField({ address: e.target.address.value });
  };
  const handlePhone = (e) => {
    e.preventDefault();
    setUpdateField({ phone: e.target.phone.value });
  };
  const handleEducation = (e) => {
    e.preventDefault();
    setUpdateField({ linkedIn: e.target.education.value });
  };

  return (
    <div className="max-w-[1200px] mr-auto lg:mr-10 ml-auto w-[95%] px-5 mt-20">
      <div className="max-w-[700px] mx-auto py-5 rounded-lg bg-slate-700 relative">
        <h1 className="text-center text-2xl font-semibold text-warning pb-4">
          Your Profile
        </h1>
        <div className="w-[200px] h-[200px] border-2 border-yellow-600 rounded-full p-2 mx-auto">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            className="w-full h-full rounded-full"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-white text-xl text-center">{person.name}</p>
          <div className="flex justify-around mt-4">
            <div className="">
              <div className="flex items-center">
                <p className="text-white text-xl">
                  <MdEmail />
                </p>
                <p className="text-yellow-500 ml-1 mt-[-2px]">{person.email}</p>
              </div>
              <div className="flex items-center mt-2">
                <p className="text-white text-lg">
                  <BsLinkedin />
                </p>
                {
                    person?.linkedIn? <a target='_blank' rel="noreferrer" className="ml-2 text-yellow-500 underline" href={person.linkedIn}>LinkedIn</a>:<form className="flex items-center" onSubmit={handleLinkedIn}>
                    <input
                      type="text"
                      placeholder="+ linkedIn"
                      name="linkedIn"
                      className="input input-warning h-[20px] w-full max-w-xs ml-2"
                      required
                    />
                    <button type="submit" className="btn btn-accent btn-xs ml-2">
                      +
                    </button>
                  </form>
                }
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <p className="text-white text-lg">
                  <ImLocation2 />
                </p>
                {
                    person?.address?<p className="ml-2 text-yellow-500">{person.address}</p>:<form className="flex items-center" onSubmit={handleAddress}>
                    <input
                      type="text"
                      placeholder="+ location"
                      name="address"
                      className="input input-warning h-[20px] w-full max-w-xs ml-2"
                      required
                    />
                    <button type="submit" className="btn btn-accent btn-xs ml-2">
                      +
                    </button>
                  </form>
                }
              </div>
              <div className="flex items-center mt-2">
                <p className="text-white text-lg">
                  <BsTelephoneXFill />
                </p>
                {
                    person?.phone?<p className="ml-2 text-yellow-500">{person.phone}</p>:<form className="flex items-center" onSubmit={handlePhone}>
                    <input
                      type="number"
                      placeholder="+ phone"
                      name="phone"
                      className="input input-warning h-[20px] w-full max-w-xs ml-2"
                      required
                    />
                    <button type="submit" className="btn btn-accent btn-xs ml-2">
                      +
                    </button>
                  </form>
                }
              </div>
            </div>
          </div>
                <div>
                <h1 className="text-white mt-4">Education</h1>
                <form className="flex items-center" onSubmit={handleEducation}>
                    <input
                      type="text"
                      placeholder="+ linkedIn"
                      name="education"
                      className="input input-warning h-[20px] w-full max-w-xs ml-2"
                      required
                    />
                    <button type="submit" className="btn btn-accent btn-xs ml-2">
                      +
                    </button>
                  </form>
                </div>
        </div>
        <button
          title="Update Profile"
          className="absolute top-2 right-2 text-3xl text-white"
        >
          <MdOutlineSystemUpdateAlt />
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
