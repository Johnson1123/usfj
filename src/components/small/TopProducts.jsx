'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

function TopProducts({ name, label, price, discount }) {
    return (
        <div>
            <Link href={'/shop/product-details/1'}>
                <div className=" h-[400px] w-full m-w-[250px] relative left-0 top-0 bg-slate-100 hover:bg-bgBlue rounded-2xl">
                    <Image
                        src={`/categories-bag.png`}
                        alt="Insight and Inspiration"
                        fill={true}
                        quality={100}
                        layout="fill"
                        className="object-cover rounded-[1rem]"
                    />
                    <div className="absolute top-2 left-2">
                        <p className=" rounded-full px-2 py-[2px] bg-white mt-5 pTextStyle w-max !text-sm">
                            Sale
                        </p>
                    </div>
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[80%]">
                        <div className="w-full flex flex-col justify-center items-center">
                            <p className="h3HeadingStyle !text-white">{name}</p>
                            <p className="!text-white pTextStyle">{label}</p>
                            <div className="flex gap-2">
                                <p className=" rounded-full px-2 py-[2px] bg-white mt-5 pTextStyle w-max !text-sm line-through !text-primary">
                                    {`$${price}`}
                                </p>
                                <p className=" rounded-full px-2 py-[2px] bg-white mt-5 pTextStyle w-max !text-sm">
                                    {`$${discount}`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default TopProducts;
