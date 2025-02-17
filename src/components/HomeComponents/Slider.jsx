import React from "react";
import Marquee from "react-fast-marquee";
import img from "../../assets/books.jpg";

const slides = [
  {
    name: "Debra Banks",
    text: "I have completed my post-graduation from School of Business Studies at Modern University, and I am grateful to all the faculties and staff for making me a true business expert.",
  },
  {
    name: "Steven Alvarez",
    text: "Studying computer science at Modern University has widened my perspective and has given me a better understanding of my future. Moreover, their campus has a lot of activities for all students.",
  },
  {
    name: "Nasir Uddin",
    text: "This is very impressive. I love him.has given me a better understanding of my future. Moreover,and has given me a better understanding of my future. their campus has a lot of activities for all students",
  },
];

const Slider = () => {
  return (
    <div className="w-full bg-gray-100 py-10">
      <div className="relative w-full h-[550px] flex items-center justify-center bg-black/40 text-white text-center p-8">
        <img
          src={img}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        {/* Marquee Section */}
        <div className="relative w-full z-10 overflow-hidden">
          <Marquee speed={60} gradient={true} gradientWidth={100} pauseOnHover={true}>
            {slides.map((slide, index) => (
              <div key={index} className="mx-10 flex items-center gap-5">
                <div className="p-5 bg-white text-black rounded-lg shadow-md w-[350px]">
                  <p className="text-lg font-semibold">"{slide.text}"</p>
                  <h3 className="mt-4 text-xl font-bold text-green-600">{slide.name}</h3>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Slider;
