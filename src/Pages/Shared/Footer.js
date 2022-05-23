import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-slate-600 text-white mt-10">
      <div>
        <span className="footer-title">Services</span>
        <span className="link link-hover">Manufacturing electrical tools</span>
        <span className="link link-hover">Selling electrical tools</span>
        <span className="link link-hover">Stocking electrical tools</span>
        <span className="link link-hover"></span>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <span className="link link-hover">About us</span>
        <span className="link link-hover">Contact</span>
        <span className="link link-hover">Jobs</span>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <span className="link link-hover">Terms of use</span>
        <span className="link link-hover">Privacy policy</span>
        <span className="link link-hover">Cookie policy</span>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text text-white">
              Enter your email address
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16 text-black"
            />
            <button className="btn btn-warning absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
