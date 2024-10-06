// eslint-disable-next-line no-unused-vars
import React from "react";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-40">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-8xl font-bold">
              P A C E
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
            PACE (Plankton, Aerosol, Cloud, ocean Ecosystem) is a NASA mission designed to provide detailed observations of Earth’s oceans and atmosphere. It is set to monitor key aspects of the Earth’s ecosystem, climate, and biogeochemical cycles.
            </p><br></br>
            <a href="https://science.nasa.gov/mission/pace/" target="_blank" rel="noopener noreferrer">
            <button data-aos="fade-up" data-aos-delay="500" className="bg-[#13D9BD] text-white hover:bg-green-500 px-3 py-2 rounded-md duration-200">
              LEARN MORE
            </button></a>
          </div>
          <div></div>
        </div>
      </div>
      

      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;