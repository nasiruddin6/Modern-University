import React from "react";
import img from "../../assets/clg (3).jpg";
import img2 from "../../assets/clg (2).jpg";
import img3 from "../../assets/clg (1).jpg";

import { MdOutlineMoreTime } from "react-icons/md";
import { FaRegHandPointRight } from "react-icons/fa6";

const LatestNews = () => {
    return (
        <div className="my-10 w-9/12 mx-auto">
            <h2 className="text-4xl text-center py-10">Latest <span className="text-green-600">News</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {/* card-1 */}
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={img}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-green-500">Liberal Arts Colleges Rankings</h2>
                        <p>Liberal Arts Colleges emphasize undergraduate education.
                            These institutions award at least half of their degrees in the arts and sciences,
                            which is a great…</p>
                        <p className="flex items-center gap-1 font-mono"><MdOutlineMoreTime /> 2 days ago</p>
                    </div>
                </div>
                {/* card-2 */}
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img

                            src={img2}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-green-500">Studying in the United States</h2>
                        <p>International students increasingly want to come to the United States for college or graduate school. According to the US Educational System…</p>
                        <p className="flex items-center gap-1 font-mono"><MdOutlineMoreTime /> 2 days ago</p>
                    </div>
                </div>
                {/* card-3 */}
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={img3}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-green-500">Paying for Community College</h2>
                        <p>Many community colleges offer promise programs, which offer tuition-free awards to eligible students  mainly to students with Pell grant eligibility...</p>
                        <p className="flex items-center gap-1 font-mono"><MdOutlineMoreTime /> 2 days ago</p>
                    </div>
                </div>
            </div>
            <div className='py-14  flex justify-center'>
                <button className="btn no-animation bg-green-500 text-white rounded-full flex items-center">View All News Posts <span className='text-xl'><FaRegHandPointRight /></span></button>
            </div>
        </div>
    );
};

export default LatestNews;
