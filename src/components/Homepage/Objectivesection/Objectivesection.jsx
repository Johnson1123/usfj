import React from 'react';
import './Objectivesection.css';
import Image from 'next/image';
import { ArrowIconWhite } from '../../../../public/SVGs/AllSvgs';
import { ArrowRight } from 'lucide-react';
import PrimaryButton from '@/components/small/PrimaryBtn';

export const Objectivesection = () => {
    return (
        <div className="relative min-h-[100dvh] flex justify-center items-center py-16 xl:py-[9rem] 3k:py-[20rem]">
            <div className="absolute top-0 left-0 w-full h-full opacity-60">
                <Image
                    fill={true}
                    loading="lazy"
                    src="/images/SectionBg.jpeg"
                    className="object-cover opacity-30 w-full h-full"
                    alt="section-bg-image"
                />
            </div>

            <div className="grid grid-cols-1 gap-16 relative opacity-100 z-20 2xl:w-[75%]  4k:w-[70%] w-[90%]">
                {/* first section */}

                <div className="w-full grid grid-cols-1 sm:landscape:grid-cols-2 md:portrait:grid-cols-10 lg:landscape:grid-cols-10   xl:portrait:grid-cols-2 gap-8 md:grid-cols-2 md:gap-20 lg:gap-[10vw] 2xl:gap-[7vw] 3k:gap-[7vw]">
                    <div className=" md:portrait:col-start-1 md:portrait:col-end-7 lg:landscape:col-span-6 xl:portrait:col-start-1 xl:portrait:col-end-2">
                        <h2 className="headingStyle md:w-[100%] lg:w-[100%] 2xl:w-[100%] 4k:w-[80%]">
                            Building a Better <br />
                            World Through <br />
                            <span className="text-primary">
                                Unity and Compassion
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 w-full md:portrait:col-span-4 xl:portrait:col-start-2 xl:portrait:col-end-3 lg:landscape:col-span-4">
                        <div className="relative rounded-3xl overflow-hidden">
                            <Image
                                src="/images/BuildingABetterImg.png"
                                height={650}
                                width={650}
                                className="object-cover object-center w-full lg:h-[250px] 3k:h-[400px] aspect-square mobile-landscape:aspect-video md-landscape:aspect-video lg-a"
                                loading="lazy"
                            />
                        </div>
                        <div className="2xl:ml-auto xl:ml-auto lg:ml-auto 4k:ml-auto 3k:ml-auto md:portrait:mx-auto mx-auto py-1.5">
                            <p
                                className={`font-secondaryFont font-[500] text-bgBlack/70 text-start mobile-landscape:text-right pTextStyle`}
                            >
                                Through practical service, our goal is to create
                                a community where everyone has the opportunity
                                to thrive and grow, both personally and
                                spiritually
                            </p>
                        </div>
                    </div>
                </div>

                {/* second  section*/}

                <div className="w-full grid grid-cols-1 gap-10 mt-12 md-landscape:grid-cols-2 mobile-landscape:grid-cols-2 md:grid-cols-2 lg:gap-[16vw] 2xl:gap-[10vw]">
                    <div className="col-span-1 mobile-landscape:order-last md:order-last">
                        <div className="lg:flex flex-col items-end h-full justify-between w-full">
                            <h3 className="text-bgBlue font-manFont headingStyle mobile-landscape:text-right md-landscape:text-right md:text-right">
                                Supporting <br /> Causes that <br />
                                <span className="text-primary">
                                    Change Lives
                                </span>
                            </h3>

                            <div className="mt-10 flex mobile-landscape:mt-12 md-landscape:mt-14 mobile-landscape:justify-end md-landscape:justify-end md:justify-end">
                                <PrimaryButton
                                    label={'Join USFJ'}
                                    handler={() => {}}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 ">
                        <div className="">
                            <div className="relative w-[100%] rounded-2xl overflow-hidden mx-auto">
                                <Image
                                    src="/images/SupportingImg.png"
                                    alt="Building a Better World Through Unity and Compassion"
                                    height={650}
                                    width={650}
                                    className="object-cover object-center w-full lg:h-[300px] 3k:h-[400px] aspect-square mobile-landscape:aspect-video md-landscape:aspect-video md:aspect-auto"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third section */}

                <div className="w-full grid  grid-cols-1 gap-10 mt-12 mobile-landscape:grid-cols-2 md-landscape:grid-cols-2 md:grid-cols-2 lg:gap-[16vw] 2xl:gap-[10vw]">
                    <div className="flex flex-col gap-6 ">
                        <div>
                            <h2 className={'headingStyle  '}>
                                Driven by Hope,
                                <br /> Committed to <br />{' '}
                                <span className="text-primary">Humanity</span>
                            </h2>
                        </div>

                        <div className="">
                            <p
                                className={`font-secondaryFont font-[500] text-bgBlack/70 no-scrollbar text-left pTextStyle`}
                            >
                                We believe that every individual has the
                                potential to live a fulfilling life, grounded in
                                faith and equipped with the tools needed for
                                independence and personal growth.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 h-full">
                        <div className="h-full">
                            <div className="relative w-[100%] rounded-2xl overflow-hidden mx-auto">
                                <Image
                                    src="/images/DrivenByHopeImg.png"
                                    alt="Building a Better World Through Unity and Compassion"
                                    height={600}
                                    width={650}
                                    className="object-cover w-full lg:h-[300px] 3k:h-[400px] object-center aspect-square"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fourth section */}

                <div className="w-full grid grid-cols-1 gap-6 mt-12 mobile-landscape:gap-10 md-landscape:gap-10">
                    <div className="justify-between items-center grid grid-cols-10">
                        <h2 className={'headingStyle col-span-8'}>
                            Championing Causes that{' '}
                            <span className="text-primary">Matter</span>
                        </h2>
                        <div className="col-span-2 justify-items-end">
                            <button className="bg-bgBlue mediumCircle">
                                <ArrowIconWhite />
                            </button>
                        </div>
                    </div>

                    <div className="w-[100%] grid grid-cols-1  mobile-landscape:grid-cols-2 md-landscape:grid-cols-2 md:grid-cols-2 lg:grid-cols-7 gap-6 3k:gap-16">
                        {/* Image one */}
                        <div className="relative lg:col-span-3">
                            <div className="relative rounded-lg overflow-hidden">
                                <Image
                                    src="/images/MonthlySupportImg.png"
                                    width={1560}
                                    height={650}
                                    loading="lazy"
                                    className="object-cover w-full aspect-video brightness-75 lg:h-[250px] 3k:h-[350px]"
                                />
                            </div>
                            <div className="absolute bottom-0 w-full left-0 p-6">
                                <h4
                                    className={`font-[500] font-manFont  !text-white h3HeadingStyle`}
                                >
                                    Monthly Administrative Support
                                </h4>
                            </div>
                        </div>

                        {/* image two */}
                        <div className=" relative w-full lg:col-span-4">
                            <div className="relative rounded-lg overflow-hidden">
                                <Image
                                    src="/images/HousingImg.png"
                                    width={1560}
                                    height={650}
                                    loading="lazy"
                                    className="object-cover w-full aspect-video brightness-75 lg:h-[250px] 3k:h-[350px]"
                                />
                            </div>

                            <div className="absolute bottom-0 w-full left-0 p-6 grid grid-cols-10 mobile-landscape:px-3 md-landscape:px-3 items-center">
                                <h3
                                    className={`font-[500] font-manFont  !text-white h3HeadingStyle shadow-2xl col-span-8`}
                                >
                                    Purchase of Housing Facilities
                                </h3>

                                <div className="col-span-2 justify-items-end">
                                    <button className="flex justify-center text-bgBlue items-center mediumCircle bg-white hover:text-white hover:bg-bgBlue transition-all duration-200 ease-linear">
                                        <ArrowRight className=" -rotate-45" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
