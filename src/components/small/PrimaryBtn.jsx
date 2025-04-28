'use client';
import React from 'react';

function PrimaryButton({ label, handler }) {
    return (
        <button
            onClick={handler}
            className="text-center px-4 py-2 rounded-full
        text-white bg-bgBlue  pTexttStyle font-primary
        transition-all duration-300 ease-in-out hover:text-bgBlue hover:bg-transparent
        border border-bgBlue w-max cursor-pointer !font-manFont"
        >
            {label}
        </button>
    );
}

export default PrimaryButton;
