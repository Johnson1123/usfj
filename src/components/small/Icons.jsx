import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Icons({ color, toColor }) {
  return (
    <div className="h-12 w-12 mobile-landscape:w-10 mobile-landscape:h-10 bg-bgBlue rounded-full flex justify-center items-center">
      <IoIosArrowRoundForward className="text-white text-3xl mobile-landscape:text-2xl" />
    </div>
  );
}

export default Icons;
