import React from 'react';
import Banner from './Banner';
import About from './HomeComponents/About';
import OurProgram from './HomeComponents/OurProgram';
import ChooseUs from './HomeComponents/ChooseUs';
import Events from './HomeComponents/Events';
import Slider from './HomeComponents/Slider';
import LatestNews from './HomeComponents/LatestNews';
import ImgBar from './HomeComponents/ImgBar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <OurProgram></OurProgram>
            <ChooseUs></ChooseUs>
            <Events></Events>
           <Slider></Slider>
           <LatestNews></LatestNews>
           <ImgBar></ImgBar>
        </div>
    );
};

export default Home;