'use client';
import { pTextStyle } from '@/style/common';
import React from 'react';

function WhiteBgBtn({ label }) {
    return (
        <button
            onClick={() => {}}
            className={`text-center px-4 md:px-4 xl:px-4 py-2 2xl:rounded-3xl xl:rounded-3xl lg:rounded-3xl lg:landscape:rounded-3xl 4k:rounded-3xl 3k:rounded-3xl md:portrait:rounded-3xl rounded-full
        text-textColor bg-white cursor-pointer font-medium font-primary
        transition-all duration-300 ease-in-out hover:text-white hover:bg-transparent 
        hover:border hover:border-blueColor w-max`}
        >
            {label}
        </button>
    );
}

export default WhiteBgBtn;
