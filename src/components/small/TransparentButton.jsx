import React from "react";

function TransparentButton({ label, handler }) {
  return (
    <button
      onClick={() => handler()}
      className="text-center rounded-full px-6 lg:px-3 xl:px-6 py-2 
        text-bgBlack bg-transparent cursor-pointer linkText !font-medium
        transition-all duration-300 ease-in-out border border-bgBlue
        hover:bg-blueColor hover:text-bgBlack hover:bg-bgOrange hover:border-bgOrange"
    >
      {label}
    </button>
  );
}

export default TransparentButton;
