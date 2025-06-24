import { h3HeadingStyle, headingStyle, pTextStyle } from '@/style/common';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const dummyData = [
    {
        title: 'Life Coaching',
        raisedAmount: '300',
        images: 'LifeCoachingImg.png',
        path: '/',
    },
    {
        title: 'Community Building',
        raisedAmount: '400',
        images: 'CommunityBuildingImg.png',
        path: '/',
    },
    {
        title: 'Counseling Services',
        raisedAmount: '200',
        images: 'CounselingSevicesImg.png',
        path: '/',
    },
];

export const SupportiveHousing = () => {
    return (
        <div className=" bg-[#F7F9FF] flex justify-center items-center py-16 xl:py-[8rem] 3k:py-[20rem] xl:min-h-[100vh]">
            <div className="overflow-hidden 2xl:w-[75%]  4k:w-[70%] w-[90%]">
                {/* header start */}

                <div className="flex justify-between items-center">
                    <div>
                        <h2 className={'headingStyle'}>
                            Supportive{' '}
                            <span className="text-bgOrange">Housing</span>
                        </h2>
                    </div>
                    {/* <div className="flex justify-center items-center gap-5">
                        <button
                            //   onClick={handlePrev}
                            className="hover:bg-bgBlue bg-bgWhite mediumCircle  flex justify-center items-center rounded-full border-none outline-none text-bgBlue hover:text-white transition-all duration-300 ease-linear"
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            //   onClick={handleNext}
                            className="hover:bg-bgBlue bg-bgWhite mediumCircle  flex justify-center items-center rounded-full border-none outline-none text-bgBlue hover:text-white transition-all duration-300 ease-linear"
                        >
                            <ArrowRight />
                        </button>
                    </div> */}
                </div>

                {/* header end */}

                <div className="mt-8 grid  lg:grid-cols-2 md:grid-cols-1  2xl:gap-20 xl:gap-20 lg:gap-20 4k:gap-20 3k:gap-20 md:gap-10">
                    <div className="flex flex-col gap-4">
                        <div className="relative w-full 2xl:h-[20dvw] xl:h-[20dvw] lg:h-[20dvw] 4k:h-[20dvw] 3k:h-[20dvw] md:portrait:h-[45dvw] h-[55dvw] rounded-xl overflow-hidden">
                            <Image
                                fill
                                src="/images/SafeAndStableImg.png"
                                className="object-cover"
                                alt="SafeAndStableImg"
                            />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-4">
                            <div className="bg-primary px-4 py-2 rounded-full">
                                <p className={`pTextStyle !text-white`}>
                                    $5,000 Raised
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className={`h3HeadingStyle`}>
                                    Safe and Stable Environment
                                </h3>
                                <p className={`pTextStyle`}>
                                    Our Supportive Housing Program will offer a
                                    safe, stable living environment for young
                                    adults who need temporary housing while they
                                    build a foundation for their future.
                                </p>
                                <div className="w-full">
                                    <div className="relative w-full bg-primary/10 rounded-full h-[1.2dvh]">
                                        <div className="absolute top-0 left-0 rounded-full bg-primary w-[10%] h-full" />
                                    </div>
                                    <div className="w-full flex justify-between items-center mt-1">
                                        <p className={` pTextStyle`}>
                                            10 Donors{' '}
                                        </p>
                                        <p className={`pTextStyle`}>20%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mobile-landscape:grid-cols-2 md-landscape:grid-cols-2 my-10">
                        {dummyData.map((item, id) => (
                            <div
                                key={id}
                                className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row 4k:flex-row 3k:flex-row  justify-center 2xl:gap-10 xl:gap-10 lg:gap-10 4k:gap-10 3k:gap-10 md:portrait:gap-8 gap-6 p-4"
                            >
                                <div className="relative 2xl:h-[10dvw] xl:h-[10dvw] lg:h-[10dvw] 4k:h-[10dvw] 3k:h-[10dvw] md:portrait:h-[14dvw] h-[40dvw]  2xl:flex-1 xl:flex-1 lg:flex-1 md:portrait:flex-1 4k:flex-1 3k:flex-1  rounded-lg w-full">
                                    <Image
                                        src={`/images/${item.images}`}
                                        fill
                                        className="object-cover rounded-lg"
                                        alt={`${item.images}`}
                                    />
                                    <button className="bg-bgBlue text-bgWhite mediumCircle flex justify-center items-center rounded-full border-none outline-none hover:text-bgBlue hover:bg-white -rotate-45 hover:rotate-0 transition-all duration-300 ease-linear absolute 2xl:-right-5 xl:-right-5 lg:-right-5 md:portrait:-right-5 4k:-right-5 3k:-right-5 -right-4 top-[35%]">
                                        <ArrowRight />
                                    </button>
                                </div>
                                <div className="flex-1 flex justify-start items-center">
                                    <div className="flex flex-col gap-3">
                                        <div className="bg-primary px-4 py-2 rounded-full max-w-max">
                                            <p
                                                className={` pTextStyle !text-white`}
                                            >
                                                ${item.raisedAmount} Raised
                                            </p>
                                        </div>
                                        <h3
                                            className={`font-manFont h3HeadingStyle`}
                                        >
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
