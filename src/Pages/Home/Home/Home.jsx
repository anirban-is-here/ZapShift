import React from "react";
import Banner from "../Banner/Banner";
import { IoArrowUpOutline } from "react-icons/io5";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Merchent from "../Merchent section/Merchent";
import Review from "../Review/Review";

const reviewPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
  return (
    <div className="min-h-screen">
      <title>ZapShift - Home</title>
      <div className="mt-10 relative">
        <Banner></Banner>
        <div className="absolute bottom-20 left-26 flex ">
          <button className="btn btn-primary btn-lg rounded-3xl">
            Trac Your Parcel
          </button>
          <div className="rotate-45 rounded-full h-10 w-10 text-primary flex items-center justify-center text-2xl bg-secondary">
            <IoArrowUpOutline />
          </div>
          <button className="btn outline outline-gray-400 btn-lg mx-8 rounded-md">
            Be A Raider
          </button>
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
