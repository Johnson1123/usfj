import React from 'react';

function SecondaryButton({ label, handler }) {
    return (
        <button
            onClick={() => handler()}
            className="text-center 2xl:rounded-3xl xl:rounded-3xl lg:rounded-3xl lg:landscape:rounded-3xl 4k:rounded-3xl 3k:rounded-3xl md:portrait:rounded-3xl rounded-full px-4 py-2
        text-white bg-bgOrange cursor-pointer font-manFont !font-medium
        transition-all duration-300 ease-in-out hover:bg-transparent 
        border hover:border-bgOrange hover:text-bgOrange"
        >
            {label}
        </button>
    );
}

export default SecondaryButton;
