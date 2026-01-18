import React from 'react';
import Logo from '../Component/Logo/Logo';
import authImg from '../assets/authImage.png'
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
      <div className="flex h-screen max-w-9xl mx-auto">
        <div className="bg-white/80 h-full w-1/2 pt-5">
          <div className='pl-7'>
            <Logo></Logo>
          </div>
          <div className="flex-1 flex justify-center items-center h-full ">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="" src={authImg} alt="Authentication" />
        </div>
      </div>
    );
};

export default AuthLayout;

{/* <Logo></Logo>
            <div className='border flex justify-between items-center px-20'>
                <Outlet></Outlet>

                <div>
                    <img src={authImg} alt="Authentication" />
                </div>
            </div> */}