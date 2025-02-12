import React from 'react';
import Banner from './Banner';
import About from './HomeComponents/About';
import OurProgram from './HomeComponents/OurProgram';
import ChooseUs from './HomeComponents/ChooseUs';
import Events from './HomeComponents/Events';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <OurProgram></OurProgram>
            <ChooseUs></ChooseUs>
            <Events></Events>
        </>
    );
};

export default Home;