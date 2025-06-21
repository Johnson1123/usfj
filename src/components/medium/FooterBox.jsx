'use client';
import useBaseurl from '@/utils/baseurl';
import React from 'react';

function FooterBox({ data }) {
    const baseurl = useBaseurl();
    return (
        <div className="footer__box w-full  md:p-4">
            <div className="">
                <h3 className="sub__heading text-white text-center md:text-left lg:text-left">
                    {data.title}
                </h3>
                <div className="sm:w-1/6 sm:mx-auto md:mx-0 md:w-1/4 h-[2px] bg-bgOrange mt-2 3k:sm:w-[10%]"></div>
            </div>
            <ul className="footer__box_ul flex flex-col items-center md:items-start md:mt-5 gap-2 mt-7">
                {data.items.map((item, i) => {
                    return (
                        <li key={i}>
                            <a
                                href={item.link}
                                key={i}
                                className="text-white text-decoration-none"
                                target="blank"
                            >
                                {item.label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FooterBox;
