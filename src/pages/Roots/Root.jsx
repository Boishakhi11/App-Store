import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header/>
            <main className='flex-1'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Root;