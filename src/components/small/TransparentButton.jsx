import React from 'react';

function TransparentButton({ label, handler }) {
    return (
        <button
            onClick={() => handler()}
            className="px-4 py-2 bg-bgWhite hover:bg-bgBlue hover:text-white transition-all duration-200 ease-linear border border-bgBlue text-center 2xl:rounded-3xl xl:rounded-3xl lg:rounded-3xl lg:landscape:rounded-3xl 4k:rounded-3xl 3k:rounded-3xl md:portrait:rounded-3xl rounded-full  text-bgBlue font-manFont"
        >
            {label}
        </button>
    );
}

export default TransparentButton;
