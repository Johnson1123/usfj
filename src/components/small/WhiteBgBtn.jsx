"use client";
import React from "react";

function WhiteBgBtn({ label }) {
  return (
    <button
      onClick={() => {}}
      className="text-center px-5 py-1.5 md:px-7 md:py-2 rounded-full md:rounded-full 
        text-textColor bg-white cursor-pointer text-base font-medium font-primary
        transition-all duration-300 ease-in-out hover:text-white hover:bg-transparent 
        hover:border hover:border-blueColor w-max mobile-landscape:text-[3vw] "
    >
      {label}
    </button>
  );
}

export default WhiteBgBtn;
