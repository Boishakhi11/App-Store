import React from 'react';
import heroImage from "/hero.png"

const TotalCount = () => {
    return (
        <div>
            <img src={heroImage} alt='Hero Image' className='mx-auto max-h-[400px]'/>
            <div className='max-h-scrren text-white bg-gradient-to-t from-purple-900 via-purple-700 to-purple-600 p-7 space-y-8'>
                <h1 className='font-bold text-4xl text-center'>Trusted By Millions, Built For You</h1>
                <div className='flex flex-col md:flex-row justify-around items-center gap-5 w-8/12 mx-auto'>
                    <div className='space-y-3 text-center'>
                        <p>Total Downloads</p>
                        <h1 className='font-extrabold text-6xl'>29.6M</h1>
                        <p>21% More Than Last Month</p>
                    </div>

                     <div className='space-y-3 text-center'>
                        <p>Total Reviews</p>
                        <h1 className='font-extrabold text-6xl'>906K</h1>
                        <p>46% More Than Last Month</p>
                    </div>

                     <div className='space-y-3 text-center'>
                        <p>Active Apps</p>
                        <h1 className='font-extrabold text-6xl' >50+</h1>
                        <p>31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalCount;