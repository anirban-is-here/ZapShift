import React from 'react';
import Icon from "../../../../assets/bookingIcon.png"

const Card = () => {
    return (
      <div className="card rounded-xl shadow-xl bg-accent-content p-8 gap-y-4 hover:bg-accent hover:scale-105 transition duration-75">
        <div className="bg-primary p-1 rounded-lg w-fit mb-1">
          <img className="h-10 w-10" src={Icon} alt="" />
        </div>
        <h2 className="text-xl font-bold text-secondary-content">
          Cash On Delivery
        </h2>
        <p className="text-secondary-content">
          From personal packages to business shipments — we deliver on time,
          every time.
        </p>
      </div>
    );
};

export default Card;