'use client';
import Link from 'next/link';
import React from 'react';

function FooterContact({ data }) {
    return (
        <div className="footer__contact_box w-full  md:flex md:flex-col md:p-4">
            <div className="">
                <div className="">
                    <h3 className="sub__heading text-white text-center md:text-left lg:text-left">
                        {data.title}
                    </h3>
                    <div className="w-1/6 sm:w-1/6 sm:mx-auto mx-auto md:mx-0 md:w-1/4 h-[2px] 3k:sm:w-[10%] bg-bgOrange mt-2"></div>
                </div>
                <div className="contact_item_wrapper flex flex-col items-center md:items-start lg:items-start md:mt-5 gap-2 mt-7">
                    <p className="text-white text-center md:text-left lg:text-left">
                        {data.items.address}
                    </p>
                    <p className="text-white text-center md:text-left lg:text-left">
                        {data.items.tel}
                    </p>
                    <Link
                        href={`mailto:${data.items.email}`}
                        className="text-white text-center md:text-left lg:text-left cursor-pointer"
                    >
                        {data.items.email}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FooterContact;
