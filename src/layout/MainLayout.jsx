import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet } from 'react-router';
import FooterPage from '../Component/HomePage/FooterPage';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <FooterPage></FooterPage>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;