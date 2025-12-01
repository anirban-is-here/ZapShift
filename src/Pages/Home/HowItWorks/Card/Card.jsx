import React from 'react';
import Icon from "../../../../assets/bookingIcon.png"

const Card = () => {
    return (
      <div className='card rounded-xl card-border bg-white/70 p-8 gap-y-4 hover:bg-secondary/20 hover:scale-105'>
        <img className='h-12 w-12' src={Icon} alt="" />
        <h2 className='text-xl font-bold text-secondary'>Cash On Delivery</h2>
        <p className='text-primary-content'>
          From personal packages to business shipments — we deliver on time,
          every time.
        </p>
      </div>
    );
};

export default Card;