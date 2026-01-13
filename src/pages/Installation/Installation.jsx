import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredData } from '../../Utility/addToDB';

const Installation = () => {
    const data = useLoaderData();
    console.log("Installation rendered");
    
    useEffect(()=> {
        const appList = getStoredData();
        console.log(appList, data)
    },[])
    return (
        <div className="mt-10 space-y-3.5">
            <h1 className="text-4xl font-bold text-center">Your Installed Apps</h1>
            <p className="text-gray-500 text-center">Explore All Apps on the Market developed by us.</p>
             <div className='flex justify-between items-center w-11/12 mx-auto'>
                <h2 className='font-semibold text-2xl'>Apps Found</h2>
                <input type="text" className="input" placeholder="Sort By Size" list="browsers" />
                    <datalist id="browsers">
                        <option value="High-Low"></option>
                        <option value="Low-High"></option>
                    </datalist> 
            </div>
        </div>
    );
};

export default Installation;