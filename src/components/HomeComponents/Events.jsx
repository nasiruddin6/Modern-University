import React from 'react';
import { FaArrowRight, FaRegHandPointRight, FaUserCheck } from 'react-icons/fa6';
import img1 from '../../assets/img (1).jpg'
import img2 from '../../assets/img (2).jpg'
import img3 from '../../assets/img (3).jpg'
import img4 from '../../assets/img (4).jpg'

const Events = () => {
    return (
        <div className='w-full bg-gray-200 '>
            <div className="w-10/12 mx-auto py-10 ">
                <h2 className="text-4xl font-bold text-center my-12 mb-14">Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Event 1 */}
                    <div>
                        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={img1}
                                alt="Event 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className='flex gap-5 '>
                            <div className='py-1 w-28 bg-gray-600 text-white text-center'>
                                <h2 className='text-4xl'>31</h2>
                                <p className='text-xl'>September</p>
                                <p className='font-semibold'>5.00 pm</p>
                            </div>
                            <div className='pt-3 space-y-2 '>
                                <h2 className='text-green-500 text-xl hover:text-black'>Spacewalking Conference</h2>
                                <h3 className='flex items-center gap-2 group hover:text-black'>
                                    <span className='text-green-500 group-hover:text-black'><FaUserCheck /></span>
                                    Walter Stanley
                                </h3>

                            </div>
                        </div>
                    </div>
                    {/* Event 2 */}
                    <div>
                        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={img2}
                                alt="Event 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className='flex gap-5 '>
                            <div className='py-1 w-28 bg-gray-600 text-white text-center'>
                                <h2 className='text-4xl'>5</h2>
                                <p className='text-xl'>July</p>
                                <p className='font-semibold'>5.00 pm</p>
                            </div>
                            <div className='pt-3 space-y-2'>
                                <h2 className='text-green-500 text-xl hover:text-black'>Spacewalking Conference</h2>
                                <h3 className='items-center flex gap-2 group hover:text-black'><span className='text-green-500 group-hover:text-black'><FaUserCheck /></span> Walter Stanley</h3>
                            </div>
                        </div>
                    </div>
                    {/* Event 3 */}
                    <div>
                        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={img3}
                                alt="Event 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className='flex gap-5 '>
                            <div className='py-1 w-28 bg-gray-600 text-white text-center'>
                                <h2 className='text-4xl'>5</h2>
                                <p className='text-xl'>July</p>
                                <p className='font-semibold'>5.00 pm</p>
                            </div>
                            <div className='pt-3 space-y-2'>
                                <h2 className='text-green-500 text-xl hover:text-black'>Graphic Design Workshop</h2>
                                <h3 className='items-center flex gap-2 group hover:text-black'><span className='text-green-500 group-hover:text-black'><FaUserCheck /></span> Bruce Hawkins</h3>
                            </div>
                        </div>
                    </div>
                    {/* Event 4 */}
                    <div>
                        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={img4}
                                alt="Event 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className='flex gap-5 '>
                            <div className='py-1 w-28 bg-gray-600 text-white text-center'>
                                <h2 className='text-4xl'>5</h2>
                                <p className='text-xl'>July</p>
                                <p className='font-semibold'>5.00 pm</p>
                            </div>
                            <div className='pt-3 space-y-2'>
                                <h2 className='text-green-500 text-xl hover:text-black'>History of Art</h2>
                                <h3 className='items-center flex gap-2 group hover:text-black'><span className='text-green-500 group-hover:text-black'><FaUserCheck /></span>Danielle Garza</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-14  flex justify-center'>
                <button className="btn no-animation bg-green-500 text-white rounded-full flex items-center">View Event Calendar <span className='text-xl'><FaRegHandPointRight /></span></button>
            </div>
        </div>
    );
};

export default Events;
