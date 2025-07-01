import useBaseurl from '@/utils/baseurl';
import Link from 'next/link';
import React from 'react';

function LargeHeader({ scrollPositionY }) {
    const baseurl = useBaseurl();
    return (
        <div
            className={`bg-bgWhite w-[90%] hidden justify-between items-center  px-3  md-landscape:py-3 lg:flex ${
                scrollPositionY >= 5
                    ? ' rounded-none w-full !bg-transparent'
                    : 'rounded-full headerMainWrapper'
            } transition-all  duration-300 ease-linear h-full`}
        >
            <div className="w-auto h-full">
                <Link href={baseurl}>
                    <img
                        src="/images/USFJ-DARK-Logo.png"
                        fill
                        alt="usfj-logo"
                        className="w-[150px] 3k:w-[180px]"
                    />
                </Link>
            </div>
        </div>
    );
}

export default LargeHeader;
