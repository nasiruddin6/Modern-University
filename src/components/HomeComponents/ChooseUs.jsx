import React from 'react';
import CountUp from 'react-countup';
import { FaGraduationCap, FaRegBuilding } from 'react-icons/fa6';
import groupImg from '../../assets/business-people-meeting.jpg';
import { BsBagCheckFill } from 'react-icons/bs';
import { MdPeopleAlt } from 'react-icons/md';

const ChooseUs = () => {
    return (
        <div className='w-11/12 mx-auto mt-10 mb-10 flex flex-col md:flex-row items-center justify-center'>
            {/* section-1 */}
            <section className='w-full md:w-6/12 flex flex-col items-center text-center md:text-left'>
                <div className='space-y-5 w-full md:w-10/12'>
                    <h2 className='text-4xl font-bold'>
                        Why <span className='text-green-500'>Choose Us</span>
                    </h2>
                    <p>
                        Modern University is a leading higher educational establishment offering students
                        from all over the world a chance to obtain new knowledge, learn new useful skills,
                        and find friends for a lifetime. Below are some interesting facts about us.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 w-full md:w-4/5 gap-5 mt-6'>
                    {/* card-one */}
                    <div className='flex items-center gap-3 transition-transform duration-300 hover:-translate-y-3'>
                        <span className='text-6xl text-green-500 hover:animate-spin duration-1000'>
                            <FaGraduationCap />
                        </span>
                        <div className='font-bold'>
                            <h2 className='text-green-500 font-bold text-4xl'>
                                <CountUp start={1} end={15} duration={3} />
                            </h2>
                            <h2 className='text-2xl'>Awards</h2>
                        </div>
                    </div>
                    {/* card-two */}
                    <div className='flex items-center gap-3 transition-transform duration-300 hover:-translate-y-3'>
                        <span className='text-6xl text-green-500 hover:animate-spin duration-1000'>
                            <BsBagCheckFill />
                        </span>
                        <div className='font-bold'>
                            <h2 className='text-green-500 font-bold text-4xl'>
                                <CountUp start={1} end={30} duration={3} />+
                            </h2>
                            <h2 className='text-2xl'>Certified Teachers</h2>
                        </div>
                    </div>
                    {/* card-three */}
                    <div className='flex items-center gap-3 transition-transform duration-300 hover:-translate-y-3'>
                        <span className='text-6xl text-green-500 hover:animate-spin duration-1000'>
                            <FaRegBuilding />
                        </span>
                        <div className='font-bold'>
                            <h2 className='text-green-500 font-bold text-4xl'>
                                <CountUp start={1} end={10} duration={3} />
                            </h2>
                            <h2 className='text-2xl'>Featured Programs</h2>
                        </div>
                    </div>
                    {/* card-four */}
                    <div className='flex items-center gap-3 transition-transform duration-300 hover:-translate-y-3'>
                        <span className='text-6xl text-green-500 hover:animate-spin duration-1000'>
                            <MdPeopleAlt />
                        </span>
                        <div className='font-bold'>
                            <h2 className='text-green-500 font-bold text-4xl'>
                                <CountUp start={1} end={600} duration={3} />
                            </h2>
                            <h2 className='text-2xl'>Students</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-2 */}
            <section className='w-full md:w-6/12 flex justify-center mt-10 md:mt-0'>
                <img className='w-full max-w-[700px] rounded-lg shadow-lg' src={groupImg} alt="Business Meeting" />
            </section>
        </div>
    );
};

export default ChooseUs;
