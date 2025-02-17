import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const About = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 1000); // অ্যানিমেশন শুরু করার জন্য ডিলে
    }, []);

    return (
        <div className='w-11/12 mx-auto mt-14 mb-3 h-auto md:h-[500px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10'>
                
                {/* Video Section */}
                <div className={`w-full flex justify-center transform transition-all duration-1000 ${
                    loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}>
                    <iframe 
                        className="w-full md:w-[660px] h-[250px] md:h-[350px]" 
                        src="https://www.youtube.com/embed/OFS4qsjBILc?si=VvTma2Nu3RoyAA3b"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>

                {/* Text Section */}
                <div className={`font-bold w-full md:w-5/6 mx-auto text-center md:text-left transform transition-all duration-1000 delay-200 ${
                    loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}>
                    <h2 className='text-3xl md:text-4xl font-bold pb-6 md:pb-14'>
                        About <span className='text-green-500'>Our University</span>
                    </h2>
                    <p className='pb-5 md:pb-7 text-sm md:text-base'>
                        As one of the world's premier academic and research institutions, the Modern University has driven new ways of thinking since our founding. Today, we represent an intellectual destination that draws inspired scholars to our local and international campuses, keeping us at the nexus of ideas that challenge and change the world and provide companies with new specialists.
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <button className={`btn hover:bg-green-500 flex items-center gap-2 transform transition-all duration-1000 delay-500 ${
                            loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}>
                            Learn More <FaArrowRightLong />
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;
