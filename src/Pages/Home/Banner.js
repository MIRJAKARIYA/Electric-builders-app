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
              <h1 className="md:text-4xl text-2xl font-bold">
                Box Office News!
              </h1>
              <p className="py-3">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
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
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
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
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
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
