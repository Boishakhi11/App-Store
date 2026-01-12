import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import AllApp from '../AllApp/AllApp'

const Apps = () => {
    const apps = useLoaderData();
  
    return (
        <div className="mt-10 space-y-3.5">
            <h1 className="text-4xl font-bold text-center">All Our Applications</h1>
            <p className="text-gray-500 text-center">Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between items-center w-11/12 mx-auto'>
                <h2 className='font-bold text-2xl'>(20) Apps Found</h2>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
                
            </div>
            <Suspense fallback={<p>Loading Apps</p>}>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto'>
                    {
                        apps.map((app)=>
                        <AllApp 
                        key={app.id}
                        app= {app}>
                        </AllApp>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Apps;