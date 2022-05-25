import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineWarning,
} from "react-icons/ai";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [isMinLength, setIsMinlength] = useState(false);
  const [isMaxLength, setIsMaxLenth] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSpecial, setIsSpecial] = useState(false);
  const [isUpper, setIsUpper] = useState(false);
  const [isLower, setIsLower] = useState(false);
  const [passError, setPassError] = useState(false);
  const [confirmPassError, setConfirmPassError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const passRef = useRef();

  const navigate = useNavigate();
  const [updateProfile] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const [token] = useToken(user?.user);

  useEffect(()=>{
    if(token){
      navigate('/home')
    }
  },[token,navigate])

  const passValidate = (e) => {
    console.log(e.target.value);
    const password = e.target.value;

    //checking if the password has at least one number
    if (/^(?=.*[0-9])/.test(password)) {
      setIsNumber(true);
    } else {
      setIsNumber(false);
    }
    //checking if the password has length greater than or equal to 6
    if (password.length >= 6) {
      setIsMinlength(true);
    } else {
      setIsMinlength(false);
    }
    //checking if the password has length lower than or equal to 10
    if (password.length <= 10 && password.length !== 0) {
      setIsMaxLenth(true);
    } else {
      setIsMaxLenth(false);
    }

    //checking if the password has at least on special character
    if (/^(?=.*[!@#$%^&*])/.test(password)) {
      setIsSpecial(true);
    } else {
      setIsSpecial(false);
    }
    //checking if the password has at least one upper case letter
    if (/^(?=.*[A-Z])/.test(password)) {
      setIsUpper(true);
    } else {
      setIsUpper(false);
    }
    //checking if the password has at least one lower case letter
    if (/^(?=.*[a-z])/.test(password)) {
      setIsLower(true);
    } else {
      setIsLower(false);
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    const password = passRef.current.value;
    setPassError(false);
    setConfirmPassError(false);
    if (
      isMinLength &&
      isMaxLength &&
      isNumber &&
      isSpecial &&
      isUpper &&
      isLower
    ) {
      if (password === data.confirmPassword) {
        await createUserWithEmailAndPassword(data.email, password);
        await updateProfile({ displayName: data.name });
      } else {
        setConfirmPassError(true);
      }
    } else {
      setPassError(true);
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row my-10">
        <div className="flex-1">
          <div>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 mr-auto ml-auto md:mr-0 md:ml-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered"
                      {...register("name")}
                      required
                    />
                  </div>
                  {errors.name?.type === "required" && (
                    <div className="ml-2 text-xs flex items-center text-red-700 font-semibold">
                      <AiOutlineWarning />{" "}
                      <span className="ml-1">{errors.name.message}</span>
                    </div>
                  )}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      {...register("email")}
                      required
                    />
                  </div>
                  {errors.email?.type === "required" && (
                    <div className="ml-2 text-xs flex items-center text-red-700 font-semibold">
                      <AiOutlineWarning />{" "}
                      <span className="ml-1">{errors.email.message}</span>
                    </div>
                  )}
                  <div className="form-control relative">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type={isVisible ? "text" : "password"}
                      placeholder="password"
                      className="input input-bordered"
                      onChange={passValidate}
                      ref={passRef}
                      required
                    />
                    <p
                      onClick={() => setIsVisible(!isVisible)}
                      style={{ cursor: "pointer" }}
                      className="absolute text-xl top-[60%] left-[90%]"
                    >
                      {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </p>
                  </div>
                  {passError && (
                    <div className="ml-2 text-xs flex items-center text-red-700 font-semibold">
                      <AiOutlineWarning />{" "}
                      <span className="ml-1">Password is not valid</span>
                    </div>
                  )}

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type={isVisible ? "text" : "password"}
                      placeholder="confirm password"
                      className="input input-bordered"
                      {...register("confirmPassword")}
                      required
                    />
                  </div>
                  {confirmPassError && (
                    <div className="ml-2 text-xs flex items-center text-red-700 font-semibold">
                      <AiOutlineWarning />{" "}
                      <span className="ml-1">Password didn't match</span>
                    </div>
                  )}

                  <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">
                      Register
                    </button>
                  </div>
                </div>
              </form>
              <div className="divider mt-[-15px] w-[95%] mx-auto">OR</div>
              <SocialLogin></SocialLogin>
            </div>
            <Link
              to="/login"
              className="block md:pr-[140px] text-center md:text-right underline text-blue-700 mt-3"
            >
              already have an account?
            </Link>
          </div>
        </div>
        <div className="flex-1 flex md:justify-start justify-center items-center">
          <div className="max-w-md ml-5">
            <h1 className="text-lg font-semibold mb-2 underline">
              Password must meet the following requirements:
            </h1>
            <p
              className={`font-semibold ${
                isMinLength ? "text-green-600" : "text-red-600"
              }`}
            >
              <span>{isMinLength ? "✔" : "❌"}</span> Password must be at least
              six characters.
            </p>
            <p
              className={`font-semibold ${
                isMaxLength ? "text-green-600" : "text-red-600"
              }`}
            >
              <span>{isMaxLength ? "✔" : "❌"}</span> Password can not be
              greater than ten characters.
            </p>
            <p
              className={`font-semibold ${
                isNumber ? "text-green-600" : "text-red-600"
              }`}
            >
              <span>{isNumber ? "✔" : "❌"}</span> Password Contains at least
              one number.
            </p>
            <p
              className={`font-semibold ${
                isSpecial ? "text-green-600" : "text-red-600"
              }`}
            >
              <span>{isSpecial ? "✔" : "❌"}</span> Password Contains at least
              special chacarter.
            </p>
            <p
              className={`font-semibold ${
                isUpper ? "text-green-600" : "text-red-600"
              }`}
            >
              <span>{isUpper ? "✔" : "❌"}</span> Password Contains at least one
              upper case letter.
            </p>
            <p
              className={`font-semibold ${
                isLower ? "text-green-600" : "text-red-600"
              }`}
            >
              <span>{isLower ? "✔" : "❌"}</span> Password Contains at least one
              lower case letter.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
