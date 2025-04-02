import React from "react";

function TransparentButton({ label, handler }) {
  return (
    <button
      onClick={() => handler()}
      className="text-center rounded-full px-6 py-2 
        text-bgBlack bg-transparent cursor-pointer 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] md:portrait:text-[2.2vw] 4k:text-[1vw] 3k:text-[1vw] text-[3vw] font-manFont font-semibold font-primary
        transition-all duration-300 ease-in-out border border-bgBlue
        hover:bg-blueColor hover:text-bgBlack hover:bg-bgOrange hover:border-bgOrange"
    >
      {label}
    </button>
  );
}

export default TransparentButton;
