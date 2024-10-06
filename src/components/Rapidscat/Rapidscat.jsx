// eslint-disable-next-line no-unused-vars
import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-8 border-r-2 border-b-2 border-r-[#13D9BD] border-b-[#13D9BD] border-dashed">
              <i><p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-[#13D9BD]"
              >
                About
              </p></i>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                PACE Mission
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              Building on insights gained from past ocean color studies, a committed team is bringing the PACE mission to fruition. Throughout its mission development, PACE will encounter several key milestones. The Development Team at the Goddard Space Flight Center (GSFC) will oversee PACE through every stage, ensuring the instruments, spacecraft, and observatory are constructed, tested, and launched successfully.
              </p><br></br>
              <a href="https://pace.oceansciences.org/mission.htm" target="_blank" rel="noopener noreferrer">
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-[#13D9BD] text-white hover:bg-[#13D9BD] px-4 py-1 rounded-md duration-200"
              >
                Learn more
              </button></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
