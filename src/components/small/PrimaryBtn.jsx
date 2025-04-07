"use client";
import React from "react";

function PrimaryButton({ label, handler }) {
  return (
    <button
      onClick={handler}
      className="text-center px-6 md:px-16 xl:px-6 py-2 rounded-full
        text-white bg-bgBlue cursor-pointer pTexttStyle font-primary
        transition-all duration-300 ease-in-out hover:text-bgBlue hover:bg-transparent
        hover:border hover:border-bgBlue w-max"
    >
      {label}
    </button>
  );
}

export default PrimaryButton;
