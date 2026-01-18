import React from "react";
import Banner from "../Banner/Banner";
import { IoArrowUpOutline } from "react-icons/io5";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Merchent from "../Merchent section/Merchent";
import Review from "../Review/Review";
import { Link } from "react-router";

const reviewPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
  return (
    <div className="min-h-screen">
      <title>ZapShift - Home</title>
      <div className="mt-5 relative">
        <Banner></Banner>
        <div className="absolute bottom-20 left-26 flex ">
          <button className="btn-secondary  hover:bg-accent border-0 px-8 py-3 text-lg font-semibold shadow-lg">
            Track Your Parcel
          </button>
          <div className="rotate-45 rounded-full h-10 w-10 text-primary flex items-center justify-center text-2xl bg-accent hover:bg-accent transition-colors mr-4 cursor-pointer">
            <IoArrowUpOutline />
          </div>
          <Link
            to="/raider"
            className="btn-outline bg-transparent text-primary hover:bg-primary hover:text-primary-content border-2 border-primary px-8 py-3 text-lg font-semibold"
          >
            Be A Raider
          </Link>
        </div>
      </div>

      <div>
        <HowItWorks></HowItWorks>
      </div>

      <div>
        <OurServices></OurServices>
      </div>
      <div>
        <Merchent></Merchent>
      </div>
      <div className="flex justify-center my-20">
        <Review reviewPromise={reviewPromise}></Review>
      </div>
    </div>
  );
};

export default Home;
