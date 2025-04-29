import React from 'react';

function TransparentButton({ label, handler }) {
    return (
        <button
            onClick={() => handler()}
            className="text-center px-4 py-2 bg-bgWhite hover:bg-bgBlue hover:text-white transition-all duration-200 ease-linear border border-bgBlue rounded-full  text-bgBlue linkText font-manFont !font-medium"
        >
            {label}
        </button>
    );
}

export default TransparentButton;
