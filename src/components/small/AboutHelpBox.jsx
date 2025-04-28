import React from 'react';
import { pTextStyle, textStyle } from '@/style/common';

function AboutHelpBox({ Icon, title, text }) {
    return (
        <div className="flex flex-col gap-5 bg-[#F7F9FF] rounded-[20px] py-7 px-2 3k:px-5 md:col-span-1">
            <Icon />
            <h4 className={`h3HeadingStyle`}>{title}</h4>
            <p className={`pTextStyle`}>{text}</p>
        </div>
    );
}

export default AboutHelpBox;
