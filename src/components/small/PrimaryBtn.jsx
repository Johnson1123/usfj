"use client";
import React from "react";

function PrimaryButton({ label, handler }) {
  return (
    <button
      onClick={handler}
      className="text-center px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl 
        text-white bg-blueColor cursor-pointer pTexttStyle !font-medium font-primary
        transition-all duration-300 ease-in-out hover:text-blueColor hover:bg-transparent 
        hover:border hover:border-blueColor"
    >
      {label}
    </button>
  );
}

export default PrimaryButton;
