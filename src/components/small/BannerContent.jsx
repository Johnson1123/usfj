import { headingStyle, pTextStyle } from '@/style/common';
import React from 'react';

function BannerContent({ pageName, description }) {
    return (
        <div className="h-full w-full grid grid-cols-10 items-end">
            <div className="relative col-start-2 col-end-10 md:col-end-9 lg:col-end-8 xl:col-end-7 bg-bgWhite/10 backdrop-blur-sm py-7 px-3 pl-[1rem] mb-10 mobile-landscape:mb-6 flex flex-col gap-7 rounded-3xl">
                <h2
                    className={`uppercase !text-white h3HeadingStyle !font-secondaryFont`}
                >
                    {pageName}
                </h2>
                <p
                    className={`!font-manFont font-[600] !text-bgWhite pTextStyle`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}

export default BannerContent;
