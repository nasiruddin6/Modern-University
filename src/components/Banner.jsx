import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    setTimeout(() => setLoaded(true), 500);
  }, []);

  return (
    <Swiper
      navigation
      autoplay={{ delay: 5000 }}
      loop={true}
      modules={[Navigation, Autoplay]}
      className="h-[80vh] w-full mt-20"
      onSlideChange={() => AOS.refresh()}
    >
      {/* Slide 1 */}
      <SwiperSlide className="relative">
        <img
          src="https://i.ibb.co/WpMFQN7S/modern.jpg"
          alt="Slide 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1
            className={`text-center text-6xl font-bold transform transition-all duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Welcome to the Modern <br /> University
          </h1>
          <p
            className={`text-lg mt-6 w-3/4 text-center transform transition-all duration-1000 delay-200 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Any prominent career starts with good education. Together with us, you will have
            an opportunity of getting better and deeper knowledge of the subjects
            that can build your future.
          </p>
          <div className="mt-10 flex gap-4">
            <button
              className={`bg-black hover:bg-green-500 text-white px-6 py-2 rounded-lg transform transition-all duration-1000 delay-500 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Sign Up for Excursion
            </button>
            <button
              className={`bg-green-500 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg transform transition-all duration-1000 delay-700 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Learn More
            </button>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide className="relative">
        <img
          src="https://i.ibb.co/PZq2rppB/classroom.jpg"
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1
            className={`text-4xl font-bold transform transition-all duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Explore Our Campus
          </h1>
          <p
            className={`text-lg mt-2 w-3/4 text-center transform transition-all duration-1000 delay-200 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Discover the best learning environment with world-class facilities and a diverse student community.
          </p>
          <div className="mt-4 flex gap-4">
            <button
              className={`bg-black text-white px-6 py-2 rounded-lg transform transition-all duration-1000 delay-500 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Visit Now
            </button>
            <button
              className={`bg-green-500 text-white px-6 py-2 rounded-lg transform transition-all duration-1000 delay-700 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Get Started
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
