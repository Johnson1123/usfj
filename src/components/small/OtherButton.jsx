'use client';
import React from 'react';

function OtherButton({ label, handler }) {
    return (
        <button
            onClick={handler}
            className="hover:bg-bgWhite bg-bgBlue text-white transition-all duration-200 ease-linear border border-bgBlue 2xl:rounded-3xl xl:rounded-3xl lg:rounded-3xl lg:landscape:rounded-3xl 4k:rounded-3xl 3k:rounded-3xl md:portrait:rounded-3xl rounded-full px-4 py-2 hover:text-bgBlue w-max flex justify-center items-center !font-normal"
        >
            {label}
        </button>
    );
}

export default OtherButton;
