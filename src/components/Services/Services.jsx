/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
 
import React from 'react'
import { FaBacteria } from "react-icons/fa6";
import { FaEarthOceania } from "react-icons/fa6";
import { MdCloudySnowing } from "react-icons/md";
import { IoWaterSharp } from "react-icons/io5";
import second from "../../assets/second.jpg"

const ServiceData = [
  {
    title: "P", 
    content: "Plankton",
    description: "Plankton are microscopic organisms that drift in oceans, lakes, and rivers, serving as a crucial part of the aquatic food web. They include phytoplankton (plant-like organisms that perform photosynthesis) and zooplankton (tiny animals that feed on phytoplankton). Plankton play a vital role in carbon cycling and are essential for the health of marine ecosystems.",
    icon: <FaBacteria className="text-7xl"/>,
    aosDelay: "300",
  },
  {
    title: "A", 
    content: "Aerosol",
    description: "Aerosols are tiny particles or droplets suspended in the atmosphere, which can be solid or liquid. They originate from both natural sources (like dust, sea spray, and volcanic eruptions) and human activities (such as burning fossil fuels and industrial processes). Aerosols affect climate, air quality, and human health.",
    icon: <IoWaterSharp className="text-7xl"/>,
    aosDelay: "300",
  },
  {
    title: "C", 
    content: "Clouds",
    description: "A cloud is a visible mass of tiny water droplets or ice crystals suspended in the atmosphere. Clouds form when warm air rises, cools, and water vapor condenses around dust particles or other aerosols. They play a crucial role in Earth's weather and climate by reflecting sunlight, trapping heat, and influencing precipitation. Clouds come in various shapes and sizes, classified into types such as cumulus, stratus, and cirrus, based on their appearance and altitude.",
    icon: <MdCloudySnowing className="text-7xl"/>,
    aosDelay: "300",
  },
  {
    title: "E", 
    content: "ocean Ecosystem",
    description: "An ocean ecosystem consists of a complex community of living organisms, including plants, animals, and microorganisms, interacting with the physical environment of the ocean. It encompasses a wide range of habitats, from coastal areas and coral reefs to the deep sea. Ocean ecosystems play a vital role in supporting marine life, regulating climate, and cycling nutrients.",
    icon: <FaEarthOceania className="text-7xl"/>,
    aosDelay: "300",
  }
]

const Services = () => {
  return (
    <div className='bg-black text-white realative z-50'>
      <div className="container">
        <div className='min-h-[400px]'>
          <div className='grid grid-cols-1 sm:grid-rows-4 gap-6 relative z-20'>
            {ServiceData.map((data, index) =>
              (
              <div className='min-h-[180px] flex flex-col gap-2 justify-center items-center bg-[#06645B] rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[1200px] mx-auto'>
                {data.icon}
                <h1><b>{data.title}</b></h1>
                <p><i>{data.content}</i></p>
                <p className='text-sm'>{data.description}</p>
              </div>
                  )
                  ) }

          </div>
          <img src={second} alt="" ClassName="h-[200px] w-full object-cover mix-blend-screen-translate-y-24 relative z-[0]"/>
        </div>
      </div>
    </div>
  )
};

export default Services;