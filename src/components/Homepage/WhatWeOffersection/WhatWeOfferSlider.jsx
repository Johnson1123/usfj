// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { offerDummyData } from '@/constant/data';
import Link from 'next/link';
import '../../../style/swiper.css';
import TransparentButton from '@/components/small/TransparentButton';

export default function WhatWeOfferSlider({ swiperRef }) {
    return (
        <div className="w-[90%] 3k:w-[80%] mx-auto h-[100%] overflow-hidden">
            <Swiper
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                speed={500}
                loop={false}
                observer={true}
                // centeredSlides
                observeParents={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    760: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        slidesPerGroup: 3,
                    },
                    2200: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        slidesPerGroup: 3,
                    },
                }}
            >
                {offerDummyData.map((item, id) => {
                    return (
                        <SwiperSlide key={id} className="slides-width">
                            <div
                                className=" mx-auto md:mx-0 flex-shrink-0 bg-bgWhite py-2 px-4 flex justify-center items-center flex-col gap-4 rounded-lg transition-all  duration-700 ease-in-out  aspect-square xl:aspect-auto 2xl:aspect-square w-full max-w-[400px] xl:w-auto xl:h-[350px] 2xl:w-full 2xl:h-[450px]"
                                key={id}
                            >
                                <div className="h-[4rem] w-[4rem]   p-5 bg-bgWhite rounded-full shadow-md flex justify-center items-center">
                                    {item?.icon}
                                </div>
                                <div>
                                    <h3 className="text-[#323232]  h3HeadingStyle  text-center">
                                        {item?.title}
                                    </h3>
                                </div>
                                <div>
                                    <p
                                        className={`font-secondaryFont font-[500] pTextStyle text-[#323232]/65 text-center`}
                                    >
                                        {item?.smallInfo}
                                    </p>
                                </div>
                                <TransparentButton
                                    label={'Join USFJ'}
                                    handler={() => {}}
                                />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
