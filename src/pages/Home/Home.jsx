import React from 'react';
import Banner from '../../components/Banner/Banner';
import TotalCount from '../../components/TotalCount/TotalCount';
import TrendingApps from '../../components/TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner/>
            <TotalCount/>
            <TrendingApps data={data}/>
        </div>
    );
};

export default Home;