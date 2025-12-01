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
      <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src={banner1} />
        </div>
        <div>
          <img src={banner2} />
        </div>
        <div>
          <img src={banner3} />
        </div>
      </Carousel>
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
