import React from 'react';
import Banner from './Banner';
import About from './HomeComponents/About';
import OurProgram from './HomeComponents/OurProgram';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <OurProgram></OurProgram>
        </>
    );
};

export default Home;