import React from "react";

function SecondaryButton({ label, handler }) {
  return (
    <button
      onClick={() => handler()}
      className="text-center rounded-full px-6 py-2 
        text-bgBlack bg-bgOrange cursor-pointer 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] md:portrait:text-[2.2vw] 4k:text-[1vw] 3k:text-[1vw] text-[3vw] font-manFont font-semibold font-primary
        transition-all duration-300 ease-in-out hover:text-blueColor hover:bg-transparent 
        border hover:border-bgOrange hover:text-bgOrange"
    >
      {label}
    </button>
  );
}

export default SecondaryButton;
