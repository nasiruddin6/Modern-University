import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <div className='font-serif'>
            <Navbar></Navbar>
            <div className='min-h-screen'> 
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;