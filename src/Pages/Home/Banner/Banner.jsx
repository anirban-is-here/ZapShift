import React from "react";
import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";

class DemoCarousel extends Component {
  render() {
    return (
      <>
        <div className=" rounded-4xl">
          <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay>
            <div className="relative">
              <img src={banner1} />
              <div className="absolute inset-0 bg-linear-to-b from-(--bg)/50 to-transparent" />
            </div>

            <div className="relative">
              <img src={banner2} />
              <div className="absolute inset-0 bg-linear-to-b from-(--bg)/50 to-transparent" />
            </div>

            <div className="relative">
              <img src={banner3} />
              <div className="absolute inset-0 bg-linear-to-b from-(--bg)/50 to-transparent" />
            </div>
          </Carousel>
        </div>
      </>
    );
  }
}

const Banner = () => {
  return (
    <div>
      <DemoCarousel />
    </div>
  );
};  

export default Banner;
