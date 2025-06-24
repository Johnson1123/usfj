import { h3HeadingStyle, pTextStyle, textStyle } from '@/style/common';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

function AboutWhoWeAreBtn({ label, active, steps, setSteps }) {
    return (
        <button
            className={`font-semibold flex justify-between items-center w-full my-10 h3HeadingStyle`}
            onClick={() => setSteps(active)}
        >
            <p
                className={`${
                    active == steps ? 'text-primary' : 'text-textColor'
                } w-full text-left`}
            >
                {label}
            </p>
            <IoIosArrowRoundForward
                className={`${
                    active == steps
                        ? 'text-primary'
                        : 'text-textColor -rotate-[45deg]'
                } text-[30px] 3k:text-[55px] transition-all duration-500`}
            />
        </button>
    );
}

export default AboutWhoWeAreBtn;
