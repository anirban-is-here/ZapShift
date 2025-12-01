import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='container mx-auto px-5'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;