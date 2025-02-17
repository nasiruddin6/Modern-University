import React from 'react';
import { FaLaptop, FaStar } from 'react-icons/fa6';
import { GiSandsOfTime } from 'react-icons/gi';

const OurProgram = () => {
    return (
        <div className='bg-[url(https://i.ibb.co/hJBMCv52/bg.png)] h-auto md:h-[900px] bg-cover bg-center bg-no-repeat'>
            <div className='w-11/12 mx-auto'>
                <div className='text-center text-white items-center justify-center pt-20'>
                    <h2 className='text-4xl md:text-6xl font-bold'>Our Program</h2>
                    <p className='pt-6 md:pt-10 pb-5 text-lg md:text-xl'>
                        Our Featured Programs are selected through a rigorous process and uniquely created for each semester.
                    </p>
                </div>
                <div className='pt-10 md:pt-20 grid grid-cols-1  md:grid-cols-3 gap-6'>
                    {/* card-one */}
                    <div className="card card-compact bg-base-100 w-full md:w-96 shadow-xl transition-transform duration-300 hover:-translate-y-3">
                        <figure>
                            <img className='w-full h-[250px] md:h-[310px] object-cover' src="https://i.ibb.co/nq40mn3F/arts.jpg" alt="Arts Program" />
                        </figure>
                        <div className="card-body">
                            <p>June 3, 2018</p>
                            <h2 className="card-title">Arts Programs!</h2>
                            <p className='text-green-400'>Charles Banks</p>
                        </div>
                    </div>

                    {/* card-two */}
                    <div className="card card-compact bg-base-100 w-full md:w-96 shadow-xl transition-transform duration-300 hover:-translate-y-3">
                        <figure>
                            <img className='w-full h-[250px] md:h-[310px] object-cover' src="https://i.ibb.co/Q3sVtd38/books.jpg" alt="Language Program" />
                        </figure>
                        <div className="card-body">
                            <p>June 3, 2018</p>
                            <h2 className="card-title">Foreign Language Programs!</h2>
                            <p className='text-green-400'>Maria Howard</p>
                        </div>
                    </div>

                    {/* card-three */}
                    <div className="card card-compact bg-base-100 w-full md:w-96 shadow-xl transition-transform duration-300 hover:-translate-y-3">
                        <figure>
                            <img className='w-full h-[250px] md:h-[310px] object-cover' src="https://i.ibb.co/zT8vfZkX/spots5494.jpg" alt="Sports Program" />
                        </figure>
                        <div className="card-body">
                            <p>June 3, 2018</p>
                            <h2 className="card-title">Sports Programs!</h2>
                            <p className='text-green-400'>Steven Carter</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-14 pb-10'>
                <button className="btn rounded-full w-48 md:w-52 bg-green-500 text-white">View All Programs</button>
            </div>
        </div>
    );
};

export default OurProgram;
