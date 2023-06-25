import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import image1 from "../assets/test1.png";
import image2 from "../assets/test2.png";
import image3 from "../assets/test3.png";

function Home() {
  const slides = [image2, image3, image1];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex + slides.length - 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex]);

  return (
    <div className="bg-[#f7f1f0] justify-center px-10 flex relative">
      <div className="h-[190px] w-[570px] sm:h-[290px] sm:w-[870px] md:h-[390px] md:w-[1170px] lg:h-[490px] lg:w-[1470px] bg-black relative text-white items-center flex justify-center">
        <img src={slides[currentIndex]} alt="" className="h-full w-full " />
        <div className="absolute bottom-4 right-4">
          <button className="bg-white text-black px-4 py-2 rounded-full font-semibold shadow">
            Shop Now
          </button>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden sm:block group-hover:block hover:rounded-full hover:bg-gray-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-12 text-2xl p-2 text-black cursor-pointer">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden sm:block group-hover:block hover:rounded-full hover:bg-gray-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-12 text-2xl p-2 text-black cursor-pointer">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>
      {/* shop now button */}
    </div>
  );
}

export default Home;
