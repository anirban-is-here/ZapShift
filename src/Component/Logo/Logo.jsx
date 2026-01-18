import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-end">
      <img src="/src/assets/logo.png" className="h-10" alt="" />
      <h3 className="text-2xl font-bold mb-1 -ms-2">ZapShift</h3>
    </div>
  );
};

export default Logo;
