import React from 'react';
import { LuDownload } from "react-icons/lu";
import { FaStar, FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from 'react-router';
import Chart from '../../components/Chart/Chart';

const AppDetails = () => {
    const {id} = useParams();
    const allApps= useLoaderData();
    const singleApp = allApps?.find((app) => app.id === parseInt(id));

    if (!singleApp) return <div className="w-10/12 mx-auto">Loading...</div>;

    const {image, title, companyName, description, downloads, ratingAvg,ratings,reviews,size,} = singleApp;   
    return (
        <div className='w-10/12 mx-auto space-y-8'>
            <div className="card lg:card-side bg-base-500 border-gray-400 shadow-2xl p-3">
                <figure>
                    <img
                    className='h-80 w-80 rounded-2xl'
                    src={image}
                    alt="App Image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold">{title}</h2>
                    <p className='text-gray-400'>Developed by <span className='text-purple-600'>{companyName}</span>.</p>
                    <div className='flex justify-between items-center w-2/3'>
                        <div className='space-y-2'>
                            <LuDownload className='h-10 w-10 text-green-500' />
                            <p className='text-gray-500'>Downloads</p>
                            <h1 className='text-4xl font-bold'>{downloads}M</h1>
                        </div>
                        <div className='space-y-2'> 
                            <FaStar className='h-10 w-10 text-orange-500' />
                            <p className='text-gray-500'>Average Ratings</p>
                            <h1 className='text-4xl font-bold'>{ratingAvg}</h1>
                        </div>
                        <div className='space-y-2'>
                            <FaThumbsUp className='h-10 w-10 text-purple-500'/>
                            <p className='text-gray-500'>Total Reviews</p>
                            <h1 className='text-4xl font-bold'>{reviews}K</h1>
                        </div>
                    </div>
                    <div className="card-actions justify-between">
                    <button className="btn btn-success text-white">Install Now ({size}MB)</button>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-2xl font-semibold'>Ratings</h1>
                <Chart ratings={ratings}/>
            </div>

            <div className='space-y-4'>
                <h1 className='text-2xl font-semibold'>Description</h1>
                <p className='text-gray-400'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;