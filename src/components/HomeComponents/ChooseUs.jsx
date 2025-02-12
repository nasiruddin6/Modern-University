import React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';

const ChooseUs = () => {
    return (
        <div className='w-11/12 mx-auto mt-10 mb-10'>
            <section className='items-center justify-center'>
                <div className='text-center  space-y-10 w-6/12'>
                    <h2 className='text-4xl font-bold'>Why <span className='text-green-500'>Choose Us</span></h2>
                    <p>Modern University is a leading higher
                        educational establishment offering students
                        from all over the world a chance to obtain
                        new knowledge, learn new useful skills,
                        and find friends for a lifetime.
                        Below are some interesting facts about us.</p>
                </div>
              <div className='grid grid-cols-2 w-4/5 space-y-5 items-center'>
                  {/* card-one */}
                  <div className='flex gap-3'>
                    <div>
                        <span className='text-6xl'><FaGraduationCap /></span>

                    </div>
                    <div className='font-bold'>
                        <h2 className='text-green-500 font-bold text-4xl'>15</h2>
                        <h2 className='text-2xl'>Awards</h2>
                    </div>
                </div>
                  {/* card-one */}
                  <div className='flex gap-3'>
                    <div>
                        <span className='text-6xl'><FaGraduationCap /></span>

                    </div>
                    <div className='font-bold'>
                        <h2 className='text-green-500 font-bold text-4xl'>15</h2>
                        <h2 className='text-2xl'>Awards</h2>
                    </div>
                </div>
                  {/* card-one */}
                  <div className='flex gap-3'>
                    <div>
                        <span className='text-6xl'><FaGraduationCap /></span>

                    </div>
                    <div className='font-bold'>
                        <h2 className='text-green-500 font-bold text-4xl'>15</h2>
                        <h2 className='text-2xl'>Awards</h2>
                    </div>
                </div>
                  {/* card-one */}
                  <div className='flex gap-3'>
                    <div>
                        <span className='text-6xl'><FaGraduationCap /></span>

                    </div>
                    <div className='font-bold'>
                        <h2 className='text-green-500 font-bold text-4xl'>15</h2>
                        <h2 className='text-2xl'>Awards</h2>
                    </div>
                </div>
              </div>
            </section>
        </div>
    );
};

export default ChooseUs;