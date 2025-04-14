import React from 'react';
import Header from '@components/header/Header.jsx';
import Footer from '@components/footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <>
            <div className="AllWrapper">
                <Header />
                    <Outlet />
                <Footer />
            </div>
        </>
    );
};

export default DefaultLayout;
