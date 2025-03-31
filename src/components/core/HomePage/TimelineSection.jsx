import React from 'react'

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
    {
        Logo: Logo2,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
    {
        Logo: Logo3,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
    {
        Logo: Logo4,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
];

const TimelineSection = () => {
    return (
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col md:flex-row justify-center  gap-15 w-full">
          {/* Left Section */}
          <div className="md:w-[45%] w-full flex flex-col mb-3 justify-center items-center p-4 gap-5">
            {timeline.map((element, index) => (
              <div className="flex flex-row gap-6" key={index}>
                <div className="w-[50px] h-[50px] bg-white flex items-center">
                  <img src={element.Logo} alt="Logo" />
                </div>
                <div>
                  <h2 className="font-semibold text-[18px]">{element.heading}</h2>
                  <p className="text-base">{element.Description}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Right Section - Image */}
          <div className="relative shadow-blue-200 md:w-[55%] w-full">
            <img
              src={timelineImage}
              alt="timelineImage"
              className="w-full h-auto md:h-[400px] object-cover shadow-white"
            />
            <div
              className="absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 
                left-[50%] translate-x-[-50%] translate-y-[-50%] w-full md:w-auto"
            >
              <div className="flex flex-row gap-3 sm:gap-5 items-center border-r border-caribbeangreen-300 px-7">
                <p className="text-3xl font-bold">10</p>
                <p className="text-caribbeangreen-300 text-sm">Years of Experience</p>
              </div>
              <div className="flex gap-3 sm:gap-5 items-center px-7">
                <p className="text-xl sm:text-3xl font-bold">250</p>
                <p className="text-caribbeangreen-300 text-sm">Type of Courses</p>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default TimelineSection;
  