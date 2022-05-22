import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const Login = () => {
    const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const emailRef = useRef();
  const [resetError, setResetError] = useState(false);
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, ResetError] =
    useSendPasswordResetEmail(auth);
    const [token] = useToken(user?.user?.email);

  const handleForgotPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    setResetError(true);
  };

  const onSubmit = (data) => {
    const email = emailRef.current.value;
    const password = data.password;
    console.log(email,password)
    signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if (ResetError && resetError) {
      toast.error(ResetError.message.split("auth/").join(""));
      setResetError(false);
    } else if (!ResetError && resetError) {
      toast.success("password reset email has been sent successfully");
      setResetError(false);
    }
  }, [ResetError, resetError]);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  return (
    <>
      <div className="flow-root">
        <div className="card mx-auto mt-36 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  ref={emailRef}
                  required
                />
              </div>
              <small className="text-red-700">
                {error?.message?.includes("not-found") ? "*user not found" : ""}
              </small>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register('password')}
                  required
                />
              </div>
              <small className="text-red-700">
                {error?.message?.includes("password") ? "*wrong password" : ""}
              </small>
              <p
                className="ml-auto text-blue-700 underline"
                onClick={handleForgotPassword}
              >
                forgot password?
              </p>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
          {/* <SocialLogin></SocialLogin> */}
        </div>
        <Link
          to="/register"
          className="block text-center mt-3 underline text-blue-700"
        >
          create a new account...
        </Link>
      </div>

    </>
  );
};

export default Login;