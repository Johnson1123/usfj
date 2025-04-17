import React from "react";
import AboutExecutiveSlider from "./AboutExecutiveSlider";
// import { Swiper } from "swiper/react";

function AboutExecutive() {
  return (
    <div className=" bg-[#F7F9FF] flex justify-center items-center py-16 xl:py-[5rem] 3k:py-[20rem]">
      <div className="2xl:w-[75%]  4k:w-[70%] w-[90%] overflow-hidden">
        <div className="">
          <h2 className="headingStyle text-center">
            Meet our <span className="text-primary">Executives</span>
          </h2>
        </div>
        <AboutExecutiveSlider />
      </div>
    </div>
  );
}

export default AboutExecutive;
