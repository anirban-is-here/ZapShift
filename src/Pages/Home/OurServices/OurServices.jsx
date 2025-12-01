import React from "react";
import Icon from "../../../assets/service.png";
import Marquee from "react-fast-marquee";
import image1 from "../../../assets/brands/amazon.png";
import image2 from "../../../assets/brands/amazon_vector.png";
import image3 from "../../../assets/brands/casio.png";
import image4 from "../../../assets/brands/moonstar.png";
import image5 from "../../../assets/brands/randstad.png";
import image6 from "../../../assets/brands/star.png";
import image7 from "../../../assets/brands/start_people.png";
import image8 from "../../../assets/live-tracking.png";
import image9 from "../../../assets/safe-delivery.png";

const OurServices = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      title: "Fulfillment Solution",
      description:
        "Complete warehouse-to-delivery support for eCommerce businesses, including storage, packaging, and dispatch.",
    },
    {
      title: "Cash on Home Delivery",
      description:
        "We provide reliable cash collection from customers at the doorstep and ensure secure settlement to merchants.",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description:
        "Custom logistics solutions for companies needing bulk delivery, scheduled dispatching, and consistent nationwide support.",
    },
    {
      title: "Parcel Return",
      description:
        "Hassle-free return management to bring back undelivered or customer-returned parcels quickly and safely.",
    },
  ];

  return (
    <>
      <div className="p-16 mx-auto border rounded-3xl bg-secondary bg-linear-to-b from-black/20 mb-20 ">
        <h1 className="text-4xl font-bold text-center text-white">
          Our Services
        </h1>
        <p className="text-white/80 text-center mt-5">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to
          <br />
          business shipments — we deliver on time, every time.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mx-10 text-center p-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 h-70 rounded-2xl border border-base-300 bg-base-100 hover:bg-primary hover:scale-105 transition duration-50 flex flex-col items-center gap-y-3"
            >
              <div className=" bg-amber-100 p-3 rounded-full">
                <img className="w-10 h-10" src={Icon} alt="" />
              </div>
              <h2 className="text-lg font-semibold text-secondary mb-2">
                {service.title}
              </h2>
              <p className="text-sm text-primary-content">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10 mx-20">
        <h1 className="text-center text-2xl font-bold text-secondary mb-10">
          We've helped thousands of sales teams
        </h1>
        <Marquee>
          <img className="mx-10 h-5" src={image1} alt="" />
          <img className="mx-10 h-5" src={image2} alt="" />
          <img className="mx-10 h-5" src={image3} alt="" />
          <img className="mx-10 h-5" src={image4} alt="" />
          <img className="mx-10 h-5" src={image5} alt="" />
          <img className="mx-10 h-5" src={image6} alt="" />
          <img className="mx-10 h-5" src={image7} alt="" />
        </Marquee>
      </div>
{/* ------------------------------------------------------------------------- */}
      <div className="border-y border-dashed my-10">
        <div className="flex items-center gap-9 my-10  mx-20 rounded-2xl py-5 px-20 bg-white">
          <img className="my-8" src={image8} alt="" />
          <div className="border-l border-dashed pl-8 py-10 ">
            <h1 className="text-xl font font-semibold mb-5">
              Live Parcel Tracking
            </h1>
            <p>
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-9 my-10  mx-20 rounded-2xl py-5 px-20 bg-white">
          <img className="my-8" src={image9} alt="" />
          <div className="border-l border-dashed pl-8 py-10 ">
            <h1 className="text-xl font font-semibold mb-5">
              100% Safe Delivery
            </h1>
            <p>
              We ensure your parcels are handled with the utmost care and
              delivered securely to their destination. Our reliable process
              guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-9 my-10  mx-20 rounded-2xl py-5 px-20 bg-white">
          <img className="my-8" src={image9} alt="" />
          <div className="border-l border-dashed pl-8 py-10 ">
            <h1 className="text-xl font font-semibold mb-5">
              24/7 Call Center Support
            </h1>
            <p>
              Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
