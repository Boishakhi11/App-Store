import React, { Suspense } from 'react';
import TrendingApp from '../TrendingApp/TrendingApp';
import { Link } from 'react-router';


const TrendingApps = ({data}) => {
    
    return (
        <div className='mt-20 space-y-4'>
            <h1 className='text-4xl font-bold text-center'>Trending Apps</h1>
            <p className='text-[20px] text-gray-400 text-center'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<p className='min-h-screen mx-auto'>Apps are loading</p>}>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4'>
                    {
                    data.map((eachApp)=> 
                    <TrendingApp 
                    key={eachApp.id} 
                    eachApp={eachApp}></TrendingApp>)
                     }
                </div>
            </Suspense>
            <div className='text-center'>
                <Link to='/Apps'>
                    <button className="btn text-white text-[16px] bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 cursor-pointer">
                    Show All
                    </button>
                </Link>
            </div>
            
        </div>
    );
};

export default TrendingApps;