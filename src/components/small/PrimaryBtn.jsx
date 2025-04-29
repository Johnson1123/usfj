'use client';
import React from 'react';

function PrimaryButton({ label, handler }) {
    return (
        <button
            onClick={handler}
            className="text-center px-4 py-2 rounded-full
        text-white bg-bgBlue cursor-pointer linkText font-manFont !font-medium
        transition-all duration-300 ease-in-out hover:text-bgBlue hover:bg-transparent
        border border-bgBlue w-max"
        >
            {label}
        </button>
    );
}

export default PrimaryButton;
