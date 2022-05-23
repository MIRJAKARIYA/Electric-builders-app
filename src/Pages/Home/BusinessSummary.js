import React from "react";
import CountUp from "react-countup";
import customers from "../../images/business_summary/customers.png";
import revenue from "../../images/business_summary/revenue.png";
import reviews from "../../images/business_summary/reviews.png";
import eTools from "../../images/business_summary/eTools.png";

const BusinessSummary = () => {
  return (
    <>
      <h1 className="text-center mt-5 mb-5 text-2xl text-red-700 font-semibold">
        Business Summary
      </h1>
      <div
        className="max-w-[1200px] mx-auto bg-slate-600 text-white rounded-lg w-[88%] mb-5"
        data-aos="flip-up"
      >
        <div className="p-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
          <div className="stat rounded-lg border-2 border-yellow-500">
            <div className="stat-figure text-secondary">
              <img src={customers} alt="" className="w-[70px]" />
            </div>
            <div className="stat-title">Customer Served</div>
            <div className="stat-value text-warning">
              <CountUp
                className="account-balance"
                start={0}
                end={50}
                duration={15}
              />
              <span>K+</span>
            </div>
            <div className="stat-desc">5% more than last year</div>
          </div>
          <div className="stat rounded-lg border-2 border-secondary">
            <div className="stat-figure text-secondary">
              <img src={revenue} className="w-[70px]" alt="" />
            </div>
            <div className="stat-title">Annual Revenue</div>
            <div className="stat-value text-secondary">
              <CountUp
                className="account-balance"
                start={0}
                end={120}
                duration={15}
              />
              <span>M+</span>
            </div>
            <div className="stat-desc">30% more than last year</div>
          </div>
          <div className="stat rounded-lg border-2 border-accent">
            <div className="stat-figure text-secondary">
              <img src={reviews} className="w-[70px]" alt="" />
            </div>
            <div className="stat-title">Reviews</div>
            <div className="stat-value text-accent">
              <CountUp
                className="account-balance"
                start={0}
                end={60}
                duration={15}
              />
              K+
            </div>
            <div className="stat-desc">50% more than last month</div>
          </div>
          <div className="stat rounded-lg border-2 border-red-500">
            <div className="stat-figure text-secondary">
              <img src={eTools} className="w-[50px]" alt="" />
            </div>
            <div className="stat-title">Tools</div>
            <div className="stat-value text-rose-500">
              <CountUp
                className="account-balance"
                start={0}
                end={33}
                duration={15}
              />
              K+
            </div>
            <div className="stat-desc">5% more tools than last month</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessSummary;
