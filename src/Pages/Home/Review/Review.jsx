import React, { use } from "react";
import image from "../../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const Review = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);

  return (
    <div className="rounded-4xl shadow-primary-content ring ring-secondary/10 bg-base-200 py-20">
      {/* Top Image */}
      <div className="flex justify-center">
        <img src={image} alt="customers" />
      </div>

      {/* Heading */}
      <div className="">
        <h1 className="text-4xl font-bold mt-7 mb-2 text-center text-secondary">
          What our customers are saying
        </h1>
        <p className="text-center text-lg mt-5 text-primary-content">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>
      <div className="my-6 mx-auto w-24 h-1 bg-secondary rounded-full"></div>

      {/* Swiper */}
      <div className="mt-7 p-5 container mx-auto  ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          pagination={{ clickable: true }}
          scrollbar={true}
          autoplay={{
            delay: 700,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 100,
            scale: 0.75,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className=" pt-12 pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              className="!w-[300px] flex justify-center"
            >
              <div className="card w-[330px] min-h-[300px] bg-base-100  rounded-2xl p-15 border border-base-300 hover:shadow-xl transition-all duration-100">
                {/* User Section */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-20 h-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                      <img
                        src={
                          review.user_photoURL || "https://i.pravatar.cc/100"
                        }
                        alt={review.userName}
                      />
                    </div>
                  </div>

                  <div>
                    <h2 className="font-semibold text-xl text-secondary">
                      {review.userName}
                    </h2>
                    <p className="text-xs text-black opacity-60">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="rating rating-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <input
                        key={star}
                        type="radio"
                        className="mask mask-star-2 bg-secondary"
                        readOnly
                        checked={Math.round(review.ratings) === star}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm opacity-70 mb-3">
                    {review.ratings.toFixed(1)}
                  </span>
                </div>

                {/* Review */}
                <p className="text-md leading-relaxed text-base-content/80 border-t border-dashed pt-3 primary">
                  {review.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
