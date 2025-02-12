import React from 'react';
import Banner from './Banner';
import About from './HomeComponents/About';
import OurProgram from './HomeComponents/OurProgram';
import ChooseUs from './HomeComponents/ChooseUs';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <OurProgram></OurProgram>
            <ChooseUs></ChooseUs>
        </>
    );
};

export default Home;