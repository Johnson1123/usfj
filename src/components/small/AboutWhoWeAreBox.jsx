import { pTextStyle, textStyle } from '@/style/common';
import React from 'react';

function AboutWhoWeAreMissonBox({ title, text }) {
    return (
        <div className="bg-[#F7F9FF] rounded-[20px] px-5 flex flex-col gap-5 py-7">
            <h3 className={`h3HeadingStyle`}>{title}</h3>
            <p className={`pTextStyle`}>{text}</p>
        </div>
    );
}

export default AboutWhoWeAreMissonBox;
