'use client';
import React, { useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { executives } from '@/constant/data';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';

function AboutExecutiveSlider() {
    const swiperRef = useRef();
    const handeleNext = () => {
        swiperRef?.current.slideNext();
    };

    const handlePrev = () => {
        swiperRef?.current.slidePrev();
    };

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (el) => {
        if (el == null) return;
        const currentSlide = el?.activeIndex;
        setActiveIndex(currentSlide);
    };

    return (
        <>
            <div className="bg-white py-5 mt-5 rounded-2xl">
                <div className="mt-5 md:landscape:mt-10 md:mt-10">
                    <Swiper
                        speed={500}
                        modules={[Pagination, EffectFade]}
                        effect={'fade'}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            400: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                        }}
                        initialSlide={activeIndex}
                        onActiveIndexChange={updateIndex}
                    >
                        {executives.map((item, i) => {
                            return (
                                <SwiperSlide
                                    key={i}
                                    className="slides-width bg-white"
                                >
                                    <div className="grid sm:landscape:grid-cols-2 2xl:landscape:grid-cols-5 md:portrait:grid-cols-2 gap-5 my-5 md:landscape:gap-16 px-5 bg-white">
                                        <div className="grid grid-cols-1  2xl:col-span-2 w-full xl:w-[100%_/_1.5]">
                                            <div className="w-full 2xl:w-full grid gap-5 mx-auto">
                                                {/* control btn */}

                                                <div className="grid  grid-cols-7 gap-5 items-center md:order-last sm:landscape:order-last w-full">
                                                    <div className="justity-start">
                                                        <button
                                                            className="col-span-1 mediumCircle bg-bgBlue rounded-full hover:bg-white group transition-all duration-100"
                                                            onClick={handlePrev}
                                                        >
                                                            <FaAngleLeft className="text-white group-hover:text-bgBlue" />
                                                        </button>
                                                    </div>
                                                    <div className="col-span-5 flex gap-5 items-center">
                                                        <span>
                                                            0{activeIndex + 1}
                                                        </span>
                                                        <progress
                                                            value={
                                                                activeIndex + 1
                                                            }
                                                            max={
                                                                executives.length
                                                            }
                                                            className="h-1 flex-1 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-bgBlue [&::-moz-progress-bar]:bg-gray-100"
                                                        />
                                                        <span>
                                                            0{executives.length}
                                                        </span>
                                                    </div>

                                                    <div className="place-items-end col-span-1">
                                                        <button
                                                            className=" mediumCircle rounded-full bg-bgBlue hover:bg-white group transition-all duration-100"
                                                            onClick={
                                                                handeleNext
                                                            }
                                                        >
                                                            <FaAngleRight className="text-white group-hover:text-bgBlue" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* active slider image */}
                                                <div className="relative h-auto aspect-square overflow-hidden rounded-xl">
                                                    <Image
                                                        src={`/images/${item.image}`}
                                                        alt="Insight and Inspiration"
                                                        fill={true}
                                                        layout="fill"
                                                        className="object-cover rounded-[1rem]"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* slider content container */}
                                        <div className="grid gap-5  2xl:col-span-3 bg-white">
                                            {/* content heading, role and text  */}
                                            <div className="mt-4 md:mt-0 sm:landscape:mt-0 grid gap-3">
                                                <h3
                                                    className={`headingStyle !font-[500]`}
                                                >
                                                    {item.name}
                                                </h3>
                                                <h4 className="h3HeadingStyle">
                                                    {item.role}
                                                </h4>
                                                <div className="w-full">
                                                    <p className="pTextStyle text-justify">
                                                        <em className="">
                                                            {item.text}
                                                        </em>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="md:grid grid-cols-3 gap-5 mt-5 hidden sm:landscape:grid">
                                                {executives
                                                    .filter(
                                                        (item) =>
                                                            item.id !==
                                                            activeIndex,
                                                    )
                                                    .map((el, k) => {
                                                        return (
                                                            <div
                                                                key={k}
                                                                className="relative left-0 top-0 aspect-square w-full overflow-hidden"
                                                                onClick={() => {
                                                                    swiperRef?.current.slideTo(
                                                                        el.id,
                                                                        500,
                                                                    );
                                                                }}
                                                            >
                                                                <Image
                                                                    src={`/images/${el.image}`}
                                                                    alt="Insight and Inspiration"
                                                                    layout="fill"
                                                                    fill={true}
                                                                    className="rounded-[1rem]"
                                                                />
                                                            </div>
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default AboutExecutiveSlider;
