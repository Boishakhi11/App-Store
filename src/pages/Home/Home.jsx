import React from 'react';
import Banner from '../../components/Banner/Banner';
import TotalCount from '../../components/TotalCount/TotalCount';
import TrendingApps from '../../components/TrendingApps/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TotalCount/>
            <TrendingApps/>
        </div>
    );
};

export default Home;