import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import "./Banner.css";
import "swiper/css/autoplay";
import bannerImg1 from "../../images/banner/banner1.jpg";
import bannerImg2 from "../../images/banner/banner2.jpg";
import bannerImg3 from "../../images/banner/banner3.jpg";

const Banner = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className="hero-content mx-auto p-5 rounded-xl bg-base-200 flex-col items-center md:flex-row w-full h-full">
            <div className="md:w-[40%] w-full h-full">
              <img
                src={bannerImg1}
                className="rounded-lg w-full h-[435px] md:h-full"
                alt=""
              />
            </div>
            <div className="md:w-[60%] w-full">
              <h1 className="md:text-5xl text-2xl font-bold">
                Electric Builders co.
              </h1>
              <p className="py-3 font-semibold text-lg">
                Your most trusted builders for electrical tools.Order Without any hesitation to get your product as early as you want.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-content mx-auto p-5 rounded-xl bg-base-200 flex-col items-center md:flex-row w-full h-full">
            <div className="md:w-[40%] w-full h-full">
              <img
                src={bannerImg2}
                className="rounded-lg w-full h-[400px] md:h-full"
                alt=""
              />
            </div>
            <div className="md:w-[60%] w-full">
              <h1 className="md:text-5xl text-2xl font-bold">Shipment is available!!!</h1>
              <p className="py-3">
                Purchase our products and get the shipment anywhere in the world.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-content mx-auto p-5 rounded-xl bg-base-200 flex-col items-center md:flex-row w-full h-full">
            <div className="md:w-[40%] w-full h-full">
              <img
                src={bannerImg3}
                className="rounded-lg w-full h-[400px] md:h-full"
                alt=""
              />
            </div>
            <div className="md:w-[60%] w-full">
              <h1 className="text-5xl font-bold">10% discount!</h1>
              <p className="py-6">
                Order now and get 10% discount on delivery charge!!!
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
