import React from 'react';
import { FaLaptop, FaStar } from 'react-icons/fa6';
import { GiSandsOfTime } from 'react-icons/gi';

const OurProgram = () => {
    return (
        <div className='bg-[url(https://i.ibb.co.com/hJBMCv52/bg.png)]  h-auto md:h-[900px]  bg-cover bg-center bg-no-repeat'>
            <div className='w-10/12 mx-auto'>
                <div className='text-center text-white items-center justify-center pt-20'>
                    <h2 className='text-6xl font-bold'>Our Program</h2>
                    <p className='pt-10 pb-5 text-xl'>Our Featured Programs are selected through a rigorous process and uniquely created for each semester.</p>
                </div>
                <div className='pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {/* card-one */}
                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p>June 3, 2018</p>
                            <h2 className="card-title">Arts Programs!</h2>
                            <p className='text-green-400'>Charles Banks</p>
                            <div className="card-actions space-x-3">

                                {/* Icon 1 */}
                                <span className="relative group cursor-pointer">
                                    <GiSandsOfTime className="text-2xl" />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-8 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Start 1
                                    </span>
                                </span>

                                {/* Icon 2 */}
                                <span className="relative group cursor-pointer">
                                    <FaStar className="text-2xl text-yellow-500" />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-8 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Start 2
                                    </span>
                                </span>

                                {/* Icon 3 */}
                                <span className="relative group cursor-pointer">
                                    <FaLaptop className="text-2xl text-blue-500" />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-8 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Start 3
                                    </span>
                                </span>

                            </div>
                        </div>
                    </div>
                    {/* card-two */}
                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p>June 3, 2018</p>
                            <h2 className="card-title">Arts Programs!</h2>
                            <p className='text-green-400'>Charles Banks</p>
                            <div className="card-actions space-x-3">

                                {/* Icon 1 */}
                                <span className="relative group cursor-pointer">
                                    <GiSandsOfTime className="text-2xl" />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-8 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Start 1
                                    </span>
                                </span>

                                {/* Icon 2 */}
                                <span className="relative group cursor-pointer">
                                    <FaStar className="text-2xl text-yellow-500" />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-8 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Start 2
                                    </span>
                                </span>

                                {/* Icon 3 */}
                                <span className="relative group cursor-pointer">
                                    <FaLaptop className="text-2xl text-blue-500" />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-8 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Start 3
                                    </span>
                                </span>

                            </div>
                        </div>
                    </div>
                    {/* card-three */}
                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p>June 3, 2018</p>
                            <h2 className="card-title">Arts Programs!</h2>
                            <p className='text-green-400'>Charles Banks</p>
                            <div className="card-actions space-x-3">

                                {/* Icon 1 */}
                                <span className="relative group cursor-pointer">
                                    <GiSandsOfTime className="text-2xl" />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-8 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Start 1
                                    </span>
                                </span>

                                {/* Icon 2 */}
                                <span className="relative group cursor-pointer">
                                    <FaStar className="text-2xl text-yellow-500" />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-8 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Start 2
                                    </span>
                                </span>

                                {/* Icon 3 */}
                                <span className="relative group cursor-pointer">
                                    <FaLaptop className="text-2xl text-blue-500" />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-8 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Start 3
                                    </span>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-14 pb-10'>
                <button className="btn rounded-full w-52 bg-green-500 ">View All Programs</button>
            </div>
        </div>
    );
};

export default OurProgram;
