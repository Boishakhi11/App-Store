import React from 'react';
import error from '/App-Error.png'
import { Link } from 'react-router';

const AppErrorPage = () => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center min-h-screen'>
            <img src={error} alt='App Not Found Image'/>
            <h1 className='text-4xl font-semibold'>Oops, page not found!</h1>
            <p className='text-gray-400'>The page you are looking for is not available</p>
        </div>
    );
};

export default AppErrorPage;