import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet } from 'react-router';
import FooterPage from '../Component/HomePage/FooterPage';

const MainLayout = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <FooterPage></FooterPage>
        </div>
    );
};

export default MainLayout;