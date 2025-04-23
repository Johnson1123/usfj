'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Container from '../layout/Container';

function StorySection() {
    return (
        <div className="py-24 md:min-h-[100vh] xl:py-[8rem] md:flex items-center">
            <div className="2xl:w-[55%]  4k:w-[50%] xl:w-[60%] w-[90%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-5 sm:landscape:gap-10 2xl:landscape:gap-10 md:gap-7 sm:landscape:items-center">
                    {/* image */}
                    <div className="relative top-0 left-0 col-span-1 w-full aspect-[1/1.2] sm:landscape:aspect-[1/1.2] md:aspect-[1/1.5] sm:landscape:order-last md:order-last">
                        <Image
                            src={`/categories-bag.png`}
                            alt="Insight and Inspiration"
                            fill={true}
                            quality={100}
                            layout="fill"
                            className="rounded-[.5rem]"
                        />
                    </div>
                    {/* content */}
                    <div className="flex flex-col gap-5 sm:landscape:gap-5 md:gap-7 col-span-1">
                        <h3 className="headingStyle pr-10">
                            Story about <br />
                            Our Brand
                        </h3>

                        <div className="">
                            <p className="pTextStyle sm:landscape:text-justify md:text-justify ">
                                At United Servants for Jesus (USFJ), we believe
                                in spreading the Gospel through everyday
                                essentials. Our shop was created to provide
                                faith-centered apparel, accessories, and
                                devotionals that inspire believers to live out
                                their mission with confidence. Every item is
                                crafted with love and designed to be a daily
                                reminder of God’s presence in your life. When
                                you shop with us, you’re not just buying
                                products—you’re joining a movement to share
                                Christ’s love with the world.
                            </p>
                        </div>

                        <Link
                            href={'/'}
                            className="pTextStyle cursor-pointer !text-primary"
                        >
                            Read full Story
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StorySection;
