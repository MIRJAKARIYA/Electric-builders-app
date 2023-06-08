import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdOutlineSystemUpdateAlt, MdEmail } from "react-icons/md";
import { BsTelephoneXFill, BsLinkedin } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import userThumb from "../../images/user_default/userDefault.png";

import auth from "../../firebase.init";
import { toast } from "react-toastify";
import MyProfileUpdateModal from "./MyProfileUpdateModal";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [person, setPerson] = useState({});
  const [updateField, setUpdateField] = useState(null);
  const [reload, setReload] = useState(false);
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `https://electric-bulders-server.vercel.app/user?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setPerson(data));
    }
  }, [user, reload]);

  useEffect(() => {
    if (updateField) {
      fetch(`https://electric-bulders-server.vercel.app/profile/${person._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
        },
        body: JSON.stringify(updateField),
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
            toast.success("Info added successfully");
            setUpdateField(null);
            setReload(!reload);
          }
        });
    }
  }, [updateField, person, reload, navigate]);

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
    setUpdateField({ education: e.target.education.value });
  };
  const handleModalOpen = () => {
    setModalData(person._id);
  };

  return (
    <div className="max-w-[1200px] mr-auto lg:mr-10 ml-auto w-[95%] px-5 mt-20">
      <div className="max-w-[700px] mx-auto py-5 rounded-lg bg-slate-700 relative">
        <h1 className="text-center text-2xl font-semibold text-warning pb-4">
          Your Profile
        </h1>
        <div className="w-[200px] h-[200px] border-2 border-yellow-600 rounded-full p-2 mx-auto">
          <img
            src={person.profilePicture ? person.profilePicture : userThumb}
            className="w-full h-full rounded-full"
            alt=""
          />
        </div>
        <div className="mt-4">
          <p className="text-white text-xl text-center">
            {user?.displayName}{" "}
            <span className="text-[11px] text-warning">
              {person?.role === "admin" ? "admin" : "user"}
            </span>
          </p>
          <div className="flex justify-around mt-4">
            <div className="">
              <div className="flex items-center">
                <p className="text-white text-xl">
                  <MdEmail />
                </p>
                <p className="text-yellow-500 ml-1 mt-[-2px]">{user?.email}</p>
              </div>
              <div className="flex items-center mt-2">
                <p className="text-white text-lg">
                  <BsLinkedin />
                </p>
                {person?.linkedIn ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 text-yellow-500 underline"
                    href={person.linkedIn}
                  >
                    LinkedIn
                  </a>
                ) : (
                  <form className="flex items-center" onSubmit={handleLinkedIn}>
                    <input
                      type="text"
                      placeholder="+ linkedIn"
                      name="linkedIn"
                      className="input input-warning h-[20px] w-full max-w-xs ml-2"
                      required
                    />
                    <button
                      type="submit"
                      className="btn btn-accent btn-xs ml-2"
                    >
                      +
                    </button>
                  </form>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <p className="text-white text-lg">
                  <ImLocation2 />
                </p>
                {person?.address ? (
                  <p className="ml-2 text-yellow-500">{person.address}</p>
                ) : (
                  <form className="flex items-center" onSubmit={handleAddress}>
                    <input
                      type="text"
                      placeholder="+ location"
                      name="address"
                      className="input input-warning h-[20px] w-full max-w-xs ml-2"
                      required
                    />
                    <button
                      type="submit"
                      className="btn btn-accent btn-xs ml-2"
                    >
                      +
                    </button>
                  </form>
                )}
              </div>
              <div className="flex items-center mt-2">
                <p className="text-white text-lg">
                  <BsTelephoneXFill />
                </p>
                {person?.phone ? (
                  <p className="ml-2 text-yellow-500">{person.phone}</p>
                ) : (
                  <form className="flex items-center" onSubmit={handlePhone}>
                    <input
                      type="number"
                      placeholder="+ phone"
                      name="phone"
                      className="input input-warning h-[20px] w-full max-w-xs ml-2"
                      required
                    />
                    <button
                      type="submit"
                      className="btn btn-accent btn-xs ml-2"
                    >
                      +
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center mt-4 justify-center">
            <h1 className="text-white">Education:</h1>
            {person?.education ? (
              <p className="ml-2 text-yellow-500">{person.education}</p>
            ) : (
              <form className="flex items-center" onSubmit={handleEducation}>
                <input
                  type="text"
                  placeholder="+ education"
                  name="education"
                  className="input input-warning h-[20px] w-full max-w-xs ml-2"
                  required
                />
                <button type="submit" className="btn btn-accent btn-xs ml-2">
                  +
                </button>
              </form>
            )}
          </div>
        </div>
        <label
          title="Update Profile"
          htmlFor="my-modal-profile"
          className="absolute top-2 right-2 text-3xl text-white"
          onClick={handleModalOpen}
          style={{ cursor: "pointer" }}
        >
          <MdOutlineSystemUpdateAlt />
        </label>
      </div>
      {modalData && (
        <MyProfileUpdateModal
          profile={person._id}
          setReload={setReload}
          reload={reload}
          setModalData={setModalData}
          person={person}
        ></MyProfileUpdateModal>
      )}
    </div>
  );
};

export default MyProfile;
