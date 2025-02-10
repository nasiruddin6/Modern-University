import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const About = () => {
    return (
        <div className='w-11/12 mx-auto mt-14 h-[400px]'>
            <div className='flex  items-center justify-center'>
                <div className='w-5/12 max-w-3xl'>
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/OFS4qsjBILc?si=VvTma2Nu3RoyAA3b"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>
                </div>
                <div className=' font-bold w-5/12 mx-auto'>
                    <h2 className='text-4xl font-bold pb-14 '>About <span className='text-green-500'>Our University</span></h2>
                    <p className='pb-7'>
                        As one of the world's premier academic and research institutions, the Modern University has driven new ways of thinking since our founding. Today, we represent an intellectual destination that draws inspired scholars to our local and international campuses, keeping us at the nexus of ideas that challenge and change the world and provide companies with new specialists.
                    </p>

                    <button className='btn hover:bg-green-500'>Learn More <FaArrowRightLong /> </button>

                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default About;
