import React from "react";

const Footer = () => {
  return (
    <footer class="footer p-10 bg-slate-600 text-white mt-10">
      <div>
        <span class="footer-title">Services</span>
        <span class="link link-hover">Manufacturing electrical tools</span>
        <span class="link link-hover">Selling electrical tools</span>
        <span class="link link-hover">Stocking electrical tools</span>
        <span class="link link-hover"></span>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <span class="link link-hover">About us</span>
        <span class="link link-hover">Contact</span>
        <span class="link link-hover">Jobs</span>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <span class="link link-hover">Terms of use</span>
        <span class="link link-hover">Privacy policy</span>
        <span class="link link-hover">Cookie policy</span>
      </div>
      <div>
        <span class="footer-title">Newsletter</span>
        <div class="form-control w-80">
          <label class="label">
            <span class="label-text text-white">Enter your email address</span>
          </label>
          <div class="relative">
            <input
              type="text"
              placeholder="username@site.com"
              class="input input-bordered w-full pr-16 text-black"
            />
            <button class="btn btn-warning absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
