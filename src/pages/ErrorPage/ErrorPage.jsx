import React from 'react';
import error from '../../../public/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center min-h-screen'>
            <img src={error} alt='404 Error Image'/>
            <h1 className='text-4xl font-semibold'>Oops, page not found!</h1>
            <p className='text-gray-400'>The page you are looking for is not available</p>
            <Link to="/">
              <button className="btn btn-success text-white">Return Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;