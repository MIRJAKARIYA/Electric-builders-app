import React from "react";
import Cup from "../../images/why_us/cup.png";
import CostSave from "../../images/why_us/cost-save.png";
import Delivery from "../../images/why_us/delivery.png";
import Team from "../../images/why_us/efficient-team.png";
import "./WhyChooseUs.css";
const WhyChooseUs = () => {
  return (
    <>
    <h1 className="text-center text-2xl text-red-700 font-semibold mb-5 mt-10">Why Choose Us?</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-w-[1200px] w-[95%] gap-5 mx-auto">
        <div class="card glass p-5 choose-card" data-aos="fade-up" data-aos-delay="" data-aos-duration="200" data-aos-easing="ease-in-out">
          <div class="avatar">
            <div class="w-[120px] p-1 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
              <img src={Cup} alt="" />
            </div>
          </div>
          <div class="">
            <h2 class="text-center text-lg font-semibold my-2 text-primary">
              Experience
            </h2>
            <p className="text-center text-sm">
              Working in the electrical tool industry for over 5 years.
            </p>
          </div>
        </div>
        <div class="card glass p-5 choose-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="200" data-aos-easing="ease-in-out">
          <div class="avatar">
            <div class="w-[120px] p-1 mx-auto rounded-full ring ring-accent ring-offset-base-100 ring-offset-1">
              <img src={Delivery} alt="" />
            </div>
          </div>
          <div class="">
            <h2 class="text-center text-lg font-semibold my-2 text-accent">
              Delivery on time
            </h2>
            <p className="text-center text-sm">
              As a qualified supplier, we pledge to deliver on time.
            </p>
          </div>
        </div>
        <div class="card glass p-5 choose-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="200" data-aos-easing="ease-in-out">
          <div class="avatar">
            <div class="w-[120px] p-1 mx-auto rounded-full ring ring-secondary ring-offset-base-100 ring-offset-1">
              <img src={CostSave} alt="" />
            </div>
          </div>
          <div class="">
            <h2 class="text-center text-lg font-semibold my-2 text-secondary">
              Save 5% cost for you
            </h2>
            <p className="text-center text-sm">
              We can save you 5% in costs since we know how to regulate cost and
              quality with factories.
            </p>
          </div>
        </div>
        <div class="card glass p-5 choose-card" data-aos="fade-up" data-aos-delay="600" data-aos-duration="200" data-aos-easing="ease-in-out">
          <div class="avatar">
            <div class="w-[120px] p-1 mx-auto rounded-full ring ring-green-600 ring-offset-base-100 ring-offset-1">
              <img src={Team} alt="" />
            </div>
          </div>
          <div class="">
            <h2 class="text-center text-lg font-semibold my-2 text-green-600">
              Great Team
            </h2>
            <p className="text-center text-sm">
              We have a dedicated team dedicated to providing excellent service
              to our customers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
