import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      navigation
      autoplay={{ delay: 50000 }}
      loop={true}
      modules={[Navigation, Autoplay]}
      className="h-[80vh] w-full"
    >
      <SwiperSlide className="relative">
        <img
          src="https://i.ibb.co.com/ccnPxgZH/classroom.jpg"
          alt="Slide 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold">Welcome to the Modern University</h1>
          <p className="text-lg mt-2 w-3/4 text-center">
            Any prominent career starts with good education. Together with us, you will have an opportunity of getting better and deeper knowledge of the subjects that can build your future.
          </p>
          <div className="mt-4 flex gap-4">
            <button className="bg-black hover:bg-green-500 text-white px-6 py-2 rounded-lg">Sign Up for Excursion</button>
            <button className="bg-green-500 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg">Learn More</button>
          </div>
        </div>
      </SwiperSlide>

    {/* slide 2 */}
      <SwiperSlide className="relative">
        <img
          src="https://i.ibb.co.com/GvPZ9RNn/riit16.jpg"
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold">Explore Our Campus</h1>
          <p className="text-lg mt-2 w-3/4 text-center">
            Discover the best learning environment with world-class facilities and a diverse student community.
          </p>
          <div className="mt-4 flex gap-4">
            <button className="bg-black text-white px-6 py-2 rounded-lg">Visit Now</button>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg">Get Started</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
