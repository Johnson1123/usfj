import React from 'react';
import './Whatwedosection.css';
import Link from 'next/link';
import { AngleArrowRight } from '../../../../public/SVGs/AllSvgs';
import Image from 'next/image';

export const Whatwedosection = () => {
    return (
        <>
            <div className="min-h-[100dvh] py-16 xl:py-[9rem] 3k:py-[20rem] ">
                <div className="2xl:w-[75%]  4k:w-[70%] w-[90%] mx-auto flex justify-between items-center flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row 3k:flex-row md:portrait:flex-row gap-y-4">
                    {/* Heading section */}
                    <div className="flex-1">
                        <h2 className={'headingStyle'}>
                            What We <span className="text-primary">Do</span>
                        </h2>
                    </div>

                    <div className="flex-1 2xl:px-3 xl:px-3 lg:px-3 4k:px-3 3k:px-3 md:portrait:px-1.5">
                        <p
                            className={`2xl:text-right xl:text-right lg:text-right 4k:text-right 3k:text-right md:portrait:text-right text-center pTextStyle text-bgBlack/70 font-[500]`}
                        >
                            Our services are rooted in faith, driven by
                            compassion, and aimed at empowering young adults to
                            succeed in every aspect of life.
                        </p>
                    </div>
                </div>

                {/* Heading end here */}

                <div className="w-[90%] md:landscape:w-[98%]  mx-auto py-10 grid gap-10">
                    {/* firth columns */}
                    <div className="grid gap-3 sm:landscape:gap-10 md:gap-10 md:grid-cols-1 md:landscape:grid-cols-2">
                        {/* first box */}
                        <div className="grid gap-2 sm:landscape:grid-cols-2  md:grid-10 sm:landscape:gap-10 md:grid-cols-2 md:gap-10 items-center">
                            {/* first image */}

                            <div className="rounded-xl overflow-hidden sm:landscape:col-span-1">
                                <div className="relative w-full h-[250px] md:h-[350px]">
                                    <Image
                                        src="/images/SpiritualGuidanceImg.png"
                                        fill
                                        className="object-cover rounded-xl"
                                        alt="Life Skills"
                                    />
                                </div>
                            </div>

                            {/* first content */}

                            <div className="py-4 flex justify-center items-center">
                                <div className="flex flex-col gap-4">
                                    <h4 className="h3HeadingStyle">
                                        Spiritual Guidance & Mentorship
                                    </h4>
                                    <p className={`pTextStyle`}>
                                        Spiritual growth is at the heart of
                                        everything we do. Through Bible studies,
                                        prayer groups, and one-on-one
                                        mentorship, we guide individuals on
                                        their journey of faith.
                                    </p>
                                    <Link
                                        href="/"
                                        className="flex justify-start items-center gap-4 !text-primary font-manFont font-[600] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] 4k:text-[1.2dvw] 3k:text-[1.2dvw] md:portrait:text-[2.1dvw] text-[4.3dvw] pTextStyle"
                                    >
                                        Get Started <AngleArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* second box */}
                        <div className="grid gap-2 sm:landscape:grid-cols-2 sm:landscape:gap-10 items-center md:grid-cols-2 md:gap-10">
                            {/* second image */}
                            <div className="rounded-xl overflow-hidden sm:landscape:col-span-1 sm:landscape:order-last order-last md:order-first md:landscape:order-first">
                                <div className="relative w-full h-[250px] md:h-[350px]">
                                    <Image
                                        src="/images/LifeSkillsImg.png"
                                        fill
                                        className="object-cover rounded-xl"
                                        alt="Life Skills"
                                    />
                                </div>
                            </div>
                            {/* second content */}
                            <div className=" py-4 flex flex-col gap-4">
                                <h3
                                    className={`font-manFont  h3HeadingStyle text-bgBlack`}
                                >
                                    Life Skills
                                </h3>
                                <p
                                    className={`text-bgBlack/70 font-[400] font-secondaryFont pTextStyle`}
                                >
                                    We provide practical training in financial
                                    literacy, career development, and personal
                                    responsibility to help young adults develop
                                    the tools they need for independent living.
                                </p>
                                <Link
                                    href="/"
                                    className="flex justify-start items-center gap-4 !text-primary font-manFont font-[600] pTextStyle"
                                >
                                    Get Started <AngleArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* second columns */}
                    <div className="grid gap-3 sm:landscape:gap-10 md:gap-10 md:landscape:grid-cols-2">
                        {/* third box */}
                        <div className="grid sm:landscape:grid-cols-2 sm:landscape:gap-10 items-center md:grid-cols-2 md:gap-10">
                            {/* third image */}
                            <div className="rounded-xl overflow-hidden sm:landscape:col-span-1 md:order-last">
                                <div className="relative w-full h-[250px] md:h-[350px]">
                                    <Image
                                        src="/images/SupportiveHousingImg.png"
                                        fill
                                        className="object-cover rounded-xl"
                                        alt="Supportive Housing"
                                    />
                                </div>
                            </div>

                            {/* third content */}
                            <div className="py-4">
                                <div className="flex flex-col gap-4">
                                    <h3
                                        className={`font-manFont font-[600]  text-bgBlack h3HeadingStyle`}
                                    >
                                        Supportive Housing
                                    </h3>
                                    <p
                                        className={`text-bgBlack/70 font-[400] font-secondaryFont pTextStyle`}
                                    >
                                        We provide a safe and supportive living
                                        environment for young adults who need a
                                        stable place to live while they work on
                                        building their future.
                                    </p>
                                    <Link
                                        href="/"
                                        className="flex justify-start items-center gap-4 pTextStyle !text-primary"
                                    >
                                        Get Started <AngleArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* fourth box */}
                        <div className="grid sm:landscape:grid-cols-2 sm:landscape:gap-10 items-center md:grid-cols-2 md:gap-10">
                            {/* fourth image */}
                            <div className="overflow-hidden rounded-xl col-span-1 sm:landscape:order-last md:order-last">
                                <div className="relative w-full h-[250px] md:h-[350px]">
                                    <Image
                                        src="/images/EducationSupportImg.png"
                                        fill
                                        className="object-cover"
                                        alt="Education Support"
                                    />
                                </div>
                            </div>

                            {/* fouth content */}
                            <div className="py-4">
                                <div className="flex flex-col gap-4">
                                    <h4
                                        className={`font-manFont font-[600]  text-bgBlack h3HeadingStyle`}
                                    >
                                        Education Support
                                    </h4>
                                    <p
                                        className={`text-bgBlack/70 font-[400] font-secondaryFont pTextStyle`}
                                    >
                                        We offer educational programs and
                                        tutoring to help young adults further
                                        their education, pursue new
                                        opportunities, and reach their academic
                                        goals.
                                    </p>
                                    <Link
                                        href="/"
                                        className="flex justify-start items-center gap-4 !text-primary font-manFont font-[600] pTextStyle"
                                    >
                                        Get Started <AngleArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* third columns */}
                    <div className="grid gap-3 sm:landscape:gap-10: md:gap-10 md:landscape:grid-cols-2">
                        {/* 5th box  */}

                        <div className="grid sm:landscape:grid-cols-2 sm:landscape:gap-10 items-center md:grid-cols-2 md:gap-10">
                            {/* 5th image */}
                            <div className="rounded-xl overflow-hidden">
                                <div className="relative w-full h-[250px] md:h-[350px]">
                                    <Image
                                        src="/images/CommunitySupportImg.png"
                                        fill
                                        className="object-cover rounded-xl"
                                        alt="Community Support and Volunteerism"
                                    />
                                </div>
                            </div>
                            {/* 5th content */}
                            <div className="py-4">
                                <div className="flex flex-col gap-4">
                                    <h3
                                        className={`font-manFont text-bgBlack h3HeadingStyle`}
                                    >
                                        Community Support and Volunteerism
                                    </h3>
                                    <p
                                        className={`text-bgBlack/70 font-[400] font-secondaryFont pTextStyle`}
                                    >
                                        Service to others is a core value at
                                        United Servants for Jesus. We encourage
                                        our participants to engage with their
                                        community through volunteer work.
                                    </p>
                                    <Link
                                        href="/"
                                        className="flex justify-start items-center gap-4 !text-primary font-manFont pTextStyle"
                                    >
                                        Get Started <AngleArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* sixth box */}

                        <div className="grid sm:landscape:grid-cols-2 sm:landscape:gap-10 items-center md:grid-cols-2 md:gap-10">
                            {/* 6th image */}
                            <div className="rounded-xl overflow-hidden sm:landscape:order-last md:order-last md:landscape:order-first">
                                <div className="relative w-full h-[250px] md:h-[350px]">
                                    <Image
                                        src="/images/HealthAndWellneeImg.png"
                                        fill
                                        className="object-cover"
                                        alt="Health and Wellness Support"
                                    />
                                </div>
                            </div>

                            {/* 6th content */}
                            <div className="py-4">
                                <div className="flex flex-col gap-4">
                                    <h3
                                        className={`font-manFont font-[600] text-black h3HeadingStyle`}
                                    >
                                        Health and Wellness Support
                                    </h3>
                                    <p
                                        className={`text-bgBlack/70 font-[400] font-secondaryFont pTextStyle`}
                                    >
                                        Our Health and Wellness Support services
                                        are designed to promote balanced living
                                        and ensure that young adults are
                                        equipped to maintain healthy lifestyles.
                                    </p>
                                    <Link
                                        href="/"
                                        className="flex justify-start items-center gap-4 text-primary font-manFont"
                                    >
                                        Get Started <AngleArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
