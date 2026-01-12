import React from 'react';
import ratingIcon from "../../../public/icon-ratings.png";
import downloadIcon from "../../../public/icon-downloads.png";
import { Link } from 'react-router';

const TrendingApp = ({eachApp}) => {
    const {image, downloads, ratingAvg, title,id } = eachApp;
    return (
        <Link to={`/Appdetails/${id}`}>
            <div className='border-b-2 border-purple-200 p-4 shadow-md space-y-4 cursor-pointer rounded-2xl'>
                <img src={image} className='h-70 w-70 rounded-md mx-auto block transition delay-150 duration-300 hover:scale-110'/>
                <h2 className='text-center'>{title}</h2>
                        <div className='flex justify-between items-center px-2'>
                            <p className='text-[16px] text-green-600'><img src={downloadIcon} className='w-4 h-4 inline-flex me-2'/> {downloads}M</p>
                            <p className='text-[16px] text-orange-500'><img src={ratingIcon} className='w-4 h-4 inline-flex me-2'/> {ratingAvg}</p>
                        </div>
           </div>
        </Link>
    );
};

export default TrendingApp;