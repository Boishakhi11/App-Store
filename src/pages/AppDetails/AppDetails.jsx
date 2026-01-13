import React, { useState } from 'react';
import { LuDownload } from "react-icons/lu";
import { FaStar, FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from 'react-router';
import Chart from '../../components/Chart/Chart';
import { installedData } from '../../Utility/addToDB';

const AppDetails = () => {
  const { id } = useParams();
  const allApps = useLoaderData();

  const appsArray = Array.isArray(allApps) ? allApps : allApps?.data || allApps?.apps || [];
  const singleApp = appsArray.find((app) => app.id === Number(id));

  if (!singleApp) {
    return <div className="text-center mt-10">App not found</div>;
  }

  const { image, title, companyName, description, downloads, ratingAvg, ratings, reviews, size } = singleApp;

  const [install, setInstall] = useState(false);

  const handleClick = () => {
    setInstall(true);
    installedData(Number(id));
  };

  return (
    <div className='w-10/12 mx-auto space-y-8'>
      {/* your UI stays same */}
      <div className="card lg:card-side bg-base-500 border-gray-400 shadow-2xl p-3">
        <figure>
          <img className='h-80 w-80 rounded-2xl' src={image} alt="App Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">{title}</h2>
          <p className='text-gray-400'>Developed by <span className='text-purple-600'>{companyName}</span>.</p>

          <div className='flex flex-col justify-center gap-3 md:flex-row md:justify-between items-center w-2/3'>
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
              <FaThumbsUp className='h-10 w-10 text-purple-500' />
              <p className='text-gray-500'>Total Reviews</p>
              <h1 className='text-4xl font-bold'>{reviews}K</h1>
            </div>
          </div>

          <div className="card-actions justify-between">
            <button
              onClick={handleClick}
              disabled={install}
              className={`btn ${install ? "bg-green-300 cursor-not-allowed" : "btn-success"} text-white`}
            >
              {install ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className='text-2xl font-semibold'>Ratings</h1>
        <Chart ratings={ratings} />
      </div>

      <div className='space-y-4'>
        <h1 className='text-2xl font-semibold'>Description</h1>
        <p className='text-gray-400'>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;