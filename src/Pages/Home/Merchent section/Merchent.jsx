import React from 'react';
import image1 from "../../../assets/be-a-merchant-bg.png"
import image2 from "../../../assets/location-merchant.png"

const Merchent = () => {
    return (
      <div className="border min-h-40 bg-secondary rounded-4xl mx-20 mb-15 pb-15 px-15">
        <div
          className=" min-h-25"
          style={{ backgroundImage: `url(${image1})` }}
        ></div>

        <div className='px-10 flex'>
          <div>
            <h1 className="text-4xl font-bold text-white ">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>
            <p className="text-white/70 my-7 text-xl">
              We offer the lowest delivery charge with the highest value along
              with <br /> 100% safety of your product. Pathao courier delivers
              your parcels in every <br /> corner of Bangladesh right on time.
            </p>
            <button className="btn btn-xl btn-primary rounded-full mr-8 text-black p-7">
              Become A Merchant
            </button>

            <button className="btn btn-xl btn-secondary border-primary rounded-full text-primary p-7">
              Earm With ZapShift Courier
            </button>
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Merchent;