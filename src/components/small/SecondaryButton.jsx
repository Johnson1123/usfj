import React from 'react';

function SecondaryButton({ label, handler }) {
    return (
        <button
            onClick={() => handler()}
            className="text-center rounded-full px-6 lg:px-3 xl:px-6 py-2
        text-white bg-bgOrange cursor-pointer linkText font-manFont !font-medium
        transition-all duration-300 ease-in-out hover:text-blueColor hover:bg-transparent 
        border hover:border-bgOrange hover:text-bgOrange"
        >
            {label}
        </button>
    );
}

export default SecondaryButton;
