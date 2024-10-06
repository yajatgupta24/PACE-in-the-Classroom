// eslint-disable-next-line no-unused-vars
import React from "react";
import satelitImg from "../../assets/Application.gif";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-[#13D9BD] border-b-[#13D9BD] border-dashed" >

             <i> <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-[#13D9BD] uppercase"
              >
                PACE
              </p></i>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Application
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              Applications are creative ways to utilize NASA satellite data to enhance decision-making and offer practical solutions that address societal needs. The data products generated by PACE will aid in monitoring water resources and air quality, as well as in responding to natural disasters such as floods, volcanic eruptions, and wildfires. The PACE Applications Program will promote the broader use of the observatory’s scientific data to support policy and management decisions.
              </p><br></br>
              <a href="https://pace.oceansciences.org/applications.htm" target="_blank" rel="noopener noreferrer">
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-[#13D9BD] text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                Learn more
              </button></a>
            </div>
            <div data-aos="zoom-in">
              <img
                src={satelitImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
