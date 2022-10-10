import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;