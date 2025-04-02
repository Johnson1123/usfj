"use client";
import React from "react";

function OtherButton({ label, handler }) {
  return (
    <button
      onClick={handler}
      className="hover:bg-bgWhite bg-bgBlue text-white transition-all duration-200 ease-linear border border-bgBlue 2xl:rounded-3xl xl:rounded-3xl lg:rounded-3xl lg:landscape:rounded-3xl 4k:rounded-3xl 3k:rounded-3xl md:portrait:rounded-3xl rounded-full font-[700] px-7 2xl:py-4 xl:py-4 lg:py-4 lg:landscape:py-2 4k:py-4 3k:py-4 md:portrait:py-2 py-3 hover:text-bgBlue 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] 4k:text-[1vw] 3k:text-[1vw] md:portrait:text-[2vw] text-[clamp(4rem_30px)] w-max flex justify-center items-center xl:px-10 mobile-landscape:text-[1.8vw]"
    >
      {label}
    </button>
  );
}

export default OtherButton;
