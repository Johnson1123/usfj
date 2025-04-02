import { textStyle } from "@/style/common";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function AboutWhoWeAreBtn({ label, active, steps, setSteps }) {
  return (
    <button
      className={`font-semibold flex justify-between items-center w-full my-10 ${textStyle} mobile-landscape:text-[3vw]`}
      onClick={() => setSteps(active)}
    >
      <p className={`${active == steps ? "text-primary" : "text-textColor"}`}>
        {label}
      </p>
      <IoIosArrowRoundForward
        className={`${
          active == steps ? "text-primary" : "text-textColor"
        } text-[30px] 3k:text-[55px]`}
      />
    </button>
  );
}

export default AboutWhoWeAreBtn;
